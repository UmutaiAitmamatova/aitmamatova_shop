import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import { Provider } from 'react-redux'; 
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
