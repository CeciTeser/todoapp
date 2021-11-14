import {FC} from 'react';
import {useHistory} from 'react-router-dom';
import { useAuth } from '../../hooks';


const isAuthenticated = true;

type WithAuthenticatedFc = (Component: FC) => FC;

const WithAuth: WithAuthenticatedFc = (Component) => {

    const Authenticated: FC = (): JSX.Element | null =>{
        const { push } = useHistory();
        
        return isAuthenticated ? <Component /> : null;

    }

    return  Authenticated;
}

// const publicRoutes = ["/login", "/sign-up"];

// type withAuthenticationFn = (Component: FC) => FC;

// const WithAuth: withAuthenticationFn = (Component) => {
//   const Authenticated: FC = (): JSX.Element | null => {
//     const { push, location } = useHistory();

//     const { hasUserLoggedIn } = useAuth ();

//     console.log(hasUserLoggedIn);

//     if (hasUserLoggedIn === undefined) return <Loading />;

//     if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push("/");

//     if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))
//       push("/login");

//     return <Component />;
//   };

//   return Authenticated;
// };

export { WithAuth };

