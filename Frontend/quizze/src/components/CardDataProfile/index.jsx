
import { Link } from 'react-router-dom';
import './style.css'

function CardDataProfile() {
    return(
        <div className="card-data">
            <h2>Bem-vindo, usuário !</h2>
            <p>Nome: Exemplo da Silva</p>
            <p>Email: exemplo@mail.com</p>
            <p>Partidas jogadas: 27</p>
            <p>Pontuação média: 774.8</p>
            <Link className='formButton' to='/editProfile'>Editar Perfil</Link>
        </div>
    )
}

export default CardDataProfile