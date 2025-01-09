import Image from "next/image";
import "./page.css";
import Nav from './nav.js'
import Footer from './Footer.js'
import Stuff from './Stuff.js'

export default function Home() {
  return (
    <div className="header">
      <Nav />
      <Stuff />
      <Footer />
    </div>
  );
}
