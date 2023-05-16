import React from 'react';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="text-lg text-blue-200 uppercase underline hover:text-yellow-300" onClick={handleGoBack}>
      Back
    </button>
  );
};

export default Back;
