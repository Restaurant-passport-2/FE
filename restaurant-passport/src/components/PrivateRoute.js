import React, { useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [isLogged, setIsLogged] = useState(rest.user.isLogged || null);

    useEffect(() => {
        if(rest.user.isLogged === null || !rest.user.isLogged) {
            axiosWithAuth()
            .get('https://restaurant-passport-2.herokuapp.com/api/auth/authenticated')
            .then(res => {
                console.log(res);
                setIsLogged(true)
                // rest.loginUser();
            })
            .catch(err => {
                console.log(err);
                setIsLogged(false);
                // rest.logoutUser();
            })
        }
    },[])
    return(
        <Route
              {...rest}
              render={(props) => {
                return isLogged ? <Component {...props} /> : <Redirect to='/' />
              }}
            />
          
    )
}

export default PrivateRoute;


// const mapStateToProps = state => ({
//     user: state.User.isLogged
//   });
//   const mapActionsToProps = {
//     loginUser,
//     logoutUser
//   };
//   export default connect(mapStateToProps, mapActionsToProps)(PrivateRoute);