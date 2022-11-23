import  Car from '../../img/car-card.png';
import "./style.css"

const Card = () => {
  return (
    <>
      <div className='card-container'>
      <div className='car'>
            <img src={Car} alt="Audio TT" />
        </div>

        <div className='card-tittle'>
          <h1>Audio supra TT</h1>
          <p>
            Motor montado transversalmente, e uma transmissão de 5 velocidades
            manual para motores de 180 cv (132 kW), 6 velocidades manual para
            motores de 225 cv (165 kW)
          </p>
        </div>

        

        <div className='card-purchase'>
            <a href="link">Comprar</a>
        </div>
      </div>
    </>
  );
}

export default Card;
