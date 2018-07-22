/**
 * homebrew - installs homebrew along with packages and casks
 * @license MIT
 * @author jh3y
 */
const { info } = console
const HOMEBREW_URL =
  'https://raw.githubusercontent.com/Homebrew/install/master/install'
const task = {
  name: 'Homebrew',
  description: 'Install and set up Homebrew',
  exec: function(resolve, reject, shell, config, log) {
    const { brew_installs: packages, brew_casks: casks } = config
    const brewInstalled = shell.which('brew') !== null
    if (!brewInstalled) {
      try {
        info(log('Installing Homebrew'))
        const result = shell.exec(`ruby -e "$(curl -fsSL ${PROPS.URL})"`)
        if (result.code !== 0) throw new Error(result.stderr)
        else info(log('Homebrew installed'))
      } catch (err) {
        throw new Error(err)
      }
    } else info(log('Homebrew already installed'))

    info(log('Running brew doctor'))
    shell.exec('brew doctor')
    info(
      log(
        `NOTE: Any info from brew doctor may account for any issues with package installs`
      )
    )

    if (packages && packages.length > 0) {
      info(log('Installing packages'))
      shell.exec(`brew install ${packages.join(' ')}`)
      info(log('Brew packages installed'))
    } else {
      info(log('No brew packages to install'))
    }
    if (casks && casks.length > 0) {
      info(log('Installing casks'))
      shell.exec(`brew cask install ${casks.join(' ')}`)
      info(log('Brew casks installed'))
    } else {
      info(log('No brew casks to install'))
    }
    resolve()
  },
}

module.exports = task
