# Country Explorer App

---

## Application de Géolocalisation - Test Technique React

Bienvenue sur le dépôt GitHub de **Country Explorer App** ! Ce projet est une application web interactive développée avec **React** (TypeScript) dans le cadre d'un test technique. Elle permet aux utilisateurs de parcourir, rechercher et visualiser des informations sur les pays du monde.

### Fonctionnalités Principales

- **Affichage des Pays :** Récupère et affiche une liste complète de tous les pays du monde via l'API [RestCountries v3.1](https://restcountries.com/).

- **Recherche Intuitive :** Filtre les pays en temps réel par leur **nom** (commun ou officiel) ou par leur **capitale**.

- **Deux Vues au Choix :**

  - **Vue Liste (Cards) :** Présente les pays sous forme de cartes, affichant le drapeau, le nom, la capitale, la région et la population.

  - **Vue Carte (Map) :** Affiche une carte interactive basée sur [leaflet](https://leafletjs.com/) et [react-leaflet](https://react-leaflet.js.org/), avec des marqueurs pour chaque pays.

- **Détails du Pays :** Un clic sur une carte ou un marqueur de carte affiche une vue détaillée du pays sélectionné.

- **Pagination :**

### Démarrer le Projet en Local

Suivez ces étapes pour configurer et exécuter l'application sur votre machine locale :

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/Herimanjaka007/country-explorer.git country-explorer
    cd country-explorer
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    ```

3.  **Lancer l'application en mode développement :**

    ```bash
    npm run dev
    ```

4.  **Construire pour la production (build) :**
    ```bash
    npm run build
    ```

### 🛠 Technologies Utilisées

- **React**

- **TypeScript**

- **Vite**

- **Tailwind CSS**

- **Leaflet** & **React-Leaflet**

- **RestCountries API** (pour les données des pays)

---

### Auteur

[Herimanjaka](https://github.com/Herimanjaka007)

---
