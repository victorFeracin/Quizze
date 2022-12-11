import './style.css';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/feature/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HeaderComponent () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
      dispatch(signOut());
      navigate('/');
      toast("Usuário deslogado!")
  }

  return (
    <div className="headerContainer">
      <div className="logo">
        <h1><Link to='/home'>Quizze</Link></h1>
      </div>
      <div className='menuContainer'>
        <ul className='menu'>
          <li className='btnHeader'><Link to='/home'>Home</Link></li>
          <li className='btnHeader'><Link to={`/profile`}>Perfil</Link></li>
          <li><button onClick={handleSignOut}>Sair</button></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;