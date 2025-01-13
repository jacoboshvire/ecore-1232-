import Image from "next/image";
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
