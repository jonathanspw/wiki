#!/bin/bash
# description: wiki.almalinux.org content deployment tool.

set -e

npm install vuepress-plugin-matomo || yarn add vuepress-plugin-matomo
npm run docs:build || yarn run docs:build || yarnpkg run docs:build

pushd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jonathanspw/wiki.git master:gh-pages

popd
