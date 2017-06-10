function wipe_me --description 'Removes login usernames on public computers. Example; Skype and Spotify usernames'
  sudo rm -rf /Library/Application\ Support/Skype /Library/Application\ Support/Spotify
  echo 'Presence deleted'
end
