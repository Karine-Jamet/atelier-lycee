# atelier-lycee

Etape 1: Structure
</br>
Doctype html head meta body title link(css) link(js)

Etape 2 : Organisation
</br>
Créer une section dans laquelle sera le jeu
</br>
Mettre un titre(h1)/consigne(p)
</br>
Créer un espace avec une div pour l'ordinateur
</br>
Créer un espace avec une div pour les boutons
</br>
Mettre des class pour le css aux div
</br>

Etape 3: Récupération
</br>
Utilisation des icones sur fontawesome
</br>
Mettre les icones dans chaque div
</br>

Etape 4: Style
</br>
Ajouter du style dans le fichier css
</br>
Mettre un background de couleur au body
</br>
Centrer la section
</br>
Donner une largeur (width) et une hauteur (height)
</br>
Donner une couleur au titre/contenu
</br>
Chercher une font( dafont/googlefont)
</br>
Installer la font
</br>
Grossir la taille des icones
</br>
Rendre invisible les icones
</br>
Mettre un border aux div
</br>
Mettre des hover
</br>

Sauvegarder et afficher via le navigateur
</br>

Etape 5: Javascript
</br>
Maintenant nous allons coder notre jeu, le choix du joueur, le choix de l'ordinateur, gérer les différents cas. (qui gagne, égalité...etc ). Pour réaliser cela nous utiliserons une librairie javascript très répendue JQuery, qui nous permettra d'alléger notre code.
</br>
Le but de javascript est de dynamiser notre page html, nous utiliserons pour cela les classes CSS affectées à nos balises html.
</br>
Par convention, et pour une meilleure fonctionnalitée, nous insèrerons notre script dans un $(document).ready.
</br>
$(document).ready(function(){
  // oncodera l'ensemble de notre jeu dans cette fonction.
}
</br>
Pour commencer nous allons créer notre fichier script.js et le lier à notre page html.
Pour cela nous utiliserons l'attribut src de notre balise <script> : <script src="script.js">.
</br>

Etape 6: Le joueur clique
</br>
La seule action du joueur est de sélectionner avec sa souris l'une des trois propositions (pierre, feuille ou ciseaux). Nous devons maintenant coder cette action.
</br>
$("classeIcone").on("click", function(){
  // on codera l'ensemble des conséquences du click du joueur dans cette fonction.
}
</br>
Etape 7: Choix de l'ordi
</br>
Le choix de l'ordi reste une conséquence de l'action de click du joueur, nous continuons de coder dans notre fonction .on("click").
</br>
Si on récapitule, on doit se retrouver avec :</br>

$(document).ready(function(){
  $("classeIcone").on("click", function(){
    // Création d'une variable choix de l'ordinateur
  }
}
</br>
Comme expliqué ci-dessus, nous allons stocker le choix de l'ordinateur dans une variable et lui affecter une valeur (exemple: var choixOrdi = ...).
</br>
Le choix de l'ordinateur doit être une valeur aléatoire. Nous devons alors lui affecter une valeur comprise entre 1 et 3 et cela générée de manière aléatoire.
</br>
Petit indice --> Les fonctions Math.floor() et Math.random() peuvent nous être très utile à cette étape.
</br>

Etape 8: Affichage du choix de l'ordinateur
</br>
Pour cela nous devons créer une classe CSS qui nous permettra, de créer l'effet voulu. Cette classe sera ajoutée à l'icone correspondant au choix de l'ordinateur.
</br>
Indice --> $(".ordinateur > .fa:nth-child("+ordiChoix+")").addClass("nouvelleClasse");
</br>

Etape 9: Conditions pour interpréter tous les résultats possibles
</br>Structure de la condition if</br>
if (condition1)
   instruction1
else if (condition2)
   instruction2
else if (condition3)
   instruction3
...
else
   instructionN
</br>
Dans cette partie nous allons gérer tous les cas, égalité, qui gagne ... etc.
</br>

Etape 10: Score
</br>
