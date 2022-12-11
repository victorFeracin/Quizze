import './style.css';

import HeaderComponent from "../../components/HeaderComponent";
import CardDataProfile from "../../components/CardDataProfile";
import { Link } from 'react-router-dom';

function Profile(){
    return(
        <>
            <HeaderComponent />
            <div className='container-profile'>
                <CardDataProfile />
                <div className='card-data btns'>
                    <button className='formButton' type='button'>Histórico de Partidas</button>
                    <button className='formButton' type='button'>Conquistas</button>
                    <button className='formButton' type='button'>Lista de troféus</button>
                </div>
            </div>
        </>

    )
}

export default Profile  