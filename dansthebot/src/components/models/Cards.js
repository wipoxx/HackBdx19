export const Cards = [
    {
        "id": "1",
        "type": "Action",
        "action": "MoveUp1",
        "cost": "1",
        "name": "Déplacement court",
        "desc": "Déplacer votre personnage de 1 case vers la direction qu'il regarde."
    },
    {
        "id": "2",
        "type": "Action",
        "action": "MoveUp3",
        "cost": "3",
        "name": "Déplacement long",
        "desc": "Déplacer votre personnage de 3 case vers la direction qu'il regarde."
    },
    {
        "id": "3",
        "type": "Action",
        "action": "Jump1",
        "cost": "3",
        "name": "Saut simple",
        "desc": "Saut de 2 case, permet de passer par dessus les obstacles."
    },
    {
        "id": "4",
        "type": "Action",
        "action": "MoveBack1",
        "cost": "2",
        "name": "Déplacement arrière simple",
        "desc": "Déplacer votre personnage 1 case en arrière."
    },
    {
        "id": "5",
        "type": "Action",
        "action": "RotateHoraire",
        "cost": "1",
        "name": "Tourner à droite",
        "desc": "Tourne votre robot 90° dans le sens horaire."
    },
    {
        "id": "6",
        "type": "Action",
        "action": "AntiRotate",
        "cost": "1",
        "name": "Tourner à gauche",
        "desc": "Tourne votre robot 90° dans le sens anti-horaire."
    },
    {
        "id": "7",
        "NOTUSED":"",
        "type": "Action",
        "action": "Pass",
        "cost": "0",
        "name": "Passer votre tour",
        "desc": "Fin de votre tour."
    },
    {
        "id": "8",
        "type": "Bonus",
        "action": "Gain2",
        "cost": "0",
        "name": "Gain d'énergie moyen",
        "desc": "Votre robot récupère 2 points d'énergie."
    }
    ,
    {
        "id": "9",
        "NOTUSED":"",
        "type": "Bonus",
        "action": "FreeCard",
        "cost": "1",
        "isTemporary": true,
        "name": "Deplacement simple",
        "desc": "Deplacement votre personnage de 1 case"
    },
    {
        "id": "10",
        "type": "Malus",
        "action": "Lose1",
        "cost": "1",
        "args": ["target"],
        "name": "Fatigue !",
        "desc": "Réduisez de 1 l'énergie d'un adversaire choisi pour son prochain tour."
    },
    {
        "id": "11",
        "type": "Malus",
        "action": "ForbideRotate",
        "cost": "2",
        "args": ["target"],
        "name": "Interdiction de tourner !",
        "desc": "Interdisez à un adversaire de tourner son robot pendant 1 tour."
    },
    {
        "id": "12",
        "type": "Malus",
        "action": "ForbideLoop",
        "cost": "2",
        "args": ["target"],
        "name": "Interdiction de boucle !",
        "desc": "Interdisez à un adversaire d'utiliser une boucle."
    },
    {
        "id": "13",
        "type": "Malus",
        "action": "ForbideIf",
        "cost": "2",
        "args": ["target"],
        "name": "Interdiction de test !",
        "desc": "Interdisez à un adversaire d'utiliser un test."
    },
    {
        "id": "14",
        "type": "Malus",
        "action": "ForbideBreak",
        "cost": "2",
        "args": ["target"],
        "name": "Interdiction de stop !",
        "desc": "Interdisez à un adversaire d'utiliser un break."
    },
    {
        "id": "15",
        "DONOTUSE": "",
        "type": "Malus",
        "action": "ForbideGoto",
        "cost": "2",
        "args": ["target"],
        "name": "Deplacement simple",
        "desc": "Deplacement votre personnage de 1 case"
    },
    {
        "id": "16",
        "type": "Structure de controle",
        "action": "While",
        "cost": "2",
        "name": "Tant que",
        "desc": "Répètent la réalisation d'une ou des actions attachés tant que la condition est valide."
    },
    {
        "id": "17",
        "type": "Structure de controle",
        "action": "If",
        "cost": "2",
        "name": "Si",
        "desc": "Réalise une fois les actions attachés si la condition est valide."
    },
    {
        "id": "18",
        "type": "Structure de controle",
        "action": "Break",
        "cost": "2",
        "name": "Stop",
        "desc": "Stop la boucle en cours et passe à la suite."
    },
    {
        "id": "19",
        "DONOTUSE": "",
        "type": "Structure de controle",
        "action": "Goto",
        "cost": "2",
        "name": "Deplacement simple",
        "desc": "Deplacement votre personnage de 1 case"
    },
    {
        "id": "20",
        "type": "Fin structure de controle",
        "action": "end-While",
        "cost": "0",
        "name": "Fin tant que",
        "desc": "Termine la dernière boucle 'tant que' en cours."
    },
    {
        "id": "21",
        "type": "Fin structure de controle",
        "action": "end-If",
        "cost": "0",
        "name": "Fin si",
        "desc": "Termine le dernier bloc 'si' en cours."
    }
    ,
    {
        "id": "22",
        "type": "Condition",
        "action": "condition-wall-ahead",
        "cost": "0",
        "name": "Condition: Mur devant",
        "desc": "La condition est vrai si un mur se trouve devant le robot."
    }
]