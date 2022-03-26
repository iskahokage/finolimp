const {Post, Post_image} = require('../models/models.js')

class PostService{

    static getAll = async()=>{
        return await Post.findAll({include: ["post_images"]});
    }

    static create = async({title, description})=>{
        return await Post.create({
            title, description
        })
    }
    static delete = async (id)=>{
        const image = await Post_image.findAll({where: {postId: id}})
        const item = await Post.destroy({where: {id}})

        return [image, item]
    }

    static imageUpload = async({name, postId})=>{
        return await Post_image.create({
            name, postId
        })
    }
}



module.exports = PostService;
