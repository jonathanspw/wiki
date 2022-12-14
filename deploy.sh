#!/bin/bash
# description: wiki.almalinux.org content deployment tool.

set -e

npm run docs:build || yarn run docs:build || yarnpkg run docs:build
npm install vuepress-plugin-matomo || yarn add vuepress-plugin-matomo

pushd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jonathanspw/wiki.git master:gh-pages

popd
