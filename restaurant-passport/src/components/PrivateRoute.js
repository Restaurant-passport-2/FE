import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [isLogged, setIsLogged] = useState(rest.user.isLogged || null);
    return(
        <Route
              {...rest}
              render={(props) => {
                return isLogged ? <Component {...props} /> : <Redirect to='/login' />
              }}
            />
          
            // {...rest}
            // render={props => {
            //     if (localStorage.getItem('token')){
            //         return <Component {...props} />;
            //     }else{
            //         return <Redirect to='/login' />;
            //     }
            // }}
        // />
    )
}

export default PrivateRoute;