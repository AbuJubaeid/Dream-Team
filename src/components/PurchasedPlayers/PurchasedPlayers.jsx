
const PurchasedPlayers = ({player, removePlayer}) => {

    const handleRemove = () =>{
        removePlayer(player)
    }

    return (
        <div>
            <div className='border-2 border-gray-300 p-3 rounded-2xl flex justify-between items-center mt-4 mb-4'>
                <div className='flex items-center'>
                   <img src={player.player_image} className='h-[50px] w-[50px] rounded-2xl' />
                   <div className='ml-2'>
                     <h1>{player.player_name}</h1>
                     <p className='text-xs'>{player.playing_role}</p>
                   </div>
                </div>
                <div onClick={handleRemove}>
                   <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PurchasedPlayers;