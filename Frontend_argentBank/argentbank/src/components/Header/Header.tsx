import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../app/user.actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../../assets/images/argentBankLogo.png";
import { RootState } from '../../pages/Profile/Profile';
import { AppDispatch } from '../../app/store';

interface AuthState {
    user: {
      userName: string;
      firstName: string;
      lastName: string;
    };
    isAuthenticated: boolean;
  }
  
  interface AuthenticatedState {
    auth: AuthState;
  }


export const Header:React.FC = () => {
   
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state:AuthenticatedState) => state.auth.isAuthenticated);
    const user = useSelector((state:RootState) => state.auth.user);
  
    const handlelogOut = (e:React.MouseEvent) => {
      e.preventDefault();
      dispatch(logOut());
      navigate('/');
    };

    return (
        <nav>
            <NavLink to='/'>
                <img src={Logo} alt='Argent Bank Logo' />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            <ul>
                <li>
                    {isAuthenticated ? (
                        <>
                            <NavLink to='/profile'>
                                <i className='fa fa-user-circle main-nav-item'></i>
                                {user?.userName}
                            </NavLink>
                            <NavLink to='/' onClick={handlelogOut}>
                                <i className='fa fa-sign-out'></i>
                                Sign Out
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to='/signin'>
                            <i className='fa fa-user-circle'></i>
                            Sign In
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};




