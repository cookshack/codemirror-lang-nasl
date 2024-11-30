import * as Grammar from './syntax.grammar'
import { LRLanguage, LanguageSupport, indentNodeProp, continuedIndent, delimitedIndent, foldNodeProp, foldInside } from '@codemirror/language'
import { completeFromList, ifNotIn } from '@codemirror/autocomplete'

let props, data, parser, keywords, skipComplete, completionSource

keywords = [ 'break', 'continue', 'else', 'for', 'foreach', 'function', 'global_var', 'if', 'include',
             'local_var', 'repeat', 'return', 'until', 'while', 'x' ]

skipComplete = [ 'Comment', 'String' ]

completionSource = ifNotIn(skipComplete,
                           completeFromList(keywords.map(kw => ({ label: kw, type: 'keyword' }))))

props = [ indentNodeProp.add({ 'Block': delimitedIndent({ closing: '}' }),
                               'ArgDecl ForExpr IncExpr ArgList': delimitedIndent({ closing: ')',
                                                                                    align: true }),
                               IfBlock: continuedIndent({ except: /^\s*({|else\b)/ }),
                               WhileLoop: continuedIndent() }),
          foldNodeProp.add({ 'Block ArgDecl ArgList': foldInside }) ]

data = { commentTokens: { line: '#' },
         closeBrackets: { brackets: [ '(', '[', '{', "'", '"' ] },
         indentOnInput: /^\s*(?:\{|\})$/ }

parser = Grammar.parser.configure({ props: props })

/// A language provider for NASL, including highlighting and indentation
/// information.
export
const lr = LRLanguage.define({ name: 'NASL',
                               parser: parser,
                               languageData: data })

/// Language support for NASL.
export
function language
() {
  return new LanguageSupport(lr,
                             [ lr.data.of({ autocomplete: completionSource }) ])
}
