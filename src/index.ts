export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Replace require statements
  root.find(j.VariableDeclarator, { id: { name: 'HtmlWebpackTagsPlugin' } })
    .forEach(path => {
      if (j.CallExpression.check(path.node.init) && j.Literal.check(path.node.init.arguments[0]) && path.node.init.arguments[0].value === 'html-webpack-tags-plugin') {
        path.node.id.name = 'HtmlRspackTagsPlugin';
        path.node.init.arguments[0].value = 'html-rspack-tags-plugin';
        dirtyFlag = true;
      }
    });

  root.find(j.VariableDeclarator, { id: { name: 'HtmlWebpackPlugin' } })
    .forEach(path => {
      if (j.CallExpression.check(path.node.init) && j.Literal.check(path.node.init.arguments[0]) && path.node.init.arguments[0].value === 'html-webpack-plugin') {
        path.node.id.name = 'rspack';
        path.node.init.arguments[0].value = '@rspack/core';
        dirtyFlag = true;
      }
    });

  // Replace plugin instantiations
  root.find(j.NewExpression, { callee: { name: 'HtmlWebpackPlugin' } })
    .forEach(path => {
      path.node.callee = j.memberExpression(j.identifier('rspack'), j.identifier('HtmlRspackPlugin'));
      dirtyFlag = true;
    });

  root.find(j.NewExpression, { callee: { name: 'HtmlWebpackTagsPlugin' } })
    .forEach(path => {
      path.node.callee = j.identifier('HtmlRspackTagsPlugin');
      dirtyFlag = true;
    });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";