/**
 * data.js - Situations d'apprentissage Bad'EPS
 * Généré automatiquement à partir de exsbadeps.csv
 */

const situationsApprentissage = [
    {
        titre: "Engagement au service",
        theme: "Service",
        evolution: 1,
        image_recto: "./schema-n1.png",
        imageRecto: "./schema-n1.png",
        but: "Maîtriser le service pour engager le point",
        materiel: "X",
        organisation: [
            "Joueur =A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide le points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        regles: [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais par règlementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        jAiReussiSi: "Atteindre 800 points."
    },
    {
        titre: "Service court",
        theme: "Service",
        evolution: 2,
        image_recto: "./service-n2.png",
        imageRecto: "./service-n2.png",
        but: "Maîtriser le service court pour faire avancer l’adversaire",
        materiel: "Latte souple ou plot à placer à 1 grand pas de la ligne de la rivière",
        organisation: [
            "Joueur =A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide le points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        regles: [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais par règlementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        jAiReussiSi: "Atteindre 800 points."
    },
    {
        titre: "Service long",
        theme: "Service",
        evolution: 3,
        image_recto: "./service-n3.png",
        imageRecto: "./service-n3.png",
        but: "Maîtriser le service court pour faire reculer l’adversaire",
        materiel: "Latte souple ou plot à placer à 1 grand pas de la ligne intérieur du couloir de fond du terrain.",
        organisation: [
            "Joueur =A",
            "Partenaire = B",
            "Observateur = C",
            "A fait un service",
            "B laisse le volant tomber au sol et redonne le volant à A",
            "C valide le points",
            "A fait 10 services",
            "Astuce : vous pouvez utiliser 5 volants pour aller plus vite"
        ],
        regles: [
            "100 pts = Service réglementaire réussi",
            "10 pts : Volant frappé et envoyé de l’autre côté du filet mais par règlementaire (rivière ou pas croisé).",
            "1 pt : service raté"
        ],
        jAiReussiSi: "Atteindre 730 points."
    }
];

// Compatibilité Node.js et Navigateur
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { situationsApprentissage };
}
