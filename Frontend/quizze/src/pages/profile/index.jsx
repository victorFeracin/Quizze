import './style.css';

import HeaderComponent from "../../components/HeaderComponent";
import { Link } from 'react-router-dom';

function Profile(){
    return(
        <>
            <HeaderComponent />
            <div className='container-profile'>
                <h2 className="title">Bem-vindo, usuário !</h2>
                <div className='container-btns'>
                    <button className='formButton' type='button'>Histórico de Partidas</button>
                    <button className='formButton' type='button'>Conquistas</button>
                    <button className='formButton' type='button'>
                        <Link to='/editProfile'>Editar Perfil</Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Profile  