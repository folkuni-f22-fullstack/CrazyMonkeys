const removeOrder = async (orderId) => {

const url = `/api/orders/${orderId}?option=order `;



    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(url, options)
    const statusObject = await response.json()
    if(statusObject){
        return true
    }
    return 

  }
  
  export { removeOrder }
  