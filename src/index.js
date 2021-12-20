import './style.css';
import logo from './images/logo.jpg';

const logoDiv = document.querySelector('#logo');
const logoImage = new Image();
logoImage.src = logo;
logoDiv.appendChild(logoImage);