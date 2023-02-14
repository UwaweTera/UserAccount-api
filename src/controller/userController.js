import {User} from '../../database/models';
import jwt from 'jsonwebtoken';

class UserController{
    static async googleAuth(req,res){
        try {            
            const {id, displayName, email}= req.user;
            const findUser = await User.findOne({
                where : {email}
            });

            if (!findUser) {
                const token = jwt.sign({id,email}, process.env.TOKEN_SECRET);
                res.status(200).redirect(`/api/v1/users/protected?name=${displayName}&&token=${token}`)
            }else{
                res.status(401).json({message: 'Signup First'})
            }
        } catch (error) {
            res.status(500).json({message: 'Server error'})
        }
    }

    static async protected(req, res){
        const {name, token}= req.query;
        res.status(200).json({
            name,
            token
        })
    }
    static async logout(req,res,next){
        req.logout((err)=>{
            err ? next(err) :  res.json({message: 'logout bye'})
        });
    }
}

export default UserController