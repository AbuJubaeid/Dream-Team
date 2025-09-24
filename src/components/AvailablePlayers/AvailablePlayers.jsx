import { use } from "react";
import flagLogo from '../../assets/flagLogo.png';
import userImg from '../../assets/group.png';

const AvailablePlayers = ({playersPromise}) => {

    const playersData = use(playersPromise)
    console.log(playersData)

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                playersData.map(player => <div className="card bg-white text-black shadow-sm p-4 mb-4">
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
                  <button className="btn">Choose Player</button>
                </div>
              </div>
            </div>)
            }
            
        </div>
    );
};

export default AvailablePlayers;