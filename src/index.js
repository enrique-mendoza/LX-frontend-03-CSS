import './css/styles.css';
// Images
import nurse from './assets/images/nurse.jpg';
// Icons
import star from './assets/icons/star.svg';
import shield from './assets/icons/shield.svg';

// Statements
const imgNurse = document.querySelector('.img-nurse');

const iconStar = document.querySelector('.icon-star');
const iconShield = document.querySelector('.icon-shield');

// Assigments
imgNurse.src = `${nurse}`;

iconStar.src = `${star}`;
iconShield.src = `${shield}`;
