import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-9jnf.onrender.com/api/portfolio');
        // console.log(response.data);
        setPortfolioData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch portfolio data');
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return { portfolioData, isLoading, error };
};