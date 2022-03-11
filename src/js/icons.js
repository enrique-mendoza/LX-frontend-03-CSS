// Icons
// Credits: https://iconduck.com/sets/google-material-design-icons
import star from '../assets/icons/star.svg';
import shield from '../assets/icons/shield.svg';
import clock from '../assets/icons/clock.svg';
import location from '../assets/icons/location.svg';
import date from '../assets/icons/date.svg';
import typeV from '../assets/icons/type.svg';
import switchIcon from '../assets/icons/switch.svg';
import groups from '../assets/icons/groups.svg';
import chat from '../assets/icons/chat.svg';
import policy from '../assets/icons/policy.svg';
import dropDown from '../assets/icons/drop-down.svg';
import disabled from '../assets/icons/disabled.svg';
import bar from '../assets/icons/bar-chart.svg';
import check from '../assets/icons/check-box.svg';
import heart from '../assets/icons/favorite.svg';
import phone from '../assets/icons/call.svg';
import wha from '../assets/icons/wha.svg';
import video from '../assets/icons/videocam.svg';
import mail from '../assets/icons/mail.svg';

const iconStar = document.querySelector('.icon-star');
const iconShield = document.querySelectorAll('.icon-shield');
const iconClock = document.querySelector('.icon-clock');
const iconLocation = document.querySelector('.icon-location');
const iconDate = document.querySelector('.icon-date');
const iconType = document.querySelector('.icon-type');
const iconSwitch = document.querySelector('.icon-switch');
const iconGroups = document.querySelector('.icon-groups');
const iconChat = document.querySelector('.icon-chat');
const iconPolicy = document.querySelector('.icon-policy');
const iconDown = document.querySelectorAll('.icon-drop-down');
const iconDisabled = document.querySelector('.icon-disabled');
const iconBar = document.querySelector('.icon-bar');
const iconCheck = document.querySelector('.icon-check');
const iconHeart = document.querySelector('.icon-heart');
const iconPhone = document.querySelector('.icon-phone');
const iconWha = document.querySelector('.icon-wha');
const iconVideo = document.querySelector('.icon-video');
const iconMail = document.querySelector('.icon-mail');

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
iconPolicy.src = `${policy}`;

for (let i = 0; i < iconDown.length; i++) {
  iconDown[i].src = `${dropDown}`;
}

iconDisabled.src = `${disabled}`;
iconBar.src = `${bar}`;
iconCheck.src = `${check}`;
iconHeart.src = `${heart}`;
iconPhone.src = `${phone}`;
iconWha.src = `${wha}`;
iconVideo.src = `${video}`;
iconMail.src = `${mail}`;
