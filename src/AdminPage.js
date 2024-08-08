import React, { useEffect, useState } from 'react';
import './AdminPage.css'; // Import CSS for styling

function AdminPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="admin-page">
      <h1>Available Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.ProductID}>
              <td>{product.ProductID}</td>
              <td>{product.Name}</td>
              <td>{product.Description}</td>
              <td>{product.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
