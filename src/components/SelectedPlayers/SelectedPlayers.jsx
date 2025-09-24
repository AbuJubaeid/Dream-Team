import PurchasedPlayers from "../PurchasedPlayers/PurchasedPlayers";

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    console.log(purchasedPlayers)
    return (
        <div className="max-w-[1200px] mx-auto text-black min-h-[550px]">
            {
                purchasedPlayers.map(player=><PurchasedPlayers removePlayer={removePlayer} player={player}></PurchasedPlayers>)
            }
        </div>
    );
};

export default SelectedPlayers;