import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import NavBare from './Components/NavBare';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';


function App() {
  const data = [
    {
      id: Math.random(),
      name: "Tondeuse métal - barbe et cheveux - Sans fil pour - Pro",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/1125/1.jpg?5908",
    },
    {
      id: Math.random(),
      name: "Cookart Plat à Four 25.5x17.5cm - Noir & Plat à four rond 24cm - Rouge",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/3685/1.jpg?2766",
    },
    {
      id: Math.random(),
      name: "XIAOMI Redmi 10 2022 - 6.5 - 6 Go - 128 Go - Bleu - Garantie 1 an",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/4107/1.jpg?5185",
    },
    {
        id: Math.random(),
        name: "Tondeuse métal - barbe et cheveux - Sans fil pour - Pro",
        pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/1125/1.jpg?5908",price:50
      },
      {
        id: Math.random(),
        name: "Cookart Plat à Four 25.5x17.5cm - Noir & Plat à four rond 24cm - Rouge",
        pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/3685/1.jpg?2766",price:100
      },
      {
        id: Math.random(),
        name: "XIAOMI Redmi 10 2022 - 6.5 - 6 Go - 128 Go - Bleu - Garantie 1 an",
        pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/4107/1.jpg?5185",price:80100
      },
  ];

  const handleAlert=(x)=>alert(`there price of the ${x.name} is ${x.price}`)
  return (
    <div className="App">
      <NavBare/>
      <ProductList list={data} handle={handleAlert}/>
      <Footer >
        hello from from children props
      </Footer>
    </div>


  );
}

export default App;
