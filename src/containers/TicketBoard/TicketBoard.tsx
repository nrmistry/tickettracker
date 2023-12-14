import Members from "../../types/Members";
import "./TicketBoard.scss";
import TicketCard from "../../components/TicketCard/TicketCard"

  type TeamMember = {
    members: Members[];
  };

  const TicketBoard = ({ members }: TeamMember) => {
    return (
      <div className="ticketBoard">
        {members.map((member) => (
          <TicketCard name={member.name} role={member.role} />
        ))}
      </div>
    );
  };

export default TicketBoard;