#!/bin/bash

# Part 1. If git has not already been configured, do it now.
if ! grep --quiet github ~/.gitconfig; then
    git config --global user.name "${C9_FULLNAME}"
    git config --global user.email $C9_EMAIL
    git config --global credential.helper 'cache --timeout 5400'
    git config --global core.editor '/mnt/shared/sbin/c9 open --wait'
    git config --global credential.https://github.com.username $C9_EMAIL
fi

# Part 2. Sync with GitHub.

# This part begins by retrieving all changes to "submodules" from GitHub.
# Submodules are repos within repos. Within repos for student assignments,
# they are used to incorporate various utilities that are re-used across
# many different assignments.

# Next, this script adds all new or modified files in your "working tree"
# to the index or "staging area" of your git repository in c9.

# Next, this script commits the staged files to your c9 repository.

# If the commit succeeds, this script syncs your c9 repository with
# its clone on GitHub.com. You may be asked to enter your GitHub password.
# The sync has two steps. First, this script pulls any changes on GitHub to 
# your c9 repo. Then it pushes changes from your c9 repository to GitHub.

# If all goes well, you should see the following message.
#  On branch master
#  Your branch is up-to-date with 'origin/master'.
#  nothing to commit, working tree clean

# If you see any other message, contact your instructor for help.

cd ..

git submodule update --remote --quiet

git add --all

git commit --quiet -m 'Updates via sync script'

git pull --no-edit --quiet 

git push --quiet

git status
