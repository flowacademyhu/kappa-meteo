import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileUpload.css';
import Loading from './Loading';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: red;
`;

const validateFile = (file, names) => {
  let split = file.name.split('_');
  return (
    ['napi.csv', 'orai.csv', '10perc.csv'].includes(split[2]) &&
    names.length > 0 &&
    names.includes(split[0] + '_' + split[1])
  );
};

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [resp, setResp] = useState('');
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/names/');
        setNames(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error during api call:', err);
      }
    }
    fetchData();
  }, []);

  const submit = () => {
    setLoading((loading) => !loading);
    const data = new FormData();
    data.append('file', file);
    console.warn(file);
    let url = '/api/upload/';
    axios
      .post(url, data, {})
      .then((res) => {
        console.warn(res);
        setResp(res.data);
        setLoading((loading) => !loading);
        let timeOut = setTimeout(() => {
          setResp('');
          setFile('');
          clearTimeout(timeOut);
        }, 5000);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading((loading) => !loading);
      });
  };

  const onImageChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return loading ? (
    <Loading />
  ) : resp.length > 0 ? (
    resp
  ) : (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          {file.size > 0 && !validateFile(file, names) && (
            <StyledH1>Nem megfelelő a fájl!!!</StyledH1>
          )}
          <div className="form-row mt-5">
            <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i>Válaszd ki a fájlt
            </label>
            <input id="file-upload" type="file" onChange={onImageChange} />
          </div>
          <div className="form-row">
            {file.size > 0 && validateFile(file, names) && (
              <div className="col-md-6">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={() => submit()}
                >
                  Feltöltés
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
