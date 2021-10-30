const toHex = num => '0x' + (Number(num)).toString(16);

export default {
  computed: {
    account() {
      return this.$store.state.wallet.account || {};
    },
    address() {
      return (this.account && this.account.address) ? this.account.address : '';
    },
    btnText() {
      return this.address ? 'Add To Metamask' : 'Connect Wallet';
    }
  },
  methods: {
    handleClick(chain) {
      if (!this.address) {
        this.$store.dispatch('wallet/tryConnectWallet');
        return;
      }

      const params = {
        chainId: toHex(chain.chain_id), // A 0x-prefixed hexadecimal string
        chainName: chain.name,
        nativeCurrency: {
          name: chain.name,
          symbol: chain.symbol,
          decimals: 18
        },
        rpcUrls: [chain.rpc_url],
        blockExplorerUrls: [chain.explorers]
      };
      window.web3.eth.getAccounts((error, accounts) => {
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [params, accounts[0]]
        })
          .then(() => {
            this.$message.success('Successfully added');
          })
          .catch(error => {
            this.$message.error(error.message);
          });
      });
    }
  }
};
