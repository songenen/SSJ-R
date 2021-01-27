#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:songenn/ssj-website-r.git &&
git push -u origin master -f &&
cd -