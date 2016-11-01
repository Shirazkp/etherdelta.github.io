var config = {
  account: {
    address: '',
    privateKey: ''
  },
  pairs: [
    {
      pair: 'TRMPN/ETH', expires: 15000,
      sellEnabled: 'onOrders/balance<0.25', sellNum: 5, sellVolume: '(balance - onOrders) / n * (0.9 + Math.random()*0.1)', sellPrice: '0.9 + 0.099 * i / n',
      buyEnabled: 'onOrders/balance<0.25', buyNum: 5, buyVolume: '(balance - onOrders) / n / price * (0.9 + Math.random()*0.1)', buyPrice: '0.7 - 0.21 * i / n'
    },
    // {
    //   pair: 'TRMPY/ETH', expires: 25,
    //   sellEnabled: 'onOrders/balance<0.25', sellNum: 15, sellVolume: '(balance - onOrders) / n * (0.9 + Math.random()*0.1)', sellPrice: '0.2 + 0.2 * i / n',
    //   buyEnabled: 'onOrders/balance<0.25', buyNum: 15, buyVolume: '(balance - onOrders) / n / price * (0.9 + Math.random()*0.1)', buyPrice: '0.1 - 0.095 * i / n'
    // },
  ],
};

module.exports = config;
