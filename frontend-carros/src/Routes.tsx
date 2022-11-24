import { BrowserRouter, Switch, Route } from "react-router-dom";
import Catalogo from "./pages/Catalog";
import Home from "./pages/home";

const Routes = () => {
    return(
        <BrowserRouter>

            <Switch >
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/catalogo">
                    <Catalogo />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;