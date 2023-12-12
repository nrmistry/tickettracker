//import teams from "../data/teams";
import "./TicketCard.scss";
import Counter from "../Counter/Counter";

/*type TicketCardProps = {
    id: number;
    name: string;
    role: string;
} */

const TicketCard = () => {

    return (
        <div className = "ticketContainer">
            <h3 className="ticketContainer__name">name </h3>
            <h3 className="ticketContainer__role">role </h3>
            <Counter/>
        </div>
    )
}

export default TicketCard;