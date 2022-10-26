import Main from './App.js';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AuthContext from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContext><Main /></AuthContext>);