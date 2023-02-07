# Remede Agency

Remede Agency, est une agence spécialisée dans le développement d'applications web. L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.

## Projet Argent Bank

En tant que développeur Front-End, je suis affecté à ce projet pour Argent Bank, une nouvelle banque en démarrage qui a besoin d'aide pour mettre en place son application. Le projet se décompose en deux parties :

1. **Phase 1 : Authentification des utilisateurs** - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
2. **Phase 2 : Transactions** - Spécification des endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.


## Phase 1 : Authentification des utilisateurs

L'objectif est de créer une application web complète et responsive avec React et utiliser Redux pour gérer le state de l'ensemble de l'application. Voici les fonctionnalités que l'application doit inclure :

1. L'utilisateur peut visiter la page d'accueil
2. L'utilisateur peut se connecter au système
3. L'utilisateur peut se déconnecter du système
4. L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
5. L'utilisateur peut modifier le profil et conserver les données dans la base de données.

Vous pouvez commencer par forker notre repo existant et suivre l’avancement du travail grâce aux modèles d’Issues GitHub que nous y avons incluses.

## Phase 2 : Transactions

Nous sommes encore en phase de conception pour la phase 2 : Transactions. La fonctionnalité de transactions doit permettre aux utilisateurs de visualiser toutes leurs transactions pour le mois en cours.

## Documentation et ressources

La documentation Swagger pour les API créées par les ingénieurs back-end se trouve dans le repo.

# Installation

Pour l'exécution de ce projet, il est nécessaire de posséder les logiciels suivants :
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

## Installation des dépendances

Pour installer les dépendances de modules exécutés par Node.js nécessaires aux 2 répertoires sous-jacents : "**Front-End**" et "**Back-End**"

### Front-End

1. Ouvrir un nouveau terminal
2. Se rendre dans le dossier Front-End à l'aide de la commande : ``` cd ./client```
3. Exécuter la commande ``` npm install``` pour installer les dépendances nécessaires
4. Enfin lancer le serveur local avec la commande ``` npm start```

### Back-End

1. Pour commencer, il faut ouvrir un autre terminal, en second du precedent
2. Une fois ouvert, il est nécessaire de se déplacer dans le dossier : ``` cd ./server```
3. Exécuter la commande ``` npm install``` pour installer les dépendances nécessaires
4. Lors de la première exécution, il est important de populer la base de données Mongo ``` npm run populate-db```
5. Si l'étape 4, a été réalisée avec succès, il ne manque plus qu'à lancer le serveur Back à l'aide de ``` npm run dev:server```

