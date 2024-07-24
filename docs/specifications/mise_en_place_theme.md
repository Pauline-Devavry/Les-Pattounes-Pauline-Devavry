# Mise en place du thème

L'objectif de cette US et d'avoir thème prêt pour l'intégration des templates de tes pages.

## à faire

- Créer le fichier "point d'entrée" : `style.css` (il importera tous les autres fichier `*.css`)
- Importer le fichier `style.css` dans le  `index.html`
> Il possède peut être un autre nom, mais en gros il faut importer
ce fichier CSS dans le template "point d'entrée" du site afin de commencer le theming. Ce template `index.html` n'est
évidemment pas définitif et ne sera peut être pas utilisé par la suite, mais il doit juste te permettre de styliser tes
éléments à ce stade.
- Créer un fichier `global.css`, et l'importer dans le `style.css`. Ce fichier devra contenir les règles CSS de tes éléments "bruts" :
```
body {
    // Couleur de fond de ton site
    // Taille de base la police de ton site
}

h1, h2, h3, h4, h5, h6 {
    // Style de tes titres
}

a {
    // Style de tes liens
}

ul, ol {
    // Style de tes listes
}

li {
    // Style de tes éléments de liste
}

img {
    // Style de tes images, en général on met ça pour avoir des images responsives sans ne rien avoir à faire :
    width: 100%;
    height: auto;
}
```

- Créer le fichier `header.css`, vide dans un premier temps (il sera à remplir à l'étape de création du header)
- Importer `header.css` dans `style.css`
- Créer le fichier `footer.css`, vide dans un premier temps (il sera à remplir à l'étape de création du footer)
- Importer `footer.css` dans `style.css`

---

Pense à mettre à jour ton état d'avancement sur cette tâche dans le README.md :)