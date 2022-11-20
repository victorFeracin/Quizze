import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RequireAuth({ children }) {
    let location = useLocation();

    const isLogged = useSelector((state) => {
      return state.user.isLogged
    })
    if (!isLogged) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;