#A call to this empty function within config.fish will load other aliases in the file.
function bower_utils --description 'load utils'
end

function bower_firewall_on --description 'make bower usable behind firewall'
  git config --global url."https://".insteadOf git://
end

function bower_firewall_off --description 'turn off bower firewall settings'
  git config --global --remove-section url."https://"
end
