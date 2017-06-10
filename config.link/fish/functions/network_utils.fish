function network_utils --description 'load network functions'
end

function turn_ethernet_on --description 'turn ethernet connection on'
  sudo ifconfig en0 up
end

function turn_ethernet_off --description 'turn ethernet connection off'
  sudo ifconfig en0 down
end

function turn_wifi_on --description 'turn wifi connection on'
  sudo ifconfig en1 up
end

function turn_wifi_off --description 'turn wifi connection off'
  sudo ifconfig en1 down
end
