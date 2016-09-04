#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
git checkout master
npm run gulp
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi
git add .
git remote add deployment https://$USER:$PASSWORD@github.com/$TRAVIS_REPO_SLUG.git
git config user.name "Travis CI"
git commit -m "Travis CI $TRAVIS_COMMIT"
git push -u deployment master
