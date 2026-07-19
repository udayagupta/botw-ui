import { createContext, useState, useContext } from 'react';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState({
    name: "Link",
    stats: {
      hearts: 2.75,
      yellowHearts: 0,
      maxHearts: 20,
      stamina_gauges: 1.0,
      rupees: 13878
    },
    inventory: {
      runes: ["Magnesis", "Remote Bomb", "Stasis", "Cryonis"],
      key_items: ["Spirit Orb", "Spirit Orb", "Spirit Orb", "Spirit Orb"]
    },
    quest_log: {
      active_quests: [
        {
          quest_id: "quest_isolated_plateau",
          current_step_id: 3
        }
      ],
      completed_quests: [
        "quest_follow_sheikah_slate"
      ]
    }
  });

  return (
    <PlayerContext.Provider value={{ playerState, setPlayerState }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerState = () => {
  const context = useContext(PlayerContext);
  
  if (context === undefined || context === null) {
    throw new Error('usePlayerState must be used within a PlayerProvider');
  }
  
  return context;
};