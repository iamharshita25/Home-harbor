import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.user);

    if (!currentUser) { 
        return <Navigate to="/signin" />;
    }
 
    return children;
};

export default PrivateRoute;
