# 📜 Générateur de Citations

Un générateur de citations inspirantes avec une interface élégante et moderne. Le projet utilise des APIs externes pour récupérer des citations aléatoires en temps réel.

<img width="750" height="404" alt="image2" src="https://github.com/user-attachments/assets/a9cf1dcc-57ff-43f7-b752-e3deb535e437" />
<img width="922" height="497" alt="image1" src="https://github.com/user-attachments/assets/a1fd36b8-e6d5-4ded-a847-57ce3df3ecb0" />


## 🎯 Fonctionnalités

- ✨ **Citations aléatoires** : Récupération de citations inspirantes depuis plusieurs APIs
- 🔄 **Système de secours** : Bascule automatique entre différentes APIs en cas d'erreur
- 🎨 **Interface élégante** : Design moderne avec animations fluides
- 📱 **Responsive** : S'adapte parfaitement à tous les écrans (mobile, tablette, desktop)
- ⚡ **Performance optimale** : Chargement rapide et gestion intelligente des erreurs
- 🔁 **Rotation automatique** : Le système mémorise quelle API fonctionne

## 🖼️ Aperçu

Le générateur affiche :
- Une citation inspirante avec guillemets décoratifs
- Le nom de l'auteur de la citation
- Un bouton pour générer une nouvelle citation
- Des animations de chargement élégantes

## 🚀 Démarrage rapide

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Une connexion internet (pour récupérer les citations depuis les APIs)

### Structure des fichiers
```
generateur-citations/
│
├── index.html       # Structure HTML
├── style.css        # Styles et animations
├── script.js        # Logique JavaScript et appels API
└── README.md        # Documentation
```


## 🔧 APIs utilisées

Le projet utilise plusieurs APIs avec un système de secours :

| API | URL | Format |
|-----|-----|--------|
| **DummyJSON** | `https://dummyjson.com/quotes/random` | `{ quote, author }` |
| **Quotable** | `https://api.quotable.io/random` | `{ content, author }` |

### Comment ça fonctionne ?

```javascript
// Le système essaie la première API
1. API DummyJSON → ✅ Succès → Affiche la citation
                 → ❌ Échec → Essaie l'API suivante

// Si la première échoue
2. API Quotable → ✅ Succès → Affiche la citation
                → ❌ Échec → Message d'erreur
```



## 📦 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Flexbox, animations, transitions
- **JavaScript ES6+** : Async/await, fetch API, arrow functions
- **APIs REST** : DummyJSON, Quotable


### Idées d'améliorations

- [ ] Ajouter un bouton pour partager sur les réseaux sociaux
- [ ] Permettre de filtrer par catégorie (motivation, amour, succès...)
- [ ] Ajouter un système de favoris
- [ ] Mode sombre / clair
- [ ] Traduction des citations en français
- [ ] Animations plus élaborées
- [ ] Historique des citations affichées

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**ADJI AHOLIA WILFRIED CHEREL**

## 🙏 Remerciements

- [DummyJSON](https://dummyjson.com/) pour leur API gratuite
- [Quotable](https://quotable.io/) pour leur excellente API de citations
- La communauté open source pour l'inspiration

## 📝 Notes de version

### Version 1.0.0 (2023)
- 🎉 Version initiale
- ✨ Système multi-API avec rotation automatique
- 🎨 Interface responsive et élégante
- ⚡ Gestion d'erreurs robuste

---

**⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile !**

**Bon coding ! 🚀**
