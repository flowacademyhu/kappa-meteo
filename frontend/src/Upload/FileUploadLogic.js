import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Success from './Success';
import Failed from './Failed';
import { IconContext } from 'react-icons';
import { ImUpload } from 'react-icons/im';

import {
  FooterText,
  CardBody,
  CardFooter,
  StyledH1,
  StyledInput,
  StyledLabel,
} from './FileUploadElements.js';

const validateFile = (file, names) => {
  let split = file.name.split('_');
  if (names.length > 0)
    return (
      ['napi.csv', 'orai.csv', '10perc.csv'].includes(split[2]) &&
      names.includes(split[0] + '_' + split[1])
    );
};

const FileUploadLogic = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/stations/names/');
        setNames(response.data);
        setFile('');
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
    let url = '/api/upload/';
    axios
      .post(url, data, {})
      .then((res) => {
        setLoading((loading) => !loading);
        setSuccess((success) => !success);
      })
      .catch((error) => {
        console.error(error.message);
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
    <div className="container">
      <div className="row">
        <CardBody className="card-body">
          <Loading />
        </CardBody>
      </div>
    </div>
  ) : success ? (
    <div className="container">
      <div className="row">
        <CardBody className="card-body">
          <Success success={success} setSuccess={setSuccess} />
        </CardBody>
      </div>
    </div>
  ) : failed ? (
    <div className="container">
      <div className="row">
        <CardBody className="card-body">
          <Failed failed={failed} setFailed={setFailed} />
        </CardBody>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <CardBody className="card-body">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <ImUpload size={100} />
          </IconContext.Provider>
          {file.size > 0 && !validateFile(file, names) && (
            <StyledH1>Nem megfelelő a fájl!</StyledH1>
          )}
          <div className="form-row mt-5">
            <StyledLabel
              htmlFor="file-upload"
              className="custom-file-upload m-2 p-3"
            >
              <i className="fa fa-cloud-upload"></i>Fájl választása
            </StyledLabel>
            <StyledInput id="file-upload" type="file" onChange={onChange} />
          </div>
          <div className="form-row">
            {file.size > 0 && validateFile(file, names) && (
              <div className="col p-4">
                <button
                  type="submit"
                  className="btn btn-success p-2"
                  onClick={() => submit()}
                >
                  Feltöltés
                </button>
              </div>
            )}
          </div>
          <CardFooter className="card-footer">
            <FooterText>
              Válasszon fájlt, majd a megjelenitéshez töltse fel az adatbázisba!
            </FooterText>
          </CardFooter>
        </CardBody>
      </div>
    </div>
  );
};

export default FileUploadLogic;
