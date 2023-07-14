import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/app/header/header";
import Home from '@/app/home/home';
import Fotos from '@/app/fotos/fotos';
import Footer from '@/app/footer/footer';
import Info from '@/app/information/information';


export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Fotos />
      <Info />
      <Footer />
    </>
  )
}
