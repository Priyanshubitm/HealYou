import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const registerUser = async(req,res) =>{

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    req.body.password = hashedPassword;
    const newUser = new UserModel(req.body);
    const {username} =req.body;

    try {
        const oldUser = await UserModel.findOne({username});
        if(oldUser){
            return res.status(400).json({message : "User is already registered!" });
        }
        const user = await newUser.save();
        const token = jwt.sign({
            username : user.username , id:user._id
        }, process.env.JWT_SECRET_KEY, {expiresIn: '1h'} )
        res.status(200).json({user ,token});
    } catch (error) {
        res.status(200).json({message : error.message });
    }
}

export const loginUser = async(req,res) =>{
    const {username ,password} = req.body;

    

   


    try {
        const user = await UserModel.findOne({username:username});
        if(user){
            const isValid = await bcrypt.compare(password,user.password);
            if(!isValid){
                res.status(400).json("Wrong Password");
            }else{
                const token = jwt.sign({
                    username : user.username , id:user._id
                }, process.env.JWT_SECRET_KEY, {expiresIn: '1h'} )
                res.status(200).json({user ,token});
            }
        }else{
            res.status(404).json("User doesnt exists");
        }
    } catch (error) {
        res.status(200).json({message : error.message });
    }
}