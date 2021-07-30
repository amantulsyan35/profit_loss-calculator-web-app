import './App.css';

import StockContainer from './StockContainer';
import Pattern from './Pattern.svg';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${Pattern})` }}>
      <StockContainer />
    </div>
  );
}

export default App;
