import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username :{
            type:String,
            required:true
        },
        password :{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        lastname :{
            type:String,
            required:true
        },
        isadmin :{
            type:Boolean,
            default:false
        },
        profilepicture :String,
        coverpicture: String,
        about:String,
        age:String,
        gender:String,
        livesin:String,
        talksabout:String,
        hereto:String,
        country:String,
        numberOfPosts:Number,
        followers:[],
        following:[],

    },
    {timestamps : true}
)

const UserModel= mongoose.model("Users",userSchema);

export default UserModel;