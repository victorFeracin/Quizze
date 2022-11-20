import './style.css';
import themeImg from '../../assets/themeImg.jpg';
import { Link } from 'react-router-dom';

function HomeComponent () {
  return (
    <div className="homeContainer">
      <h1 className='homeTitle'>Escolha um dos temas e comece a jogar!</h1>

      <div className='gameCardsContainer'>
        <Link to={`/session/${'id'}`} className='gameCard'>
          <img src={themeImg} alt="Imagem do tema" />
          <div className='gameCardInfo'>
            <h2 className='gameCardTitle'>Lorem Ipsum</h2>
            <p className='gameCardDescription'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
        </Link>

        <Link to={`/session/${'id'}`} className='gameCard'>
          <img src={themeImg} alt="Imagem do tema" />
          <div className='gameCardInfo'>
            <h2 className='gameCardTitle'>Lorem Ipsum</h2>
            <p className='gameCardDescription'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
        </Link>

        <Link to={`/session/${'id'}`} className='gameCard'>
          <img src={themeImg} alt="Imagem do tema" />
          <div className='gameCardInfo'>
            <h2 className='gameCardTitle'>Lorem Ipsum</h2>
            <p className='gameCardDescription'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
        </Link>

        <Link to={`/session/${'id'}`} className='gameCard'>
          <img src={themeImg} alt="Imagem do tema" />
          <div className='gameCardInfo'>
            <h2 className='gameCardTitle'>Lorem Ipsum</h2>
            <p className='gameCardDescription'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
        </Link>

        <Link to={`/session/${'id'}`} className='gameCard'>
          <img src={themeImg} alt="Imagem do tema" />
          <div className='gameCardInfo'>
            <h2 className='gameCardTitle'>Lorem Ipsum</h2>
            <p className='gameCardDescription'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default HomeComponent;