const removeOrder = async (orderId) => {

const url = `/api/orders/${orderId}?option=order `;



    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(url, options)
   
    if (response.ok) {
       
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          try {
            const statusObject = await response.json();
            
            return true;
          } catch (error) {
            
            console.error('Error parsing JSON response:', error);
            return false;
          }
        } else {
         
          return true;
        }
      } else {
        
        console.error('Non-successful response. Status:', response.status);
        return false;
      }

  }
  
  export { removeOrder }
  