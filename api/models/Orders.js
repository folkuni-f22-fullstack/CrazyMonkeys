import mongoose from "mongoose"
const {Schema} = mongoose

const OrderItemSchema = new mongoose.Schema({
    menuItem: {
      type: Schema.Types.ObjectId,
        ref: 'Menu', // Referens till ditt MenuSchema
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  });

  const OrdersSchema = new mongoose.Schema({
    status:{
        type: String,
        required: true
    },
    comments: {
        type: String
      },
    commentsEmployee: {
        type: String
      },
    orderId:{
        type: Number,
        required: true
    },
    customerName: {
      type: String, 
      required: true
    },
    adress: {
      type: String, 
      required: false
    },
    floor: {
      type: String,  
      required: false
    },
    portCode: {
      type: String, 
      required: false
    },
    mail: {
      type: String, 
      required: false
    },
    mobile: {
      type: String, 
      required: true
    },
    items: [OrderItemSchema], // En array av OrderItemSchema för att lagra maträtter och drycker
    
  });


export default mongoose.model('Orders', OrdersSchema)