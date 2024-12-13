export const fetchMenuItems = async () => {
  try {
    const response = await fetch('/api/v1/foods/getAll', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error fetching menu items');
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error; 
  }
};

export const createNewOrder = async (orderData) => {
  try {
    const response = await fetch('/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error creating order');
    }

    return response.json();
  } catch (error) {
    console.error("Error creating order:", error);
    throw error; 
  }
};

export const fetchAllOrders = async () => {
  try {
    const response = await fetch('/api/v1/orders', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error fetching orders');
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error; 
  }
};

export const fetchOrderById = async (orderId) => {
  try {
    const response = await fetch(`/api/v1/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error fetching order by ID');
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw error; 
  }
};
