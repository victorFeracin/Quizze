import './style.css'

function LoginCadastroComponent({children}) {
    return(
        <section className="full-section">
            <div className="left-container">
                <div className='small-container'>
                    <h4>Quizze</h4>
                    <p>Sua plataforma de quizzes online!</p>
                </div>
            </div>
            <div className="right-container">
                {children}
            </div>
        </section>
    )
}

export default LoginCadastroComponent