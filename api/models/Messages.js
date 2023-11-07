import mongoose from "mongoose"

const MenuSchema = new mongoose.Schema({
   messageId: {
       type: String,
       required: true
   },
   from: {
       type: String,
       required: true
   },
   desc: {
       type: String,
       required: true,
       max: 100
   },

})

export default mongoose.model('Messages', MenuSchema)