/**
  * Visual Studio Code setup
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'vscode setup',
  description:
    'installs extensions and symlinks settings for Visual Studio Code',
  exec: function(resolve, reject, shell, log, config) {
    const codeWhich = shell.exec('which code', { silent: true })
    const installation = argument => {
      return new Promise((resolve, reject) => {
        shell.exec(argument, () => resolve())
      })
    }
    const symLinkSettings = () => {
      const $HOME = shell.exec('echo $HOME', { silent: true }).output.trim()
      return new Promise(resolve => {
        log.info('symlinking Visual Studio Code settings.json')
        const source = `${process.cwd()}/vscode/settings.json`
        // Where to link settings file to is documented under https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations
        const destination = `${$HOME}/Library/Application Support/Code/User/settings.json`
        log.info(`Linking ${source} to ${destination}`)
        shell.ln('-sf', source, destination)
        log.info('Visual Studio Code settings linked')
      })
    }
    if (codeWhich.output.trim() !== '')
      if (config.codeExtensions.length > 0) {
        log.info(`Installing extensions for Visual Studio Code`)
        const extInstallations = []
        for (const ext of config.codeExtensions) {
          extInstallations.push(installation(`code --install-extension ${ext}`))
        }
        Promise.all(extInstallations).then(() => {
          log.success('Visual Studio Code extensions installed')
          symLinkSettings()
          resolve()
        })
      } else {
        log.info('no extensions to install')
        symLinkSettings()
        resolve()
      }
    else {
      log.error('Visual Studio Code not installed')
      reject()
    }
  },
}

exports.options = options
