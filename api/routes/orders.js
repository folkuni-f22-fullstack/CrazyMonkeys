import express from "express"
import Orders from "../models/Orders.js"
import Menu from "../models/Menu.js"

const router = express()

// GET orders
router.get("/", async (req, res) => {
    try{
        const allOrders = await Orders.find()
        res.status(200).send(allOrders)
    }catch(err){
        console.error(err);
        res.status(500).send(err)
    }
})



// Ta bort hela ordern eller bara specifika varor
router.delete("/:id", async (req, res) => {
    const orderId = req.params.id;
    const deleteOption = req.query.option; // Antag att du skickar 'option=order' eller 'option=menuItem' i förfrågan
  
    try {
      if (deleteOption === "order") {
        // Radera hela ordern
        const deletedOrder = await Orders.findOneAndDelete({ _id: orderId });
  
        if (!deletedOrder) {
          return res.status(404).json({ message: "Order not found" });
        }
  
        console.log("Removed the order");

        /////////////////////////////////////////////////////////////////////
      } else if (deleteOption === "menuItem") {
        // Ta bort en maträtt från ordern

        const existingOrder = await Orders.findOne({_id: orderId})
        if(!existingOrder){
           return res.status(404).json({ message: "Order not found"})
        }

        const menuItemIdToDelete = req.body.menuItemId;

        const foundMenuItem = existingOrder.items.find(item => item.menuItem.toString() === menuItemIdToDelete)

        if(!foundMenuItem){
            return res.status(404).json({ message: "Item not found" });

        }
  
        const updatedOrder = await Orders.findOneAndUpdate(
          { _id: orderId },
          { $pull: { items: { menuItem: menuItemIdToDelete } } },
          { new: true }
        );
  
        if (!updatedOrder) {
          return res.status(404).json({ message: "Order not found" });
        }
  
        console.log("Removed menuItem from order");
      } else {
        return res.status(400).json({ message: "Invalid delete option" });
      }
  
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });
//   För att radera hela ordern: /api/orders/:id?option=order
//   För att ta bort en maträtt: /api/orders/:id?option=menuItem
  

// POST order
router.post("/", async (req, res) => {
    const orderData = req.body;

    try {
        const orderItemsWithDetails = await Promise.all(orderData.items.map(async (item) => {
            const menuItemId = item.menuItem;
            const menuDetails = await Menu.findById(menuItemId);
            if (menuDetails) {
                return {
                    menuItem: menuDetails,
                    quantity: item.quantity
                };
            }
            // Om ingen matchande maträtt hittades, skapa en kommentar om detta
            return {
                menuItem: { name: "Unknown", price: 0 }, // Anpassa detta efter din modell av Menu
                quantity: item.quantity,
                note: "This item was not found in the menu"
            };
        }));

        const newOrder = new Orders({
            orderId: orderData.orderId,
            customerName: orderData.customerName,
            adress: orderData.adress,
            floor: orderData.floor,
            portCode: orderData.portCode,
            mail: orderData.mail,
            mobile: orderData.mobile,
            items: orderItemsWithDetails,
            comments: orderData.comments,
            status: orderData.status
        });

        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


router.post("/:id/addMenuItem", async (req, res) => {
    const orderId = req.params.id
    const newMenuItem = req.body.newMenuItem[0];
  
    try {
         const existingOrder = await Orders.findOne({_id: orderId})
         if(!existingOrder){
            return res.status(404).json({ message: "Order not found"})
         }
      
         
         const existingMenuItem = existingOrder.items.find(item => item.menuItem.toString() === newMenuItem.menuItem)

         if(existingMenuItem){
            existingMenuItem.quantity += parseInt(newMenuItem.quantity, 10);
         }else{
            existingOrder.items.push(newMenuItem)
         }

         const updatedOrder = await existingOrder.save()
        
        console.log("req.body:", req.body);
        console.log("Added new menuItem to order with quantity:", newMenuItem.quantity);
        
      console.log("Added new menuItem to order");
      res.status(200).json(updatedOrder);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });
  




router.put("/:id", async (req, res) => {
    const orderId = req.params.id;
    const updatedOrderData = req.body;

    try {
        const existingOrder = await Orders.findOne({ _id: orderId });

        if (!existingOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Uppdatera befintlig order med nya uppgifter
        Object.assign(existingOrder, updatedOrderData);

        // Om det finns en uppdatering för items, gör en djup kopiering av dem
        if (updatedOrderData.items) {
            existingOrder.items = updatedOrderData.items.map(item => ({ ...item }));
        }

        // Spara den uppdaterade ordern
        const updatedOrder = await existingOrder.save();
        res.status(200).json(updatedOrder);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});



export default router