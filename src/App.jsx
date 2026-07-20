import { useState } from 'react'
import { usePlayerState } from './contexts/PlayerContext';
import { Header } from './components/Header/Header';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateCategorySlider from './components/AnimateCategorySlider/AnimateCategorySlider';
import AdventureLog from './components/AdventureLog/AdventureLog';
import Inventory from './components/Inventory/Inventory';
import System from './components/System/System';

function App() {
  const { playerState: player } = usePlayerState();
  const [slideDirection, setSlideDirection] = useState(1);

  const [currentCategory, setCurrentCategory] = useState("inventory");


  return (
    <div className='main-wrapper z-10 overflow-hidden relative bg-cover bg-center bg-no-repeat w-full h-screen'>
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'/>
      <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        player={player}
        slideDirection={slideDirection}
        setSlideDirection={setSlideDirection}
      />
      <AnimateCategorySlider slideDirection={slideDirection} currentCategory={currentCategory}>
        <div className='flex flex-col h-full relative'>
          <main>
            {currentCategory === "adventure_log" && (
              <AdventureLog />
            )}
            {currentCategory === "inventory" && (
              <Inventory />
            )}
            {currentCategory === "system" && (
              <System />
            )}
          </main>
        </div>
      </AnimateCategorySlider>
    </div>
  )
}

export default App
