const texteElement = document.getElementById('texte');
const auteurElement = document.getElementById('auteur');
const boutonNouvelleCitation = document.getElementById('nouvelle-citation');
const conteneur = document.querySelector('.conteneur-citation');

// Liste d'APIs de secours
const APIS = [
    {
        url: 'https://dummyjson.com/quotes/random',
        texte: 'quote',
        auteur: 'author'
    },
    {
        url: 'https://api.quotable.io/random',
        texte: 'content',
        auteur: 'author'
    }
];

let apiActuelle = 0;

async function obtenirCitation() {
    try {
        conteneur.classList.add('chargement');
        boutonNouvelleCitation.disabled = true;
        boutonNouvelleCitation.textContent = 'Chargement...';
        
        const api = APIS[apiActuelle];
        const reponse = await fetch(api.url);
        
        if (!reponse.ok) {
            throw new Error('Erreur API');
        }
        
        const donnees = await reponse.json();
        
        texteElement.textContent = donnees[api.texte];
        auteurElement.textContent = donnees[api.auteur];
        
    } catch (erreur) {
        console.error('Erreur:', erreur);
        
        // Essaie l'API suivante
        apiActuelle = (apiActuelle + 1) % APIS.length;
        
        // Si on a essayé toutes les APIs
        if (apiActuelle === 0) {
            texteElement.textContent = 'Toutes les APIs sont indisponibles. Veuillez réessayer plus tard.';
            auteurElement.textContent = '';
        } else {
            // Réessaie avec la prochaine API
            obtenirCitation();
        }
    } finally {
        conteneur.classList.remove('chargement');
        boutonNouvelleCitation.disabled = false;
        boutonNouvelleCitation.textContent = 'Nouvelle citation';
    }
}

boutonNouvelleCitation.addEventListener('click', obtenirCitation);
obtenirCitation();