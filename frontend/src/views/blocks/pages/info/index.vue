<template>
  <layout-container>
    <div class="block-info">
      <div class="title">
        Block <span class="block-num">#{{ blockId }}</span>
      </div>
      <el-card class="block-info-card">
        <titan-form
          :model="form"
          :column="column"
          label-position="left"
          label-width="164px"
        />
      </el-card>
      <block-detail />
    </div>
  </layout-container>
</template>

<script>
import BlockDetail from './components/BlockDetail';
export default {
  name: 'BlockInfo',
  components: { BlockDetail },
  data() {
    return {
      form: {
        height: 0,
        id: '',
        parent_id: '',
        next_id: '',
        time: 0
      }
    };
  },
  computed: {
    blockId() {
      return this.$route.params.blockId || '';
    },
    column() {
      return [
        {
          label: 'Height',
          render: (h, form) => <div class='block-height-cell'>
              <span class='block-height'>{form.height}</span>
              <i class='iconfont icon-fanye2' onClick={this.prevBlock}></i>
              <i class='iconfont icon-fanye1' onClick={this.prevBlock}></i>
            </div>
        },
        {
          prop: 'id',
          label: 'ID'
        },
        {
          prop: 'parent_id',
          label: 'Parent ID'
        },
        {
          prop: 'next_id',
          label: 'Next ID'
        },
        {
          prop: 'time',
          label: 'Timestamp',
          render: (h, form) => <div class='timestamp'>
              <i class='iconfont icon-shijian_o'></i>
              <span>{this.$dayjs(form.time).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
        }
      ];
    }
  },
  mounted() {
    this.form = {
      height: 18826435,
      id: '0xfa242d67c037f56b0f917d99d6d8311bd08045eeed3a30336ea350a9dc2e8c38',
      parent_id: '0x81c34c41e5aba77a9fc7f7c339a1147c623c33f2d8e4e4b5bf675c6e788278ee7',
      next_id: '0x81c34c41e5aba77a9fc7f7c339a1147c623c33f2d8e4e4b5bf675c6e78827e8e7',
      time: 1633940410000
    };
  },
  methods: {
    prevBlock() {
      console.log(this.blockId);
    },
    nextBlock() {
      console.log(this.blockId);
    }
  }
};
</script>

<style lang="scss" scoped>
.block-info {
  width: 100%;
  max-width: 1240px;
  padding: 40px 20px;
  margin: 0 auto;
  .title {
    font-size: 36px;
    color: #333;
    font-weight: bold;
    .block-num {
      font-size: 24px;
      font-weight: 500;
      margin-left: 40px;
    }
  }
  .block-info-card {
    margin-top: 20px;
    ::v-deep {
      .el-form-item {
        margin-bottom: 0px;
        border-bottom: 1px solid #d8dfde;
      }
      .block-height-cell {
        display: flex;
        align-items: center;
        .block-height {
          font-weight: bold;
          margin-right: 4px;
        }
        .iconfont {
          margin: 0 2px;
          color: #222929;
          font-size: 22px;
          cursor: pointer;
        }
      }
      .has-link {
        color: #1161ba;
      }
      .timestamp {
        display: flex;
        align-items: center;
        .iconfont {
          margin-right: 4px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
