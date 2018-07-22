/**
 * set fish shell - set fish shell as default shell
 * @license MIT
 * @author jh3y
 */
const { error, info } = console
const task = {
  name: 'fish',
  description: 'set fish shell as default shell',
  exec: function(resolve, reject, shell, config, log) {
    console.info(config)
    if (config.fish_script) {
      shell.exec(`sh ./${config.fish_script}`)
      info(log('fish shell set as default', '#FFFFFF', '#2eec71'))
    } else {
      reject(new Error('fish shell script not found'))
    }
    resolve()
  },
}

module.exports = task
