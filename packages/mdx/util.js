const IMPORT_REGEX = /^import/
const EXPORT_REGEX = /^export/
const EXPORT_DEFAULT_REGEX = /^export default/
const BLOCKS_REGEX = '[a-z\\.]+(\\.){0,1}[a-z\\.]'
const EMPTY_NEWLINE = '\n\n'

const toTemplateLiteral = text => {
  const escaped = text
    .replace(/`/g, '\\`') // Escape "`"" since
    .replace(/\\/g, '\\\\') // Escape all "\" to avoid unwanted escaping in text nodes

  return '{`' + escaped + '`}'
}

module.exports.EMPTY_NEWLINE = EMPTY_NEWLINE
module.exports.BLOCKS_REGEX = BLOCKS_REGEX
module.exports.isImport = text => IMPORT_REGEX.test(text)
module.exports.isExport = text => EXPORT_REGEX.test(text)
module.exports.isExportDefault = text => EXPORT_DEFAULT_REGEX.test(text)
module.exports.toTemplateLiteral = toTemplateLiteral
