#set -g -x PATH /usr/local/bin $PATH
#
#set -gx RBENV_ROOT /usr/local/var/rbenv
#. (rbenv init -|psub)
#
#status --is-interactive; and . (rbenv init -|psub)

git_aliases

bower_utils

project_utils

network_utils

function fish_greeting --description 'fish entry greeting'
  echo Hey\ \e\[32mjh3y\e\[30m\e\(B\e\[m\, \n time\ to\ write\ some\ code!
end
