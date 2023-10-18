import { ToastContainer } from "react-toastify";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import { DataProvider } from "./context/DataContext";
import "./style/app.css"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <DataProvider>  
      <ToastContainer/>
      <Navi/>
      <Form/>
      <CardList/>
    </DataProvider>
  );
}

export default App;
