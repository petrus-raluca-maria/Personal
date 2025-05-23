import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowArticle = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/clothes/${id}`)
      .then((response) => {
        setArticle(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Article</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{article._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{article.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Brand</span>
            <span>{article.brand}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Size</span>
            <span>{article.size}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price</span>
            <span>{article.price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Type</span>
            <span>{article.type}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(article.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(article.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowArticle;
