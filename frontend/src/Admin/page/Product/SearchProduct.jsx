import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../service/axiosInstance';

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/api/product/search?search=${searchTerm}`);
        setSearchResults(response.data.data.data); // Assuming the response contains an array of products
      } catch (error) {
        console.error('Error searching for products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() !== '') {
      searchProduct();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;