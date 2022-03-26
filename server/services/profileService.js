const { Investor, Startupper } = require("./../models/models.js");
const ErrorService = require("./helpers/errorService.js");
class InvestorService {
    static create = async ({ firstName, lastName, phone, userId }) => {
        return await Investor.create({ firstName, lastName, phone, userId });
    };
    static getAll = async () => {
        return await Investor.findAll();
    };
    static update = async ({ id, firstName, lastName, phone, userId }) => {
        const profile = await Investor.findOne({ where: { id } });
        console.log(profile);
        if (!profile) {
            throw ErrorService.BadRequest("Profile not found");
        }
        firstName = firstName || profile.firstName;
        lastName = lastName || profile.lastName;
        phone = phone || profile.phone;
        userId = userId || profile.userId;

        await Investor.update(
            { firstName, lastName, phone, userId },
            { where: { id } }
        );
    };
    static getOne = async (id) => {
        const profile = await Investor.findOne({ where: { id } });
        if (!profile) throw ErrorService.BadRequest("Profile not found");
        return profile;
    };
    static delete = async (id) => {
        return await Investor.destroy({where: {id}})
    };
}
class StartupperService {
    static create = async ({
        firstName,
        lastName,
        phone,
        businessPlan,
        presentationFile,
        mvp,
        userId,
    }) => {
        return await Startupper.create({
            firstName,
            lastName,
            phone,
            businessPlan,
            presentationFile,
            mvp,
            userId,
        });
    };
    static getAll = async () => {
        return await Startupper.findAll();
    };
    static update = async ({
        id,
        firstName,
        lastName,
        phone,
        businessPlan,
        presentationFile,
        mvp,
        userId,
    }) => {
        const profile = await Startupper.findOne({ where: { id } });
        console.log(profile);
        if (!profile) {
            throw ErrorService.BadRequest("Profile not found");
        }
        firstName = firstName || profile.firstName;
        lastName = lastName || profile.lastName;
        phone = phone || profile.phone;
        businessPlan = businessPlan || profile.businessPlan;
        presentationFile = presentationFile || profile.businessPlan;
        mvp = mvp || profile.businessPlan;
        userId = userId || profile.userId;

        await Startupper.update(
            { firstName, lastName, phone, userId },
            { where: { id } }
        );
    };
    static getOne = async (id) => {
        const profile = await Startupper.findOne({ where: { id } });
        if (!profile) throw ErrorService.BadRequest("Profile not found");
        return profile;
    };
    static delete = async (id) => {
        return await Investor.destroy({where: {id}})
    };
}

module.exports = { InvestorService, StartupperService };
