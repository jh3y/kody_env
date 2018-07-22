/**
 * npm installs - installs desired global modules
 * @license MIT
 * @author jh3y
 */
const { error, info, warn } = console
const PROPS = {
  ERROR_MSG: 'npm is not installed',
  WARN: 'NOTE: incorrect npm permissions may cause an error.',
  FIX_URL: 'https://docs.npmjs.com/getting-started/fixing-npm-permissions',
}
const task = {
  name: 'npm installs',
  description: 'installs desired global modules',
  exec: function(resolve, reject, shell, config, log) {
    const npmInstalled = shell.which('npm') !== null
    const modules = config.npm_list
    if (npmInstalled && modules && modules.length) {
      warn(log(`${PROPS.WARN} See: ${PROPS.FIX_URL}`, '#FFFFFF', '#f6990e'))
      for (const module of modules) {
        info(log(`attempting to install ${module}`))
        shell.exec(`npm i -g ${module}`)
      }
    } else {
      reject(new Error(PROPS.ERROR_MSG))
    }
    resolve()
  },
}

module.exports = task
