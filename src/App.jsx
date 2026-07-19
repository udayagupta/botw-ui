import { useState } from 'react'
import { usePlayerState } from './contexts/PlayerContext';
import { Header } from './components/Header/Header';

function App() {
  const { playerState: player } = usePlayerState();

  const [currentCategory, setCurrentCategory] = useState("inventory");


  return (
    <div className='main-wrapper'>
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} player={player}/>
    </div>
  )
}

export default App
