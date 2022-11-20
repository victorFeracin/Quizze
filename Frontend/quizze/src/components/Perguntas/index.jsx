import './style.css';

function PerguntaComponent() {
    return(
        <div className='container-quest homeContainer'>
            <div className='pergunta-container'>
                <h4 className='title-pergunta'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum </h4>
                <ul>
                    <li>Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    <li>Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    <li>Lorem ipsum Lorem ipsum Lorem ipsum</li>
                    <li>Lorem ipsum Lorem ipsum Lorem ip sum</li>
                </ul>
            </div>
            <div className='btn-control'>
                <input className='btn prev' type="button" value='Anterior' />
                <input className='btn next' type="button" value='Próximo' />
            </div>
        </div>
    )
}

export default PerguntaComponent;