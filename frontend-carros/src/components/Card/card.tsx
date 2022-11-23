import  Car from '../../img/car-card.png';


const Card = () => {
  return (
    <>
      <div>
        <div>
          <h1>Audio supra TT</h1>
          <p>
            motor montado transversalmente, e uma transmissão de 5 velocidades
            manual para motores de 180 cv (132 kW), 6 velocidades manual para
            motores de 225 cv (165 kW)
          </p>
        </div>

        <div>
            <img src={Car} alt="Audio TT" />
        </div>

        <div>
            <a href="link">Comprar</a>
        </div>
      </div>
    </>
  );
}

export default Card;
