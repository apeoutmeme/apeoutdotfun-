const CoinCard = ({ coin, onFavorite, onBuy, isFavorite, onSell }) => {
     // Add a null check at the beginning of the comp
  if (!coin) {
    return null; // or return a placeholder comp
  }

  const pumpFunUrl = `https://pump.fun/${coin.mint}`;

 return (
    <div className="coin-card">
      <img src={coin.image || 'https://via.placeholder.com/150'} alt={coin.name} className="coin-image" />
      <div className="coin-info">
        <h2>{coin.name || 'Unknown Token'}</h2>
        <p>{coin.description || 'No description available'}</p>
        {coin.marketCap && <p>Market Cap: {coin.marketCap.toFixed(2)}</p>}
        {coin.usdMarketCap && <p>USD Market Cap: ${coin.usdMarketCap.toFixed(2)}</p>}
        {coin.replyCount && <p>Reply Count: {coin.replyCount}</p>}
        {coin.lastReply && <p>Last Reply: {new Date(coin.lastReply).toLocaleString()}</p>}
        <a href={pumpFunUrl} target="_blank" rel="noopener noreferrer" className="pump-fun-link">View on pump.fun</a>

      </div>
      <div className="coin-actions">
        <button className={`action-button favorite ${isFavorite ? 'active' : ''}`} onClick={() => onFavorite(coin)}>
          ❤️
        </button>
        <button className="action-button buy ape" onClick={() => onBuy(coin, 0.0001)}>🦍➕</button>
        <button className="action-button buy snipe" onClick={() => onSell(coin, 10000)}>🎯</button>
      </div>
    </div>
  );
}
