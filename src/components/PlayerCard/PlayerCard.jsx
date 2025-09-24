import { useState } from 'react';
import { toast } from 'react-toastify';
import flagLogo from '../../assets/flagLogo.png';
import userImg from '../../assets/group.png';

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    const [selected, isSelected] = useState(false)
    const handleSelected = (playerData) =>{
        if(availableBalance < playerData.price){
            toast("Not enough coins...")
            return
        }
        if(purchasedPlayers.length===6){
            toast("6 players already selected...")
            return
        }
        else{
            isSelected(true)
            setAvailableBalance(availableBalance - playerData.price)
            setPurchasedPlayers([...purchasedPlayers, playerData])
           }
        
    }


    return (
        <div className="card bg-white text-black shadow-sm p-4 mb-4">
              <figure>
                <img className="w-[full] h-[300px]"
                  src={player.player_image} />
              </figure>
              <div className="mt-4">
                <div className="flex">
                <img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className="flex justify-between mt-4 items-center border-b-1 border-gray pb-2">
                    <div className="flex items-center">
                        <img className="w-[20px] h-[20px]" src={flagLogo} alt="" />
                        <span className="ml-4">{player.player_country}</span>
                    </div>
                    <button className="btn">All-Rounder</button>
                </div>
                <div className="flex justify-between font-bold">
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Player Role</span>
                    <span>{player.playing_role}</span>
                </div>
                <div className="card-actions mt-4 justify-between items-center">
                   <div className="flex items-center">
                        <p className="font-bold">Price: </p>
                        <span>${player.price}</span> 
                   </div>
                  <button disabled={selected} onClick={()=>{handleSelected(player)}} className={`btn ${selected? "text-green-500" : "text-white"} `}>{selected === true ? "Selected" : "Choose Player"}</button>
                </div>
              </div>
            </div>
    );
};

export default PlayerCard;