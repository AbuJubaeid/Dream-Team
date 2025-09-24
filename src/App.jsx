import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchData = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

// state change howar por re-render hossilo tai function call take app component er bahire disi jate ekbar promise call hoy
const playersPromise = fetchData()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='text-black max-w-[1200px] mx-auto flex justify-between items-center'>
        <h3 className='font-bold text-2xl'>Available Players</h3>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`border-2 border-r-0 rounded-l-2xl py-3 px-2 cursor-pointer ${toggle===true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`border-2 border-l-0 rounded-r-2xl py-3 px-2 cursor-pointer ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <AvailablePlayers 
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}  
        playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
      
      
    </>
  )
}

export default App
