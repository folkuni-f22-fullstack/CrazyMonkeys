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
    // Hämta detaljer om valda maträtter från "Menu"-samlingen
    const orderItemsWithDetails = await Promise.all(orderData.items.map(async (item) => {
      const menuItemId = item.menuItem;
      const menuDetails = await Menu.findById(menuItemId);
      console.log("menuItemId:" + menuItemId);
      if (menuDetails) {
        return {
          menuItem: menuDetails,
          quantity: item.quantity
        };
      }
      return null; // Returnera null om ingen matchande maträtt hittades
    }));

    // Skapa beställningen med detaljer om maträtterna
    const newOrder = new Orders({
      customerName: orderData.customerName,
      items: orderItemsWithDetails, // Använd orderItemsWithDetails här
      comments: orderData.comments
    });

    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

export default router