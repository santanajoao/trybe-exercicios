#!/bin/bash

rm -rf ./unix_tests_skills/

mkdir unix_tests_skills
cd unix_tests_skills

echo 'Internet
Unix
Bash' > skills2.txt

echo 'React
JavaScript
HTML
CSS
React Testing Library' >> skills2.txt

sort skills2.txt

wc -l skills2.txt

sort skills2.txt | head -3 > top_skills.txt

echo 'Carry on, carry on as if nothing really matters
Oh, take your time, don t live too fast
All we got was bruised
Cause love can only heal
Still shining bright' > phrases2.txt

grep br phrases2.txt | wc -l

grep -v br phrases2.txt | wc -l

echo 'Brasil
Japão' >> phrases2.txt

cat phrases2.txt ../unix_tests_search/countries.txt > bunch_of_things.txt

sort bunch_of_things.txt -o bunch_of_things.txt
