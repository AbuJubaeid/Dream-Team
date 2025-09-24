import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({playersPromise, availableBalance, setAvailableBalance}) => {

    const playersData = use(playersPromise)
    console.log(playersData)

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              playersData.map(player => <PlayerCard
                setAvailableBalance={setAvailableBalance}
                availableBalance={availableBalance}
                player={player}></PlayerCard>)
            }
            
        </div>
    );
};

export default AvailablePlayers;