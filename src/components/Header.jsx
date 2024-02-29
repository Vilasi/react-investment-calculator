//? import photo asset
import HEADER_PHOTO from '../assets/investment-calculator-logo.png';

//? import CSS
import './Header.css';

export default function Header() {
  return (
    <header id="header">
      <h1>React Investment Calculator</h1>
      <img src={HEADER_PHOTO} alt="Mr. Moneybags, the photo" />
    </header>
  );
}
