import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/app/header/header";
import Home from '@/app/home/home';
import Fotos from '@/app/fotos/fotos';
import Footer from '@/app/footer/footer';
import Info from '@/app/information/information';
import Headermob from '@/app/headermob/headermob';


export default function Main() {
  return (
    <>
      <Header />
      {/* <Headermob/> */}
      <Home />
      <Fotos />
      <Info />
      <Footer />
    </>
  )
}
