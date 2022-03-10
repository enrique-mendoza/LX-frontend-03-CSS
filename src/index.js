import './css/styles.css';
// Images
import nurse from './assets/images/nurse.jpg';
import astra from './assets/images/astrazeneca.png';
import sino from './assets/images/sinovac.png';
import pfi from './assets/images/pfizer.png';
import mord from './assets/images/moderna.png';

// Icons
// Credits: https://iconduck.com/sets/google-material-design-icons
import star from './assets/icons/star.svg';
import shield from './assets/icons/shield.svg';
import clock from './assets/icons/clock.svg';
import location from './assets/icons/location.svg';
import date from './assets/icons/date.svg';
import typeV from './assets/icons/type.svg';
import switchIcon from './assets/icons/switch.svg';
import groups from './assets/icons/groups.svg';
import chat from './assets/icons/chat.svg';

// Statements
const imgNurse = document.querySelector('.img-nurse');
const imgAstra = document.querySelector('.img-astra');
const imgSino = document.querySelector('.img-sinovac');
const imgPfi = document.querySelector('.img-pfizer');
const imgMord = document.querySelector('.img-moderna');

const iconStar = document.querySelector('.icon-star');
const iconShield = document.querySelectorAll('.icon-shield');
const iconClock = document.querySelector('.icon-clock');
const iconLocation = document.querySelector('.icon-location');
const iconDate = document.querySelector('.icon-date');
const iconType = document.querySelector('.icon-type');
const iconSwitch = document.querySelector('.icon-switch');
const iconGroups = document.querySelector('.icon-groups');
const iconChat = document.querySelector('.icon-chat');

// Assigments
imgNurse.src = `${nurse}`;
imgAstra.src = `${astra}`;
imgSino.src = `${sino}`;
imgPfi.src = `${pfi}`;
imgMord.src = `${mord}`;

iconStar.src = `${star}`;

for (let i = 0; i < iconShield.length; i++) {
  iconShield[i].src = `${shield}`;
}

iconClock.src = `${clock}`;
iconLocation.src = `${location}`;
iconDate.src = `${date}`;
iconType.src = `${typeV}`;
iconSwitch.src = `${switchIcon}`;
iconGroups.src = `${groups}`;
iconChat.src = `${chat}`;
