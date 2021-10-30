<template>
  <el-form
    ref="elForm"
    v-bind="$attrs"
    :model="model"
    :class="['titan-form', formClass]"
    :rules="rules"
    :disabled="disabled"
    v-on="$listeners"
  >
    <template v-if="layout">
      <el-row v-bind="layout">
        <el-col
          v-for="(item, idx) in column"
          :key="idx"
          :span="getColSpan(item)"
        >
          <titan-form-item
            v-if="!item.show || item.show(model, model)"
            v-bind="$attrs"
            :column="item"
            :empty-words="emptyWords"
            :form="model"
            :root-form="model"
            :label-position="labelPosition"
            :label-width="labelWidth"
            :form-rules="rules"
            :disabled="disabled"
            :merge-config="mergeConfig"
          />
        </el-col>
      </el-row>
    </template>
    <template v-else>
      <template v-for="(item, idx) in column">
        <titan-form-item
          v-if="!item.show || item.show(model, model)"
          :key="idx"
          v-bind="$attrs"
          :column="item"
          :empty-words="emptyWords"
          :form="model"
          :root-form="model"
          :label-position="labelPosition"
          :label-width="labelWidth"
          :form-rules="rules"
          :disabled="disabled"
          :merge-config="mergeConfig"
        />
      </template>
    </template>
  </el-form>
</template>

<script>
import TitanFormItem from './FormItem';

const DefaultConfig = { labelPosition: 'top' };

export default {
  name: 'TitanForm',
  components: { TitanFormItem },

  inheritAttrs: false,
  props: {
    column: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: () => ({})
    },
    labelPosition: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    layout: {
      type: Object,
      default: null
    }
  },
  computed: {
    mergeConfig() {
      return {
        ...DefaultConfig,
        ...this.$titanForm.config,
        ...this.config
      };
    },
    emptyWords() {
      return (
        this.emptyText || (this.$titanForm && this.$titanForm.emptyText) || ''
      );
    },
    formClass() {
      return this.$titanForm ? this.$titanForm.formClass : '';
    }
  },
  methods: {
    validate(cb) {
      return this.$refs.elForm.validate(cb);
    },
    validateField(props, cb) {
      return this.$refs.elForm.validateField(props, cb);
    },
    resetFields() {
      return this.$refs.elForm.resetFields();
    },
    clearValidate(props) {
      return this.$refs.elForm.clearValidate(props);
    },
    getColSpan(col) {
      const defaultSpan = Math.floor(24 / Object.keys(this.column.length));
      if (col.layout && col.layout.span) {
        return col.layout.span;
      }
      return defaultSpan;
    }
  }
};
</script>

<style scoped>
.titan-form.el-form--inline {
  display: flex;
}
.titan-form.el-form--inline ::v-deep .titan-form-item__object {
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
}
</style>
