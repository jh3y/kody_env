/**
 * OSX defaults - set system wide OSX defaults
 * @license MIT
 * @author jh3y
 */
const { info } = console
const task = {
  name: 'OSX defaults',
  description: 'sets system wide OSX defaults',
  exec: (resolve, reject, shell, config, log) => {
    if (config.osx_script) {
      info(log('Setting OSX Defaults'))
      shell.exec(`sh ./${config.osx_script}`)
      info(log('OSX defaults set', '#FFFFFF', '#2eec71'))
    } else {
      reject(new Error('OSX defaults script not found'))
    }
    resolve()
  },
}

module.exports = task
