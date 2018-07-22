/**
 * apm installs - installs Atom IDE packages
 * @license MIT
 * @author jh3y
 */
const { error, info, warn } = console
const task = {
  name: 'apm',
  description: 'installs apm packages for Atom IDE',
  exec: function(resolve, reject, shell, config, log) {
    const { apm_packages: packages} = config
    const apmWhich = shell.exec('which apm', { silent: true })
    if (apmWhich.output.trim() !== '')
      if (packages.length > 0) {
        warn(`NOTE: package installation may fail if a
          package is already installed. If problems persist remove the
          atom packages install directory and do a fresh install`, '#FFFFFF', '#f9690e')
        const packages = packages.join(' ')
        shell.exec(`apm install ${packages}`)
        info(log('apm packages installed', '#FFFFFF', '#2eec71'))
      } else info('no packages to install')
    else error('Atom IDE not installed', '#FFFFFF', '#F22613')
    resolve()
  },
}

module.exports = task
