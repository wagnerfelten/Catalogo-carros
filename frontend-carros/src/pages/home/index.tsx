import Navbar from "../../components/Navbar";
import Car from "../../img/car-header.png";

const Home = () => {
  return (
    <>
      
      <div>
        <Navbar />
        
        <div>
          <h2> O carro perfeito para você</h2>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div>
          <Car />
        </div>
      </div>
    </>
  );
};

export default Home;
