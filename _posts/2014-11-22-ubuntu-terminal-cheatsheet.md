---
layout: post
title:  "Understanding Ubuntu: Terminal Cheatsheet"
date:   2014-11-22 11:25:00
categories: linux
---
###General Unix-like commands
cd – Change directory

cd .. – Go Back a directory

cd ../../ – Go back two directories

cp <source> <destination> – Copy a file

mv <source> <destination> – Move a file

rm <source> – Remove a file

mkdir <folder name> – Make a directory

rmdir <folder name> – Remove a directory

man <command> – A built in manual for a specific command

ls – List files and folders

sudo – Executes command with root permissions

sudo su – Login to root user

nano – Easy to use command-line text editor

cat <filename> – See the contents of a file

clear – Clear the current terminal display

###Ubuntu Specific Commands
sudo apt-get update – Ensures that the repositories have the latest packages available.

sudo apt-get upgrade – Upgrades installed packages

sudo apt-get install <package> – Installs an application and all it’s dependencies packages.

sudo apt-get remove <package> – Removes an application

sudo add-apt-repository <PPA address> – Adds a new Personal Package Archive

sudo apt-get autoremove – Removes any unused dependencies

sudo apt-get do-release-upgrade – Upgrades Ubuntu to a new version

###Useful commands for server packages
edit php.ini – sudo nano /etc/php5/apache2/php.ini

edit virtual hosts – sudo nano /etc/apache2/sites_available/new_config

restart apache2 server – sudo service apache2 restart
