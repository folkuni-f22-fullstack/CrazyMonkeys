import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  
   username: {
       type: String,
       required: true,
       min:4
   },
   password: {
       type: String,
       required: true,
       min:6
   },
   
})

export default mongoose.model('Users', UserSchema)