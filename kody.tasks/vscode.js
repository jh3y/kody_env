/**
 * Visual Studio Code setup
 * @license MIT
 * @author jh3y
 */
const { info } = console
const cwd = process.cwd()
const task = {
  name: 'vscode',
  description:
    'installs extensions and symlinks settings for Visual Studio Code',
  exec: (resolve, reject, shell, config, log) => {
    const { code_extensions: extensions } = config
    const codeInstalled = shell.which('code') !== null
    const symLinkSettings = () => {
      const $HOME = shell.exec('echo $HOME', { silent: true }).trim()
      info(log('Symlinking Visual Studio Code settings & snippets'))
      const settings = `${cwd}/vscode/settings.json`
      const snippets = `${cwd}/vscode/snippets/`
      // Where to link settings file to is documented under https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations
      const vsBase = `${$HOME}/Library/Application Support/Code/User`
      info(log(`Linking ${settings} to ${vsBase}/settings.json`))
      shell.ln('-sf', settings, `${vsBase}/settings.json`)
      info(log(`Linking ${snippets} to ${vsBase}/snippets`))
      shell.ln('-sf', snippets, `${vsBase}/snippets`)
      info(log('Visual Studio Code settings linked', '#FFFFFF', '#26a65b'))
    }

    if (!codeInstalled) {
      reject(new Error('Visual Studio Code is not installed'))
    }
    if (extensions && extensions.length) {
      for (let e of extensions) {
        shell.exec(`code --install-extension ${e}`)
      }
    } else {
      info(log('No vscode extensions to install'))
    }
    symLinkSettings()
    resolve()
  },
}

module.exports = task
