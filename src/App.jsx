import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'

const fetchData = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {

  const playersPromise = fetchData()

  return (
    <>
      <Navbar></Navbar>
      <div className='text-black max-w-[1200px] mx-auto flex justify-between items-center'>
        <h3 className='font-bold text-2xl'>Available Players</h3>
        <div className='font-bold'>
          <button className='border-2 border-r-0 rounded-l-2xl py-3 px-2 bg-[#E7FE29]'>Available</button>
          <button className='border-2 border-l-0 rounded-r-2xl py-3 px-2'>Selected <span>(0)</span></button>
        </div>
      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
