import { styleTags, tags as t } from '@lezer/highlight'

export const highlighting = styleTags({
  'function local_var global_var': t.definitionKeyword,
  'if else for while repeat until foreach return break continue x': t.controlKeyword,
  'include': t.moduleKeyword,
  'Identifier': t.variableName,
  'ArgDecl/Identifier': t.definition(t.variableName),
  'FuncDecl/Identifier': t.function(t.definition(t.variableName)),

  ArithOp: t.arithmeticOperator,
  LogicOp: t.logicOperator,
  BitwiseOp: t.bitwiseOperator,
  CompareOp: t.compareOperator,
  AssignOp: t.definitionOperator,
  UpdateOp: t.updateOperator,
  Comment: t.lineComment,
  Integer: t.number,
  String: t.string,
  '( )': t.paren,
  '[ ]': t.squareBracket,
  '{ }': t.brace,
  ', ;': t.separator
})
