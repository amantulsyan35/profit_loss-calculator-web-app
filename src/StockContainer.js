import React, { useState } from 'react';

import './StockContainer.css';

const StockContainer = () => {
  const [purchaseAt, setPurchaseAt] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [display, setDisplay] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [profit, setProfit] = useState(false);
  const [loss, setLoss] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let orignalPrice = purchaseAt * quantity;
    let CurrentPrice = price * quantity;

    if (orignalPrice > CurrentPrice) {
      let loss = orignalPrice - CurrentPrice;
      let lossPercent = Math.round((loss / orignalPrice) * 100);
      setDisplay(loss);
      setDisplayPercent(lossPercent);
      setLoss(true);
    } else if (CurrentPrice > orignalPrice) {
      let profit = CurrentPrice - orignalPrice;
      let profitPercent = Math.round((profit / orignalPrice) * 100);
      setDisplay(profit);
      setDisplayPercent(profitPercent);
      setProfit(true);
    } else {
      setDisplay(0);
      setDisplay(0);
    }
  };

  return (
    <div className='Stock-container'>
      <div className='Stock-item-1'>
        <div className='Stock1-item-1'>
          <a href='https://www.amantulsyan.com/'>
            <i className='fas fa-briefcase'></i>
          </a>
          <a href='https://github.com/amantulsyan35'>
            <i className='fab fa-github'></i>
          </a>
        </div>
        <div className='Stock1-item-2'>
          <form onSubmit={handleSubmit}>
            <div className='Form-group'>
              <label>Purchase Price</label>
              <input
                type='number'
                onChange={(evt) => setPurchaseAt(Number(evt.target.value))}
              />
            </div>
            <div className='Form-group'>
              <label>Stock Quantity</label>
              <input
                type='number'
                onChange={(evt) => setQuantity(Number(evt.target.value))}
              />
            </div>
            <div className='Form-group'>
              <label>Current Price</label>
              <input
                type='number'
                onChange={(evt) => setPrice(Number(evt.target.value))}
              />
            </div>
            <button className='Check'>Check</button>
          </form>
        </div>
      </div>
      <div className='Stock-item-2'>
        <div className='Stock2-item-1'>
          {profit === true && (
            <h3>
              You gained {displayPercent}%. Yor total profit is ₹{display}
            </h3>
          )}
          {loss === true && (
            <h3>
              You lost {displayPercent}%. Yor total loss is ₹{display}
            </h3>
          )}
          {display === 0 && <h3>Output</h3>}
        </div>
        <div className='Stock2-item-2'>
          {profit === true && (
            <img
              alt='gif'
              src='https://media4.giphy.com/media/MX2lLeuGdWABSTt8ie/200.gif'
            />
          )}
          {loss === true && (
            <img
              alt='gif'
              src='https://thumbs.gfycat.com/BlissfulArcticDartfrog-size_restricted.gif'
            />
          )}
          {display === 0 && (
            <img
              alt='gif'
              src='https://cdn.dribbble.com/users/2317423/screenshots/15430196/man_trades_stocks.jpg'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StockContainer;
