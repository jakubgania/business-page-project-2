npm run generate

cd dist

echo "okna-system-serwis.pl" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jakubgania/business-page-project-2.git master:gh-pages

cd ..
