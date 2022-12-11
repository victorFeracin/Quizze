import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,  useEffect} from 'react';
import { getGrupos } from '../../services/api';
import { toast } from "react-toastify";

import './style.css';
import themeImg from '../../assets/themeImg.jpg';

const HomeComponent = () => {
  const [group, setgroup] = useState([]);

  useEffect(() => {
    const loadGroup = async () => {
      try {
        const response = await getGrupos()
        console.log('response', response)
        setgroup(response.data)
      } catch (error) {
        toast.error(`Erro ao carregar os produtos: ${error}`);
      }
    }
    loadGroup();
    console.log('group', group)
  }, [setgroup]);

  
  return (
    <div className="homeContainer">
      <h1 className='homeTitle'>Escolha um dos temas e comece a jogar!</h1>

      <div className='gameCardsContainer'>
        {group?.map(groupItem=>{
          return(
            <Link to={`/perguntas?${'id'}`} className='gameCard'>
              <img src={themeImg} alt="Imagem do tema" />
              <div className='gameCardInfo'>
                <h2 className='gameCardTitle'>{groupItem.titulo}</h2>
                <p className='gameCardDescription'>{groupItem.descricao}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default HomeComponent;