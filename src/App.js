import Pokegame from "./Pokegame";
import { pokemon } from "./config";

function App() {
  return ( <div>
    <Pokegame pokemon={ pokemon }/>
  </div> );
}

export default App;
