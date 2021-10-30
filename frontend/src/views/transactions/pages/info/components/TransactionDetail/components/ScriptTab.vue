<template>
  <div class="script-tab">
    <div class="title fm-hi">
      Cadence
    </div>
    <div class="some-info">
      <el-row :gutter="30">
        <el-col :span="6">
          <div class="some-info-item">
            <div class="label">
              Fee Price
            </div>
            <div class="value">
              -
            </div>
            <horizental-divider />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="some-info-item">
            <div class="label">
              Fee Limit
            </div>
            <div class="value">
              9999
            </div>
            <horizental-divider />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="some-info-item">
            <div class="label">
              Sequence Number
            </div>
            <div class="value">
              0
            </div>
            <horizental-divider />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="some-info-item">
            <div class="label">
              Key Index
            </div>
            <div class="value">
              1
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <pre v-highlightjs="sourcecode"><code class="javascript" /></pre>
  </div>
</template>

<script>
import HorizentalDivider from '@/components/HorizentalDivider';
export default {
  name: 'ScriptTab',
  components: { HorizentalDivider },
  data() {
    return { sourcecode: "import FungibleToken from 0xf233dcee88fe0abe\nimport TeleportedTetherToken from 0xcfdd90d4a00f7b5b\nimport BloctoToken from 0x0f9df91c9121c460\nimport BloctoTokenPublicSale from 0x8f4da203e4cf06f9\n\ntransaction(amount: UFix64) {\n\n  // The tUSDT Vault resource that holds the tokens that are being transferred\n  let sentVault:  @TeleportedTetherToken.Vault\n\n  // The address of the $BLT buyer\n  let buyerAddress: Address\n\n  prepare(account: AuthAccount) {\n\n    // Get a reference to the signer''s stored vault\n    let vaultRef = account.borrow\u003c\u0026TeleportedTetherToken.Vault\u003e(from: TeleportedTetherToken.TokenStoragePath)\n      ?? panic(\"Could not borrow reference to the owner''s Vault!\")\n\n    // Withdraw tokens from the signer''s stored vault\n    self.sentVault \u003c- vaultRef.withdraw(amount: amount) as! @TeleportedTetherToken.Vault\n\n    // Record the buyer address\n    self.buyerAddress = account.address\n\n    // If user does not have BloctoPass collection yet, create one to receive\n    if account.borrow\u003c\u0026BloctoToken.Vault\u003e(from: BloctoToken.TokenStoragePath) == nil {\n\n      // Create a new Blocto Token Vault and put it in storage\n      account.save(\u003c-BloctoToken.createEmptyVault(), to: BloctoToken.TokenStoragePath)\n\n      // Create a public capability to the Vault that only exposes\n      // the deposit function through the Receiver interface\n      account.link\u003c\u0026BloctoToken.Vault{FungibleToken.Receiver}\u003e(\n        BloctoToken.TokenPublicReceiverPath,\n        target: BloctoToken.TokenStoragePath\n      )\n\n      // Create a public capability to the Vault that only exposes\n      // the balance field through the Balance interface\n      account.link\u003c\u0026BloctoToken.Vault{FungibleToken.Balance}\u003e(\n        BloctoToken.TokenPublicBalancePath,\n        target: BloctoToken.TokenStoragePath\n      )\n    }\n  }\n\n  execute {\n\n    // Enroll in $BLT public sale\n    BloctoTokenPublicSale.purchase(from: \u003c-self.sentVault, address: self.buyerAddress)\n  }\n}\n" };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.script-tab {
  .title {
    margin-top: 20px;
    font-weight: bold;
  }
  .some-info {
    margin: 20px 0px 30px;
    border: 1px solid #d8dfde;
    border-radius: 4px;
    padding: 16px 30px;
    &-item {
      position: relative;
      padding: 14px 30px 14px 0px;
      .label {
        margin-bottom: 20px;
        font-weight: bold;
      }
      .value {
        font-weight: 500;
      }
    }
  }
}
</style>
