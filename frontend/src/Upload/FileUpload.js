import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import styled from 'styled-components';
import Success from './Success';
import Failed from './Failed';

const StyledH1 = styled.h1`
  color: red;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
`;

const validateFile = (file, names) => {
  let split = file.name.split('_');
  if (names.length > 0)
    return (
      ['napi.csv', 'orai.csv', '10perc.csv'].includes(split[2]) &&
      names.includes(split[0] + '_' + split[1])
    );
};

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/names/');
        setNames(response.data);
        setFile('');
        console.log(response);
      } catch (err) {
        console.error('Error during api call:', err);
      }
    }
    fetchData();
  }, [failed, success]);

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
        setLoading((loading) => !loading);
        setSuccess((success) => !success);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading((loading) => !loading);
        setFailed((failed) => !failed);
      });
  };

  const onChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return loading ? (
    <Loading />
  ) : success ? (
    <Success success={success} setSuccess={setSuccess} />
  ) : failed ? (
    <Failed failed={failed} setFailed={setFailed} />
  ) : (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          {file.size > 0 && !validateFile(file, names) && (
            <StyledH1>Nem megfelelő a fájl!!!</StyledH1>
          )}
          <div className="form-row mt-5">
            <StyledLabel htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i>Válaszd ki a fájlt
            </StyledLabel>
            <StyledInput id="file-upload" type="file" onChange={onChange} />
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
