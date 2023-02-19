#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:zlz9/zlz9.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>     https://zlz9.github.io/gh-pages
git push -f git@github.com:zlz9/docs.git master:gh-pages

cd -
