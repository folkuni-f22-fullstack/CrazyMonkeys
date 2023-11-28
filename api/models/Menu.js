 import mongoose from "mongoose"

 const MenuSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
        max: 100
    },
    img:{
        type: String,
    },
    moreInfo: {
        type: String,
        max: 100,
        required: false
    }
 })

 export default mongoose.model('Menu', MenuSchema)