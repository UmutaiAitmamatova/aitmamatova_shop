import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import { Provider } from 'react-redux'; 

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
export default App;
