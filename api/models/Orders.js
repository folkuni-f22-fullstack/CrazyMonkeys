import mongoose from "mongoose"

const OrderItemSchema = new mongoose.Schema({
    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu', // Referens till ditt MenuSchema
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  });

  const OrdersSchema = new mongoose.Schema({
    customerName: {
      type: String, 
      required: true
    },
    items: [OrderItemSchema], // En array av OrderItemSchema för att lagra maträtter och drycker
    comments: {
      type: String
    }
  });


export default mongoose.model('Orders', OrdersSchema)