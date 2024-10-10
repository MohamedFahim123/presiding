import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);
