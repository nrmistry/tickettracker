import './App.scss';
import teams from "./data/teams";
import TicketBoard from "./containers/TicketBoard/TicketBoard";
import {FormEvent, useState} from "react";
import SearchBox from "./components/SearchBox/SearchBox";

const App = ()=> {

  const [ searchTerm, setSearchTerm] = useState<string>("");
  

  const handleSearchInputChange = (event: FormEvent<HTMLInputElement>)  => {
    setSearchTerm(event.currentTarget.value);
    console.log('search Term:', event.currentTarget.value)
  }

  const filteredTeam = teams.filter (
    member => {
      const nameMatch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      const roleMatch = member.role.toLowerCase().includes(searchTerm.toLowerCase());
      console.log('Member:', member.name, 'Name Match:', nameMatch, 'Role Match:', roleMatch);
      return nameMatch || roleMatch;
    })
  
    console.log('Filtered Team', filteredTeam);


  return (
    <div className ="app">
      <h1 className="appTitle">Ticket Tracker</h1>
      <SearchBox
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleSearchInputChange}
        />
      <TicketBoard members={filteredTeam} /> 
    </div>
  );
  
}


export default App