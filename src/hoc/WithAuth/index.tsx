import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../component/Common";
import { useAuth } from "../../hooks/useAuth";

const publicRoutes = ["/login", "/sign-up"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
    const Authenticated: FC = (): JSX.Element | null => {
        const { push, location } = useHistory();

        const { userSession } = useAuth();

        if (userSession === undefined) return <Loading />;

        if (userSession && publicRoutes.includes(location.pathname)) push("/");

        if (userSession === false && !publicRoutes.includes(location.pathname))
        push("/login");

        return <Component />;
    };

    return Authenticated;
};

export { WithAuth };