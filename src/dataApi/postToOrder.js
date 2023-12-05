const postItemOrder = async (orderId, menuItem, quantity, whenDone) => {

const url = `/api/orders/${orderId}/addMenuItem`;

const data = {

    newMenuItem: [
        {
            menuItem: menuItem,
			quantity: quantity
        }
    ]
}


    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const statusObject = await response.json()
    console.log("PostToOrder",statusObject);
    if(statusObject){
        whenDone()
        return true
    }
    return undefined

  }
  
  export { postItemOrder }
  