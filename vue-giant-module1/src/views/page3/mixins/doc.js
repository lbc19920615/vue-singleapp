import escape from 'lodash/escape'

function registerLanguage(type, content) {
  return {
    cls: ['language-' + type],
    content: escape(content)
  }
}

export const docMixin = {
  data() {
    return {
      doc: {
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
