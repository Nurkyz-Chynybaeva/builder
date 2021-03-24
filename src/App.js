import Layout from "./components/Layout/Layout";
import "./App.css";
import DecorBuilder from  "./components/DecorBuilder/DecorBuilder";

function App() {
  return (
    <div className="App">

      <Layout>
      <DecorBuilder />
      </Layout>

    </div>
  );
}

export default App;



