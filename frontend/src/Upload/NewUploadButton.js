import React from 'react';
import { Link } from 'react-router-dom';

const NewUploadButton = ({ result, setResult }) => {
  const backToNewUpload = () => {
    setResult(!result);
  };

  return (
    <>
      <Link to={'/upload'}>
        <button
          onClick={() => backToNewUpload()}
          className="btn btn-success m-4"
        >
          Új fájl feltöltése
        </button>
      </Link>
    </>
  );
};

export default NewUploadButton;
