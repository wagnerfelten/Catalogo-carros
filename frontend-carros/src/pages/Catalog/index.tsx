import Card from "../../components/Card/card";
import Navbar from "../../components/Navbar";
import carRed from "../../img/car-card.png";
import "./style.css";

function Catalogo() {
  return (
    <>
      <Navbar />

      <div>
        <div className="search">
          <input type="text" name="" id="" placeholder="Digite sua busca" />
          <a href="link">Buscar</a>
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>

            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>

            <div className="col-sm-6 col-lg-4">
              <Card />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalogo;
