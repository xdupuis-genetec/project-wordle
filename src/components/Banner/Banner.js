import { GAME_STATES } from "../../constants";

function Banner({ children, gameState }) {
  const className = `${gameState === GAME_STATES.Win ? 'happy' : 'sad' } banner`
  return <div className={className}>{ children }</div>;
}

export default Banner;
