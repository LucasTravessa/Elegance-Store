import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/app/header/header";
import Home from '@/app/home/home';
import Fotos from '@/app/fotos/fotos';
import Footer from '@/app/footer/footer';
import Info from '@/app/information/information';
import ScrollToTop from '@/app/modules/scroolToTop';
import { useRef } from 'react';


export default function Main() {
  const home = useRef(null);
  const fotos = useRef(null);
  const info = useRef(null);


  return (
    <>
      <ScrollToTop />
      <Header home = {home} fotos = {fotos} info = {info} />
        <div ref={home}>
          <Home /> 
        </div>
        <div ref={fotos}>
          <Fotos />
        </div>
        <div ref={info}>
          <Info />
        </div>
      <Footer />
    </>
  )
}
