import Layout from "./components/Layout/Layout";
import "./App.css";
import DecorBuilder from  "./components/DecorBuilder/DecorBuilder";
import Checkout from "./components/Checkout/Checkout";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">

      <Layout>
<Switch>
          <Route path="/" component={DecorBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
    
      
      </Layout>

    </div>
  );
}

export default App;

