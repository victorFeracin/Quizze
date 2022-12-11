import './style.css'

import HeaderComponent from "../../components/HeaderComponent";
function editProfile(){
    return(
        <>
            <HeaderComponent />
            <div className='container-profile'>
                <form className='formContainer'>
                    <h2 className='title-edit'>Editar perfil</h2>
                    <div className='floatContainer'>
                        <label className='input1'>Usuário</label>
                        <input type="text" className='formInput' placeholder='Digite o usuário aqui...' />
                    </div>
                    <div className='floatContainer'>
                        <label className='input1'>Senha</label>
                        <input type="text" className='formInput' placeholder='Digite a senha aqui...' />
                    </div>
                    <div className='floatContainer'>
                        <label className='input1'>Email</label>
                        <input type="text" className='formInput' placeholder='Digite seu email aqui...' />
                    </div>
                    <button className='formButton' type='submit'>Editar</button>
                </form>
            </div>
        </>
    )
}

export default editProfile