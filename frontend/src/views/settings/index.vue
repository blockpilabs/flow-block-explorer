<template>
  <layout-container>
    <div class="settings">
      <div class="title">
        Settings
      </div>
      <div class="settings-body">
        <titan-form
          :model="form"
          class="settings-form"
          :column="column"
          label-position="right"
          label-width="80px"
        />
      </div>
    </div>
  </layout-container>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      form: {
        mainnet: 'flow.public-rpc.blockpi.io:6688',
        testnet: 'flow-testnet.public-rpc.blockpi.io:6688',
        emulator: 'flow-emulator.blockpi.io:3569',
        params: '--block-time \'300ms\''
      }
    };
  },
  computed: {
    column() {
      return [
        {
          label: 'Mainnet',
          render: (h, form) => <el-row gutter={10}>
              <el-col span={16}>
                <el-input placeholder='Input the mainnet endpoint' v-model={form.mainnet}>
                  <template slot='prepend'>ENDPOINT</template>

                </el-input>
              </el-col>
            </el-row>
        },
        {
          label: 'Testnet',
          render: (h, form) => <el-row gutter={10}>
              <el-col span={16}>
                <el-input placeholder='Input the testnet endpoint' v-model={form.testnet}>
                  <template slot='prepend'>ENDPOINT</template>

                </el-input>
              </el-col>
            </el-row>
        },
        {
          label: 'Emulator',
          render: (h, form) => <div>
            <el-row gutter={10}>
              <el-col span={16}>
                <el-input placeholder='Input the emulator endpoint' v-model={form.emulator}>
                  <template slot='prepend'>ENDPOINT</template>

                </el-input>
              </el-col>
            </el-row>
            <el-row gutter={10} style='margin-top: 20px;'>
              <el-col span={16}>
                <el-input placeholder='Input the emulator params' v-model={form.params}>
                  <template slot='prepend'>Emulator params</template>
                </el-input>
              </el-col>
              <el-col span={8}>
                <el-button type='custom' style='margin-top: 4px;' onClick={this.restart}>Restart Emulator</el-button>
                <el-button type='custom' plain style='margin-top: 4px;' onClick={this.linkToLogs}>Show Logs</el-button>
              </el-col>
            </el-row>
          </div>
        },
        {
          label: '',
          render: () => <el-button type='custom' class='save-btn' onClick={this.handleSave}>Save</el-button>
        }
      ];
    }
  },
  methods: {
    // handlePaste(val) {
    //   navigator.clipboard.readText().then(text => {
    //     this.form[val] = text;
    //   });
    // }
    linkToLogs() {
      this.$router.push({ name: 'Logs' });
    },
    restart() {
      console.log('restart');
    },
    handleSave() {
      console.log('save');
    }
  }
};
</script>

<style lang="scss" scoped>
.settings {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }
  &-body {
    margin-top: 50px;
  }
  &-form {
    ::v-deep {
      .el-form-item {
        margin-bottom: 40px;
      }
      .el-form-item__label {
        line-height: 50px;
      }
      .el-input-group__prepend {
        color: #333;
        font-weight: 500;
        background-color: #f0f0f0;
      }
      .el-input__inner {
        height: 50px;
      }
      .paste-btn {
        cursor: pointer;
        display: inline-block;
        background-color: #f8f8f8;
        border-radius: 4px;
        width: 53px;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        color: #000;
        font-size: 14px;
      }
    }
  }
}
</style>
