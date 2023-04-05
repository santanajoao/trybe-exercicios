#!/bin/bash

# parte 1

rm -rf ./unix_tests_search/

mkdir unix_tests_search
cd unix_tests_search/

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

cat countries.txt

less countries.txt
# apertar "enter" para passar as páginas até encontrar "Brazil"
# apertar "q" para sair do modo de leitura

less countries.txt
# digitar "/Zambia" para buscar
# apertar "q" para sair

grep Brazil countries.txt

grep -i brazil countries.txt

echo -e 'Minha terra tem palmeiras
The world is on fire
What the fox says
Welcome to the jungle
Surrender tonigth will save tomorrow' > phrases.txt

# parte 2

grep -v fox phrases.txt

wc -w phrases.txt

wc -l phrases.txt

# parte 3

touch empty.tbt empty.pdf

ls

ls *.txt

ls *.{txt,tbt}

man ls
