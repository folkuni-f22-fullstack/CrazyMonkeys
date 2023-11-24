const updateCustomerInfo = async (orderId, customerName, customerAddress, customerFloor, customerPortCode, customerEmail, customerPhone) => {

    const url = `/api/orders/${orderId}`;


        const data = {
            customerName: customerName,
            adress: customerAddress,
            floor: customerFloor,
            portCode: customerPortCode,
            mail: customerEmail,
            mobile: customerPhone
        }
    

        console.log("detta skickas", data, "orderId:",orderId);
    
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
            // window.location.reload()
            return true
        }
        return 
    
      }
      
      export { updateCustomerInfo }
      