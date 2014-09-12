#!/bin/sh

if [ `which apt-get 2>/dev/null` ]; then
  echo "install regis first, need to sudo"
  sudo npm install share@"<0.7"
  sudo npm install connect@"<2.0.0"
  sudo npm install -g redis
elif [ `which pacman 2>/dev/null` ]; then
  echo "TBD - add support for Arch Linux"
elif [ `which brew 2>/dev/null` ]; then
  if [ "$(whoami)" == "root" ]; then
    echo "Sorry, you are root. Don't ever 'sudo brew ...'"
    exit 1
  fi
  brew install node
  brew install redis
  npm install share@"<0.7"
  npm install connect@"<2.0.0"
  npm install -g redis
elif [ `which port 2>/dev/null` ]; then
  echo "TBD - add support for Macports"
else
  echo "ERROR - your system is unknown to us"
fi
