import escape from 'lodash/escape'

export function registerLanguage(lang, content) {
  return {
    cls: ['language-' + lang],
    lang: lang,
    content: escape(content)
  }
}
