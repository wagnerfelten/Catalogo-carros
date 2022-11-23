import Card from "../../components/Card/card";
import Navbar from "../../components/Navbar";
import './style.css';


function Catalogo() {
    return (
      <>
        <Navbar />

        <div>
            <div className="search">
                <input type="text" name="" id="" placeholder="Digite sua busca" />
                <a href="link">Buscar</a>
            </div>

            <Card />
        </div>
      </>
    );
  }
  
  export default Catalogo;