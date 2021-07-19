import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/basket" component={Basket} />
            <Route path="/:id" component={ProductDetail} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
