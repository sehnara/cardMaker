import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageInputFile from './components/image_input_file/imageInputFile';

const authService = new AuthService();

// component prop* / Dependency Injection
const imageUploader = new ImageUploader();
const FileInput = props =>(
  <ImageInputFile {...props} ImageUploader={imageUploader}/>
);

ReactDOM.render(
  <React.StrictMode> 
    <App 
     authService={authService}
     FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

