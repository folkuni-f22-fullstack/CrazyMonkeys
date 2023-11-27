const updateOrder = async (updatedOrderData, orderId, msgTooCook) => {

const url = `/api/orders/${orderId}`;
    const data = {
        status: updatedOrderData,
        commentsEmployee: msgTooCook
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
        return true
    }
    return 

  }
  
  export { updateOrder }
  