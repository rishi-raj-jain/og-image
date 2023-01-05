const { join } = require('path')
const { DeploymentBuilder } = require('@layer0/core/deploy')

const appDir = process.cwd()

module.exports = async function build({}) {
  const builder = new DeploymentBuilder()
  builder.clearPreviousBuildOutput()
  await builder.exec('npm run build')
  builder.removeSync(join(appDir, '.next', 'standalone', 'node_modules', 'sharp'))
  builder.addJSAsset(join(appDir, '.next', 'standalone'), 'dist')
  builder.addJSAsset(join(appDir, '.next', 'static'), join('dist', '.next', 'static'))
  await builder.build()
}
