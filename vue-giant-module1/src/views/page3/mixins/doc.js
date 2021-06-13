import escape from 'lodash/escape'

/**
 * 注册一个language
 * @param lang
 * @param content
 * @returns {{cls: string[], lang, content}}
 */
function registerLanguage(lang, content) {
  return {
    cls: ['language-' + lang],
    lang: lang,
    content: escape(content)
  }
}

export const docMixin = {
  data() {
    return {
      doc: {
        basicColumn: [
          {label: '参数', prop: 'prop'},
          {label: '说明', prop: 'desc', minWidth: 150},
          {label: '类型', prop: 'type'}
        ],
        tableData: [
          {
            prop: 'label-key',
            desc: 'el-option label 的 key',
            type: 'string'
          },
          {
            prop: 'value-key',
            desc: 'el-option value 的 key',
            type: 'string'
          },
          {
            prop: 'request-method',
            desc: '远程搜索方法',
            type: 'function'
          }
        ],
        remoteSelect: [
          registerLanguage('html', `<RemoteOptions
:request-method="myRequestMethod"
label-key="name"
value-key="id"
></RemoteOptions>`)
        ]
      }
    }
  }
}
