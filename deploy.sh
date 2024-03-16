#!/bin/bash
# description: wiki.almalinux.org content deployment tool.

set -e

npm install -D vuepress-plugin-matomo || yarn add -D vuepress-plugin-matomo
npm run docs:build || yarn run docs:build || yarnpkg run docs:build

pushd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AlmaLinux/wiki.git master:gh-pages

popd
