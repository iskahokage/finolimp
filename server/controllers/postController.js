const PostService = require('../services/postService');
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

class PostController{

    static getAll = async(req,res,next)=>{
        try {
            const projects = await PostService.getAll()
            return res.json(projects)
        } catch (error) {
            next(error)
        }
    }

    static create = async(req,res,next)=>{
        try {
            const {title, description} = req.body;
            const project = await PostService.create({title, description})
            return res.json(project)

        } catch (error) {
            next(error)
        }
    }
    static imageUpload = async(req,res,next)=>{
        try {
            const {name} = req.files
            const {postId} = req.body
            let imgName = uuid.v4() + ".jpg"
            name.mv(path.resolve(__dirname, '..', 'public/assets/img/posts', imgName))
            let img = await PostService.imageUpload({name: imgName, postId})
            return res.json(img)
        } catch (error) {
            next(error)
        }
    }
    static delete = async(req,res, next)=>{
        try {
            const {id} = req.params;
            let files = await PostService.delete(id)
            for(let i = 0; i < files[0].length; i++){
                let a = path.resolve(__dirname, '..', 'public/assets/img/posts')
                let b = files[0][i].name
                fs.unlink(`${a}/${b}`, (err) => {
                    if (err) throw err;
                    console.log(`${a}/${b} was deleted`);
                    })
            }
            res.json({msg: `post with id: ${id}, successfully deleted `})
        } catch (error) {
            
        }
    }
}



module.exports = PostController;