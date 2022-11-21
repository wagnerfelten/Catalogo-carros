import Navbar from "../../components/Navbar";
import Car from "../../img/car-header.png";
import "./style.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-container">
          <div>
            <h2> O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="main-img">
            <img src={Car} alt="" />
          </div>
        </div>

        <div className="main-footer">
          <a href="">Ver Catálogo</a>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
