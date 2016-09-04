#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
git checkout master
npm run gulp
if [[ `git status --porcelain` ]]; then
	echo "There are changes to publish!"
	git status
	exit 0
	git add .
	git remote add deployment https://${USER}:${PASSWORD}@github.com/${TRAVIS_REPO_SLUG}.git
	git config user.name "Travis CI"
	git commit -m "Travis CI $TRAVIS_COMMIT"
	git push -u deployment master
else
	echo "No changes to the output on this push; exiting."
    exit 0
fi
