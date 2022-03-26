const UserService = require('../services/userService.js')
class UserController{
    static registration = async (req, res, next) => {
        try {
          const { email, password } = req.body;
    
          const userData = await UserService.registration(email, password);
    
          return res.json(userData);
        } catch (error) {
          next(error);
        }
      };

    static login = async (req,res,next)=>{
        try {

            const{email,password}=req.body;
            
            const userData = await UserService.login(email, password)

            return res.json(userData)


        } catch (error) {
            next(error)
        }
    }

    static getAll = async(req,res,next)=>{
        try {
            const resp = await UserService.getAll()
            return res.json(resp)
        } catch (error) {
            next(error)
        }
    }

    static getOne = async(req,res,next) => {
        try {
            const resp = await UserService.getOne()
            return res.json(resp)
        } catch (error) {
            next(error)
        }
    }

    static delete = async(req,res,next)=>{

        try {
            
            const {_id} = req.params;
            await UserService.delete(_id)
            return req.json({msg: 'profile deleted'})

        } catch (error) {
            next(error)
        }

    }
    
    static activate= async(req,res,next)=>{
        try {

            const {link} = req.params;

            await UserService.activateUser(link)

            return res.redirect('http://google.com')

        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;