import Image from "next/image";
import Wave from './image/Wave.png';
import Profile from './image/Group_4.png';
import "./page.css";
import Nav from './nav.js'
import Footer from './Footer.js'

export default function Home() {
  return (
    <div className="header">
      <Nav />

      <Footer />
    </div>
  );
}
