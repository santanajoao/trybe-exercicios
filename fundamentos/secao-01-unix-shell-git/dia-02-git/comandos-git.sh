#!/bin/bash

# Preparações para o exercício

mkdir ~/repositorio-exercicio-git-trybe
cd ~/repositorio-exercicio-git-trybe
git init
# cria um repositório git em uma pasta no diretório home

touch README.md

git add .
git commit -m 'cria o README'

git checkout -b atualizacoes-readme

echo '# Título do README' >> README.md

git add .
git commit -m 'atualiza o README'

git checkout main

git merge atualizacoes-readme

# Exercícios

git branch atualiza-readme

git checkout atualiza-readme
touch infos.txt

git add .
git commit -m 'cria o arquivo infos.txt'

echo 'João Costa' >> infos.txt

git add .
git commit -m 'adiciona conteúdo ao arquivo infos.txt'

git branch adiciona-infos

git checkout adiciona-infos
echo '## Versionamento

É o processo de criar novas versões ao decorrer das alterações no código. O versionamento é importante para garantir a segurança ao fazer alterações, já que caso algum problema ocorra é possível voltar em uma versão anterior do código.

## Como versionar

Para versionar um projeto é necessário utilizar uma ferramenta de versionamento de código, como o `git`

No diretório desejado execute o comando `git init` para iniciar um repositório git

A partir daí é possível criar branches (ramificações) apartir da branch principal com:

```
# cria a branch
git branch nome-da-branch

# move para a branch
git checkout nome-da-branch
```

ou

```
# um comando que faz o mesmo que os dois anteriores
git checkout -b nome da branch
```

A partir daí é só fazer suas alterações sem medo de perder a versão original, já que você está modificando apenas uma "cópia"

Após terminar as alterações:

```
git add . ou arquivos-que-deseja-adicionar
git commit -m "mensagem que descreve o que foi feito"
```

Para aplicar as alterações à versão original:

```
# vá para a branch principal
git checkout main

# faça o merge das alterações
git merge nome-da-branch-com-as-alterações-desejadas
```
' >> README.md

git add .
git commit -m 'adiciona as informações no README'

git checkout atualiza-readme
git merge adiciona-infos

git checkout main
git merge atualiza-readme
