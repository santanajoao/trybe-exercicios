#!/bin/bash

rm -rf ./unix_tests/
mkdir unix_tests
cd unix_tests/

touch trybe.txt

cp trybe.txt trybe_backup.txt

mv trybe.txt trybe_original.txt

mkdir backup

mv trybe_backup.txt backup/

mkdir backup2

mv backup/trybe_backup.txt backup2/

rmdir backup

mv backup2/ backup

pwd

rm -rf backup/

echo -e 'Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL' > skills.txt
head -5 skills.txt

tail -4 skills.txt

rm ./*.txt
