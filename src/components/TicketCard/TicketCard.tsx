//import teams from "../data/teams";
import "./TicketCard.scss";
import Counter from "../Counter/Counter";


type Members = {
    name: string;
    role: string;
  };
  
  type TicketCardProps = Members;
  
  const TicketCard = ({ name, role }: TicketCardProps) => {
    return (
      <div className="ticketContainer">
        <div className="ticketContainer__content">
          <h3 className="ticketContainer__name">
            {name}
          </h3>
          <h3 className="ticketContainer__role">
            {role}
          </h3>
          <Counter />
        </div>
      </div>
    );
  };
  
  export default TicketCard;