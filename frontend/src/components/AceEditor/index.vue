<template>
  <ace
    ref="editor"
    class="ace-editor"
    :value="content"
    :lang="lang"
    :height="height === 0 ? '100%' : height"
    :theme="theme"
    :options="options"
    width="100%"
    v-bind="config"
    @init="initEditor"
  />
</template>

<script>
import ace from 'vue2-ace-editor';
export default {
  name: 'AceEditor',
  components: { ace },
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'chrome'
    },
    lang: {
      type: String,
      default: 'rust'
    },
    config: {
      type: Object,
      default: () => ({ font_size: 16 })
    }
  },
  computed: {
    options() {
      if (this.readOnly) {
        return {
          enableBasicAutocompletion: false,
          enableSnippets: false,
          enableLiveAutocompletion: false,
          showPrintMargin: false,
          fontSize: this.config.font_size,
          readOnly: true,
          maxLines: this.config.maxLines
        };
      }
      return {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        showPrintMargin: false,
        fontSize: this.config.font_size
      };
    }
  },
  created() {
  },
  methods: {
    initEditor(editor) {
      require('brace/ext/language_tools');
      // 设置语言
      require('brace/mode/rust');
      require('brace/snippets/rust');
      // 设置主题 按需加载
      require('brace/theme/chrome');
      // 监听值的变化
      editor.getSession().on('change', val => {
        this.$emit('change', editor.getValue());
      });
    }
  }
};
</script>
