const bcrypt = require("bcrypt");

const { User } = require("../models/models.js");
const ErrorService = require("./helpers/errorService.js");
const TokenService = require("./helpers/tokenService.js");
const MailService = require("./helpers/mailService.js");

const { v4: uuidv4 } = require("uuid");

class UserService {
    static registration = async ( email, password, role ) => {
        const oldUser = await User.findOne({ where: { email } });
        if (oldUser)
            throw ErrorService.BadRequest(
                "User with this email already registered!"
            );
            const activationLink = uuidv4();
        console.log(activationLink);
        const hashedPassword = await bcrypt.hash(password, 3);
        const user = await User.create({
          email,
          password: hashedPassword,
          role,
          activationLink,
        });
                
        await MailService.sendMail(
          email, `${process.env.API}/api/v1/activate/${activationLink}`
        );

        const tokens = TokenService.generateTokens({
          id: user.id,
          email,
          role,
        });
        console.log(tokens)
        return {
            ...tokens,
            user: {
                id: user.id,
                email,
                role,
            },
        };
    };

    static login = async (email, password) => {
        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                throw ErrorService.BadRequest("Wrong email or password");
            }

            const comparePassword = await bcrypt.compare(
                password,
                user.password
            );
            if (!comparePassword) {
                throw ErrorService.BadRequest("Wrong email or password");
            }
            const tokens = TokenService.generateTokens({
                id: user.id,
                email,
                password,
            });
            return {
                ...tokens,
                user: {
                  id: user.id,
                    email,
                    password,
                },
            };
        } catch (error) {
            next(error);
        }
    };

    static getAll = async () => {
        return await User.findAll({ attributes: ["email", "role", "id"] });
    };

    static getOne = async (id) => {
        return await User.findOne({ where: { id } });
    };

    static delete = async (id) => {
        return await User.destroy({ where: { id } });
    };

    static activate = async (link) => {
        const user = await User.findOne({ where: { activationLink: link } });
        if (!user) {
            throw ErrorService.BadRequest("Activation is incorrect");
        }
        user.isActivated = true;
        await user.save();
    };
}

module.exports = UserService;
