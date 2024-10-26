const AppWrapper = () => {
  const network = '' || clusterApiUrl('mainnet-beta');
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    const storedBuyAmount = localStorage.getItem('buyAmount') || 'custom';
    setBuyAmount(storedBuyAmount);
    const storedBoughtTokens = JSON.parse(localStorage.getItem('boughtTokens')) || [];
    setBoughtTokens(storedBoughtTokens);
  }, []);

  return (
    <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
};
