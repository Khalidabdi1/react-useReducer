import logo from './logo.svg';
import './App.css';
import Calculator from './component/Calculator';
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <Analytics>
    <div className="App">
    <Calculator/>
    </div>
    </Analytics>
  );
}

export default App;
