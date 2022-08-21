import React from 'react';
import { login, logout, getBalance } from '../../utils';
import nearLogo from '../../assets/near_white.svg';


export default function Wallet({setShowWallet, showWallet}) {
  const [balance, setBalance] = React.useState("NaN");
  const [dollar, setDollar] = React.useState("NaN");

  React.useEffect(async () => {
    const result = await getBalance();
    setBalance(result);
    const nearPrice = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=NEARUSDT")
      .then((res) => res.json())
      .catch((err) => {
        console.error("Error while fetching NEAR price", err);
        return { price: 0 }
      });
    const dResult = nearPrice.price * result;
    setDollar(dResult);
  }, [])

  function formatNumber(number, maxDecimal) {
    return Math.round(number * Math.pow(10,maxDecimal)) / Math.pow(10,maxDecimal)
  }

  function disconnectClicked() {
    logout();
    setShowWallet(false);
  }


  if (!window.walletConnection.isSignedIn()) {
    return (
      <>
        <div className="controls">
          <button onClick={login}  className="troacoWalletBadge">Connect Wallet</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="controls">
          <button className="troacoWalletBadge"
            onClick={() => setShowWallet(!showWallet)}
          >
            {window.accountId}
          </button>
        </div>

        {showWallet && (
          <div id="wallet" className="troacoWalletContainer">
            <div id="troacoWalletBalanceFlex">
              <p>BALANCE</p>
              <img id="troacoWalletNearLogo" src={nearLogo} alt='N' />
              <p className="walletFlexPlaceholder"></p>
              <p>{formatNumber(balance, 3)}</p>
            </div>            
            <div id="troacoWalletDollarFlex">
              <p className="walletFlexPlaceholder"></p>
              <p>~ ${formatNumber(dollar, 2)}</p>
            </div>
            <div id="troacoWalletButtonContainer">
              <button onClick={disconnectClicked} id="troacoDisconnect"></button>
            </div>
          </div>
        )}
      </>
    )
  }
}