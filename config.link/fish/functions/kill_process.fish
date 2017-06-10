function kill_process --description 'kills all processes containing given name'
  kill (ps -e | grep $argv | awk '{print $1}')
end
