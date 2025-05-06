import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import ClothesTable from '../components/home/ClothesTable';
import ClothesCard from '../components/home/ClothesCard';

const Home = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/clothes')
      .then((response) => {
        setClothes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Inject custom CSS into the document head
    const style = document.createElement('style');
    style.innerHTML = `
      .home-bg {
        background: linear-gradient(to right, #6a11cb, #2575fc);
        min-height: 100vh;
        padding: 2rem;
      }
      .home-container {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 2rem;
      }
      .btn {
        background-color: #6a11cb;
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        margin: 0.5rem 0.25rem;
        border-radius: 8px;
        transition: background-color 0.3s ease;
      }
      .btn:hover {
        background-color: #5b0eb7;
      }
      .icon-btn {
        color: #6a11cb;
        font-size: 2rem;
        margin: 0 0.5rem;
        transition: color 0.3s ease;
      }
      .icon-btn:hover {
        color: #5b0eb7;
      }
      .filter-dropdown {
        margin: 0 0.5rem;
        padding: 0.5rem;
        border-radius: 8px;
        border: 1px solid #6a11cb;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredClothes = filterType ? clothes.filter(item => item.type === filterType) : clothes;

  return (
    <div className="home-bg">
      <div className="home-container">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <button className="btn" onClick={() => setShowType('table')}>Table</button>
          <button className="btn" onClick={() => setShowType('card')}>Card</button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-primary mb-4">Clothes List</h1>
          <div className="d-flex align-items-center">
            <select className="filter-dropdown" onChange={handleFilterChange} value={filterType}>
              <option value="">All Types</option>
              <option value="Top">Top</option>
              <option value="Bottom">Bottom</option>
              <option value="Full body">Full Body</option>
              <option value="Lingerie">Lingerie</option>
              <option value="Shoes">Shoes</option>
            </select>
            <Link to="/clothes/create">
              <MdOutlineAddBox className="icon-btn" />
            </Link>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <ClothesTable clothes={filteredClothes} />
        ) : (
          <ClothesCard clothes={filteredClothes} />
        )}
      </div>
    </div>
  );
};

export default Home;
