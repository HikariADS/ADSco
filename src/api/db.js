const API_URL = 'http://localhost:5000';

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    console.log('Fetching product with ID:', id);
    const response = await fetch(`${API_URL}/api/products/${id}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Network response was not ok');
    }
    
    console.log('Product details:', data);
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
} 