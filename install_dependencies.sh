#!/bin/sh

if [ `which apt-get 2>/dev/null` ]; then
  echo "install regis first, need to sudo"
  npm install share@"<0.7"
  npm install connect@"<2.0.0"
  npm install -g redis

elif [ `which pacman 2>/dev/null` ]; then
  echo "TBD - add support for Arch Linux"
elif [ `which brew 2>/dev/null` ]; then
  npm install share@"<0.7"
  npm install connect@"<2.0.0"
  brew install redis
  npm install -g redis
elif [ `which port 2>/dev/null` ]; then
  echo "TBD - add support for Macports"
else
  echo "ERROR - your system is unknown to us"
fi
