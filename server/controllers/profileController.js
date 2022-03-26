const {InvestorService, StartupperService} = require('./../services/profileService');

class InvestorController{
    static create = async(req, res, next) =>{
        try {
            const {firstName, lastName, phone } = req.body;
            const {user} = req;
            console.log(user)
            console.log(firstName)
            await InvestorService.create({firstName, lastName, phone, userId: user.id})
            return res.json({msg: "Your investor profile successfully created"})
        } catch (error) {
            next(error)
        }
    }
    static getAll = async(req,res,next) =>{
        try {
            const profiles =  await InvestorService.getAll();
            return res.json(profiles)
        } catch (error) {
            next(error)
        }
    }
    static update = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const {firstName, lastName, phone, userId} = req.body;
            await InvestorService.update({firstName, lastName, phone, userId, id})
            return res.json({msg: "Your investor profile successfully updated"})
        } catch (error) {
            next(error)
        }
    }
    static getOne = async (req, res, next) => {
        try {
          const { id } = req.params;
            
          const profile = await InvestorService.getOne(id);
    
          return res.json(profile);
        } catch (error) {
          next(error);
        }
    };
    static delete = async( req, res, next) =>{
        try {
            const {id} = req.params;

            await InvestorService.delete(id);

            return res.json('Your investor account deleted')
        } catch (error) {
            next(error)
        }
    }
}

class StartupperController{
    static create = async(req, res, next) =>{
        try {
            const {firstName, lastName, phone, businessPlan, presentationFile, mvp } = req.body;
            const {user} = req;
            console.log(user)
            console.log(firstName)
            await StartupperService.create({firstName, lastName, phone, businessPlan, presentationFile, mvp, userId: user.id})
            return res.json({msg: "Your investor profile successfully created"})
        } catch (error) {
            next(error)
        }
    }
    static getAll = async(req,res,next) =>{
        try {
            const profiles =  await StartupperService.getAll();
            return res.json(profiles)
        } catch (error) {
            next(error)
        }
    }
    static update = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const {firstName, lastName, phone, businessPlan, presentationFile, mvp, userId} = req.body;
            await StartupperService.update({firstName, lastName, phone, businessPlan, presentationFile, mvp, userId, id})
            return res.json({msg: "Your investor profile successfully updated"})
        } catch (error) {
            next(error)
        }
    }
    static getOne = async (req, res, next) => {
        try {
          const { id } = req.params;
            
          const profile = await StartupperService.getOne(id);
    
          return res.json(profile);
        } catch (error) {
          next(error);
        }
    };
    static delete = async( req, res, next) =>{
        try {
            const {id} = req.params;

            await StartupperService.delete(id);

            return res.json('Your investor account deleted')
        } catch (error) {
            next(error)
        }
    }
    


}

module.exports = {
    InvestorController, StartupperController
}