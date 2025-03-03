import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const register=async(req,res)=>{
    try {
        const { name, email, password } = req.body;
      if (!name || !email || !password ) {
        return res.status(400).json({
            success:false,
            message:"All field are required."
        });
      }
      const user=await User.findOne({email});
      if (user) {
        return res.status(400).json({
            success:false,
            message:"User already exist with this email."
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        password:hashedPassword
      });
      return res.status(201).json({
        success:true,
        message:"Account created successfully."
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to register."
        })
        
    }
}
export const login = async (req,res) => {
  try {
      const {email, password} = req.body;
      if(!email || !password){
          return res.status(400).json({
              success:false,
              message:"All fields are required."
          })
      }
      const user = await User.findOne({email});
      if(!user){
          return res.status(400).json({
              success:false,
              message:"Incorrect email or password"
          })
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if(!isPasswordMatch){
          return res.status(400).json({
              success:false,
              message:"Incorrect email or password"
          });
      }
      generateToken(res, user, `Welcome back ${user.name}`);

  } catch (error) {
      console.log(error);
      return res.status(500).json({
          success:false,
          message:"Failed to login"
      })
  }
}
export const logout=async (req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).
        json({
            message:"Logged out successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to logout"
        })
    }
}
export const getUserProfile=async(req,res)=>{
   try{
    const UserId=req.id;
    const user=await User.findById(UserId).select("-password")
    if(!user){
        return res.status(404).json({
            message:"Profile not found",
            success:false,
            
        })
    }
    return res.status(202).json({
        message:"Profile found",
        success:true,
        user});
} catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Failed to load user"
    })
}

}

export const Userdispaly=async(req,res)=>{
    try {
        const user = await User.find();
        return res.status(202).json({
            message:"User Display",
            success:true,
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to load user"
        })
    }


}