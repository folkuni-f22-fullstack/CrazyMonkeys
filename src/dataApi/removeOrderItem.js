const removeOrderItem = async (orderId, menuItemId) => {

const url = `/api/orders/${orderId}?option=menuItem `;
    const data = {
        menuItemId: menuItemId
    }


    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)
    const statusObject = await response.json()
    if(statusObject){
        window.location.reload()
        return true
    }
    return 

  }
  
  export { removeOrderItem }
  