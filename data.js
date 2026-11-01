/**
 * data.js - Situations d'apprentissage Bad'EPS
 * Découpage des exercices selon les 5 thèmes officiels :
 * 1. Service et placement du volant
 * 2. Amorti
 * 3. Smatch
 * 4. Dégagé
 * 5. Stratégie
 */

const situationsApprentissage = [
    // ==========================================
    // THÈME 1 : SERVICE ET PLACEMENT DU VOLANT
    // ==========================================
    // --- 1.1 LE SERVICE (Évolutions 1, 2, 3) ---
    {
        "titre": "Engagement au service",
        "theme": "Service et placement du volant",
        "sousTheme": "Service",
        "evolution": 1,
        "image_recto": "./schema-n1.png",
        "imageRecto": "./schema-n1.png",
        "but": "Maîtriser le service pour engager le point",
        "materiel": "X",
        "organisation": [
            "Joueur = A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide les points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        "regles": [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais pas réglementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        "jAiReussiSi": "Atteindre 800 points.",
        "seuil": 800
    },
    {
        "titre": "Service court",
        "theme": "Service et placement du volant",
        "sousTheme": "Service",
        "evolution": 2,
        "image_recto": "./service-n2.png",
        "imageRecto": "./service-n2.png",
        "but": "Maîtriser le service court pour faire avancer l’adversaire",
        "materiel": "Latte souple ou plot à placer à 1 grand pas de la ligne de la rivière",
        "organisation": [
            "Joueur = A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide les points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        "regles": [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais pas réglementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        "jAiReussiSi": "Atteindre 800 points.",
        "seuil": 800
    },
    {
        "titre": "Service long",
        "theme": "Service et placement du volant",
        "sousTheme": "Service",
        "evolution": 3,
        "image_recto": "./service-n3.png",
        "imageRecto": "./service-n3.png",
        "but": "Maîtriser le service long pour faire reculer l’adversaire",
        "materiel": "Latte souple ou plot à placer à 1 grand pas de la ligne intérieure du couloir de fond du terrain.",
        "organisation": [
            "Joueur = A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide les points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        "regles": [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais pas réglementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        "jAiReussiSi": "Atteindre 730 points.",
        "seuil": 730
    },

    // --- 1.2 PLACEMENT DU VOLANT (Évolutions 1, 2, 3, 4) ---
    {
        "titre": "Jouer dans la largeur",
        "theme": "Service et placement du volant",
        "sousTheme": "Placement du volant",
        "evolution": 1,
        "image_recto": "./placement-n1.png",
        "imageRecto": "./placement-n1.png",
        "but": "Varier le placement du volant sur la largeur du court",
        "materiel": "Latte souple pour matérialiser les deux zones",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et renvoie les volants de A (haut et en cloche)",
            "A frappe 20 volants et tente de marquer le plus de points possible",
            "C observe et valide les points de A."
        ],
        "regles": [
            "Après avoir envoyé le volant à droite ou à gauche, A doit viser l'autre côté du terrain de B",
            "100 pts : A envoie dans la zone libre (différente de la précédente)",
            "10 pts : A envoie 2 fois de suite dans la même zone",
            "1 pt : A ne renvoie pas dans le terrain de B."
        ],
        "jAiReussiSi": "Atteindre un minimum de 1600 points.",
        "seuil": 1600
    },
    {
        "titre": "Jouer dans la profondeur",
        "theme": "Service et placement du volant",
        "sousTheme": "Placement du volant",
        "evolution": 2,
        "image_recto": "./placement-n2.png",
        "imageRecto": "./placement-n2.png",
        "but": "Maîtriser le jeu long / jeu court",
        "materiel": "Latte souple pour matérialiser les deux zones avant et arrière",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et renvoie les volants de A (haut et en cloche)",
            "A frappe 20 volants et tente de marquer le plus de points possible",
            "C observe et valide les points de A."
        ],
        "regles": [
            "Après avoir envoyé le volant en zone avant ou arrière, A doit viser l'autre zone du terrain de B",
            "100 pts : A envoie dans la zone jaune (différente de la précédente)",
            "10 pts : A envoie dans la zone bleue",
            "1 pt : A envoie dans la zone du milieu."
        ],
        "jAiReussiSi": "Atteindre un minimum de 1600 points.",
        "seuil": 1600
    },
    {
        "titre": "Viser une cible précise",
        "theme": "Service et placement du volant",
        "sousTheme": "Placement du volant",
        "evolution": 3,
        "image_recto": "./placement-n3.png",
        "imageRecto": "./placement-n3.png",
        "but": "Être précis dans l’envoi du volant",
        "materiel": "Latte souple pour matérialiser les 4 zones",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et renvoie les volants de A (haut et en cloche)",
            "A tente d'envoyer le volant dans le terrain de B en alternant les zones ciblées",
            "B réalise le service et renvoie les volants de A au centre du terrain de A (avec de la hauteur)",
            "C observe et valide les points de A."
        ],
        "regles": [
            "A tente d'envoyer le volant dans le terrain de B en alternant les zones ciblées",
            "B réalise le service et renvoie les volants de A au centre du terrain de A (avec de la hauteur)",
            "C observe et valide les points de A."
        ],
        "jAiReussiSi": "Atteindre un minimum de 500 pts.",
        "seuil": 500
    },
    {
        "titre": "Carré magique",
        "theme": "Service et placement du volant",
        "sousTheme": "Placement du volant",
        "evolution": 4,
        "image_recto": "./placement-n4.png",
        "imageRecto": "./placement-n4.png",
        "but": "Varier les placements du volant - jouer sur le terrain adverse.",
        "materiel": "Latte souple pour matérialiser le carré central",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et renvoie les volants de A (haut et en cloche)",
            "A frappe 20 volants et tente de marquer le plus de points possible",
            "C observe et valide les points de A."
        ],
        "regles": [
            "A frappe 20 volants. Après avoir envoyé le volant à droite ou à gauche, A doit viser l'autre côté",
            "100 pts : A envoie le volant en dehors du carré",
            "10 pts : A envoie le volant dans le carré",
            "1 pt : A ne renvoie pas le volant dans le terrain de B."
        ],
        "jAiReussiSi": "Atteindre un minimum de 1600 pts.",
        "seuil": 1600
    },

    // ==========================================
    // THÈME 2 : AMORTI (Évolutions 1, 2, 3, 4)
    // ==========================================
    {
        "titre": "Amorti facile",
        "theme": "Amorti",
        "evolution": 1,
        "image_recto": "./amorti1.svg",
        "imageRecto": "./amorti1.svg",
        "but": "Maîtriser l’amorti",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un amorti (de profil, raquette haute, mouvement du dégagé mais en douceur)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un amorti",
            "10 pts = volant pas dans la zone mais geste de l’amorti",
            "1 pt = le geste de l’amorti n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Amorti précis",
        "theme": "Amorti",
        "evolution": 2,
        "image_recto": "./amorti2.svg",
        "imageRecto": "./amorti2.svg",
        "but": "Maîtriser l’amorti",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un amorti (de profil, raquette haute, mouvement du dégagé mais en douceur)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un amorti",
            "10 pts = volant pas dans la zone mais geste de l’amorti",
            "1 pt = le geste de l’amorti n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Amorti ciblé",
        "theme": "Amorti",
        "evolution": 3,
        "image_recto": "./amorti3.svg",
        "imageRecto": "./amorti3.svg",
        "but": "Maîtriser l’amorti",
        "materiel": "Latte souple pour matérialiser les zones à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un amorti (de profil, raquette haute, mouvement du dégagé mais en douceur)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un amorti",
            "10 pts = volant pas dans la zone mais geste de l’amorti",
            "1 pt = le geste de l’amorti n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Amorti filet",
        "theme": "Amorti",
        "evolution": 4,
        "image_recto": "./amorti4.svg",
        "imageRecto": "./amorti4.svg",
        "but": "Maîtriser l’amorti",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un amorti (de profil, raquette haute, mouvement du dégagé mais en douceur)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un amorti",
            "10 pts = volant pas dans la zone mais geste de l’amorti",
            "1 pt = le geste de l’amorti n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },

    // ==========================================
    // THÈME 3 : SMATCH (Évolutions 1, 2)
    // ==========================================
    {
        "titre": "Smatch facile",
        "theme": "Smatch",
        "evolution": 1,
        "image_recto": "./smatch.svg",
        "imageRecto": "./smatch.svg",
        "but": "Maîtriser le smatch",
        "materiel": "Pas de matériel nécessaire",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un smatch (mouvement du dégagé mais frapper le volant plus tôt pour obtenir une trajectoire descendante)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = le volant tombe au sol et B ne le touche pas",
            "10 pts = le volant n’est pas renvoyé par B mais il le touche",
            "1 pt = B réussit à renvoyer le volant."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Smatch décisif",
        "theme": "Smatch",
        "evolution": 2,
        "image_recto": "./smatch.svg",
        "imageRecto": "./smatch.svg",
        "but": "Maîtriser le smatch en situation de match",
        "materiel": "Pas de matériel nécessaire",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "Situation de match avec B qui sert obligatoirement",
            "B sert 10 fois",
            "A doit tenter de marquer avec un smatch."
        ],
        "regles": [
            "100 pts = A marque avec un smatch",
            "10 pts = A marque mais sans smatch",
            "1 pt = B marque."
        ],
        "jAiReussiSi": "Atteindre un minimum de 550 pts.",
        "seuil": 550
    },

    // ==========================================
    // THÈME 4 : DÉGAGÉ (Évolutions 1, 2, 3)
    // ==========================================
    {
        "titre": "Dégagé facile",
        "theme": "Dégagé",
        "evolution": 1,
        "image_recto": "./degage1.svg",
        "imageRecto": "./degage1.svg",
        "but": "Maîtriser le dégagé",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un dégagé (de profil, raquette haute, frapper en passant la raquette au dessus de l’épaule, pousser sur la jambe arrière)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un dégagé",
            "10 pts = volant pas dans la zone mais geste du dégagé",
            "1 pt = le geste du dégagé n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Dégagé offensif",
        "theme": "Dégagé",
        "evolution": 2,
        "image_recto": "./degage2.svg",
        "imageRecto": "./degage2.svg",
        "but": "Maîtriser le dégagé",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un dégagé (de profil, raquette haute, frapper en passant la raquette au dessus de l’épaule, pousser sur la jambe arrière)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un dégagé",
            "10 pts = volant pas dans la zone mais geste du dégagé",
            "1 pt = le geste du dégagé n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Dégagé précis",
        "theme": "Dégagé",
        "evolution": 3,
        "image_recto": "./degage3.svg",
        "imageRecto": "./degage3.svg",
        "but": "Maîtriser le dégagé",
        "materiel": "Latte souple pour matérialiser la zone à viser",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert et envoie un volant haut",
            "A doit envoyer le volant dans la zone avec un dégagé (de profil, raquette haute, frapper en passant la raquette au dessus de l’épaule, pousser sur la jambe arrière)."
        ],
        "regles": [
            "A frappe 10 volants",
            "100 pts = volant envoyé dans la zone avec un dégagé",
            "10 pts = volant pas dans la zone mais geste du dégagé",
            "1 pt = le geste du dégagé n’est pas réalisé."
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },

    // ==========================================
    // THÈME 5 : STRATÉGIE (Évolutions 1, 2, 3)
    // ==========================================
    {
        "titre": "Service stratégique",
        "theme": "Stratégie",
        "evolution": 1,
        "image_recto": "./service-n4.png",
        "imageRecto": "./service-n4.png",
        "but": "Avoir une stratégie au service",
        "materiel": "Pastilles de couleur aux 4 coins du terrain de B.",
        "organisation": [
            "A tente de marquer le point en moins de 3 volants frappés.",
            "B se place sur un cercle jaune au choix puis défend (ne sort du cercle que sur la frappe de A).",
            "C observe et valide les points de A."
        ],
        "regles": [
            "A sert 10 fois. B défend 10 fois",
            "100 pts : Point marqué en 3 frappes ou moins",
            "10 pts : Point marqué en plus de 3 frappes",
            "1 pt : Point marqué par le défenseur (B)."
        ],
        "jAiReussiSi": "Atteindre un minimum de 700 pts.",
        "seuil": 700
    },
    {
        "titre": "Alterner jeu court / jeu long",
        "theme": "Stratégie",
        "evolution": 2,
        "image_recto": "./combodec.svg",
        "imageRecto": "./combodec.svg",
        "but": "Varier entre jeu court (filet) et jeu long (fond de court) pour créer une rupture motrice et déséquilibrer l'adversaire",
        "materiel": "Lattes souples ou plots délimitant la zone avant (près du filet) et la zone arrière (fond de court)",
        "organisation": [
            "A = attaquant",
            "B = relanceur",
            "C = observateur",
            "B sert haut et relance dans le terrain de A",
            "A doit alterner obligatoirement une frappe en zone avant et une frappe en zone arrière",
            "C compte les alternances réussies sur 10 volants"
        ],
        "regles": [
            "100 pts = Alternance réussie court / long dans la zone visée",
            "10 pts = Volant renvoyé dans le terrain mais sans respecter l'alternance",
            "1 pt = Volant dans le filet ou hors limites"
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    },
    {
        "titre": "Jouer dans l’espace vide",
        "theme": "Stratégie",
        "evolution": 3,
        "image_recto": "./zlibre.svg",
        "imageRecto": "./zlibre.svg",
        "but": "Observer le replacement adverse et placer le volant dans l'espace libre pour marquer le point",
        "materiel": "Plots ou coupelles marquant les 4 coins du demi-terrain adverse",
        "organisation": [
            "A = attaquant",
            "B = défenseur",
            "C = observateur",
            "B relance et tente de se replacer au centre",
            "A observe la position de B et frappe dans la zone opposée laissée libre",
            "C valide si le volant tombe dans la zone libre sans que B puisse l'intercepter"
        ],
        "regles": [
            "100 pts = Volant envoyé dans la zone libre non couverte par B",
            "10 pts = Volant renvoyé directement sur B",
            "1 pt = Faute ou volant hors terrain"
        ],
        "jAiReussiSi": "Atteindre un minimum de 800 pts.",
        "seuil": 800
    }
];

// Compatibilité Node.js et Navigateur
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { situationsApprentissage };
}
