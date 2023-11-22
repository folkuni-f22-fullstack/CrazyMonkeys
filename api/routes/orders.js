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

router.delete("/:id", async (req, res) => {
    let orderToDelete = req.params.id

    try {
        const findOrder = await Orders.findOneAndDelete({orderId: orderToDelete})
        console.log("Tog bort ordern");
        res.sendStatus(200)
    } catch(err){
        res.status(500).send(err)
    }
})

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