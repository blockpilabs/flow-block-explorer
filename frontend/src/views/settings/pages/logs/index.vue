<template>
  <layout-container>
    <div class="logs">
      <div class="title">
        Logs
      </div>
      <el-card class="logs-card">
        <div class="search">
          <titan-input
            v-model="searchParam"
            class="search-input"
            @keyup.enter="handleSearch"
          >
            <i
              slot="append"
              class="iconfont icon-sousuo search-icon"
              @click="handleSearch"
            />
          </titan-input>
        </div>
        <div class="logs-content">
          <ace-editor
            ref="aceEditor"
            :content="code"
            lang="shell"
            :read-only="true"
            :config="{
              fontSize: '12px'
            }"
          />
        </div>
      </el-card>
    </div>
  </layout-container>
</template>

<script>
import AceEditor from '@/components/AceEditor';

export default {
  name: 'Logs',
  components: { AceEditor },
  data() {
    return {
      searchParam: '',
      code: `INFO[0000] ⚙️   Using service account 0xf8d6e0586b0a20c7  serviceAddress=f8d6e0586b0a20c7 serviceHashAlgo=SHA3_256 servicePrivKey=2d5e6bef00ba9efcccf716cb8d7a26607d6678668b1af65fbb1bac276e8bace7 servicePubKey=a03b27777721fdf1fdbe017f40ba569f464eb255c58c791524c926561a22e901a1fd05b0fdac0fbfe5dce8f98b0eb34ffb306636f82d4543282e50ec3a8a5243 serviceSigAlgo=ECDSA_P256
INFO[0000]   Flow contracts                             FlowFees=0xe5a8b7f23e8b548f FlowServiceAccount=0xf8d6e0586b0a20c7 FlowStorageFees=0xf8d6e0586b0a20c7 FlowToken=0x0ae53cb6e3f42a79 FungibleToken=0xee82856bf20e2aa6
INFO[0000]   Starting gRPC server on port 3569          port=3569
INFO[0000]   Starting HTTP server on port 8080          port=8080
INFO[0002] ⭐  Transaction executed                       txID=b141d26a87d373a740b04eb41da512272cc83c650a530327988cfe2476eb009b
INFO[0006] ⭐  Transaction executed                       txID=e328a7494319add71eb6eb1e69a62576aad7615f23a5052d1127619b69bae18b
INFO[0028] ⭐  Transaction executed                       txID=e51911286e3b013d6642b881829f2595bcc0a986c8965f21a773203eb2907ff7
INFO[0039] ⭐  Transaction executed                       txID=b90db859a72216f09f3f5873e51d744067e691b60952dab2411ce72dfcf07d8c`
    };
  },
  methods: {
    handleSearch() {
      const editor = this.$refs.aceEditor.$refs.editor.editor;
      editor.find(this.searchParam, {
        backwards: false,
        wrap: true,
        caseSensitive: false,
        wholeWord: false,
        regExp: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.logs {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }
  &-card {
    margin-top: 18px;
    .search-input {
      ::v-deep {
        .el-input-group__append {
          cursor: pointer;
          height: 40px;
          background: #000000;
          color: #ffffff;
          width: 50px;
          padding: 5px 15px;
          border-color: #000000;
          .search-icon {
            font-size: 20px;
          }
        }
      }
    }
  }
  &-content {
    margin-top: 20px;
    width: 100%;
    height: 560px;
    border-radius: 4px;
    border: solid 1px #d8dfde;
    overflow: auto;
    padding: 36px 24px;
  }
}
</style>
