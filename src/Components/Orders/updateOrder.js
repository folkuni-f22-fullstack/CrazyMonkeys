const updateOrder = async (updatedOrderData, orderId) => {

const url = `/api/orders/${orderId}`;
    const data = {
        status: updatedOrderData
    }


    const options = {
      method: 'PUT',
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
  
  export { updateOrder }
  