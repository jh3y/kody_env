/**
 * Install and set up oh-my-zsh
 * @license MIT
 * @author jh3y
 */
const INSTALL_SCRIPT =
  'https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh'
const task = {
  name: 'zsh',
  description: 'set up oh-my-zsh',
  exec: (resolve, reject, shell, config, log) => {
    shell.exec('chsh -s $(which zsh)')
    shell.exec(`sh -c "$(curl -fsSL ${INSTALL_SCRIPT})"`)
    resolve()
  },
}
module.exports = task
