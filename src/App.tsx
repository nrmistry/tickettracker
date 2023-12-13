import './App.scss';
//import TicketCard from "./components/TicketCard/TicketCard"; 
import teams from "./data/teams";
import TicketBoard from "./containers/TicketBoard/TicketBoard";
//import Members from "./types/Members";

const App = ()=> {
  return (
    <div className ="app">
      <TicketBoard members={teams} /> 
    </div>
  );
  
}


export default App