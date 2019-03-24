export const Cards = [
    {
        "id": "1",
        "type": "Action",
        "action": "MoveUp1",
        "cost": "1",
        "name": "Short movement",
        "desc": "Move your robot one space in the direction he is facing."
    },
    {
        "id": "2",
        "type": "Action",
        "action": "MoveUp3",
        "cost": "3",
        "name": "Big movement",
        "desc": "Move your robot three spaces in the direction he is facing."
    },
    {
        "id": "3",
        "type": "Action",
        "action": "Jump1",
        "cost": "3",
        "name": "Simple jump",
        "desc": "Jump 2 spaces, over obstacles."
    },
    {
        "id": "4",
        "type": "Action",
        "action": "MoveBack1",
        "cost": "2",
        "name": "Simple back movement",
        "desc": "Move your robot one space behind."
    },
    {
        "id": "5",
        "type": "Action",
        "action": "RotateHoraire",
        "cost": "1",
        "name": "Turn right",
        "desc": "Turn your robot 90° clockwise."
    },
    {
        "id": "6",
        "type": "Action",
        "action": "AntiRotate",
        "cost": "1",
        "name": "Turn left",
        "desc": "Turn your robot 90° anticlockwise."
    },
    {
        "id": "7",
        "NOTUSED":"",
        "type": "Action",
        "action": "Pass",
        "cost": "0",
        "name": "Skip the turn",
        "desc": "End of your turn."
    },
    {
        "id": "8",
        "type": "Bonus",
        "action": "Gain2",
        "cost": "0",
        "name": "Average energy gain",
        "desc": "Your robot gain 2 more energy"
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
        "name": "Tired !",
        "desc": "Reduce 1 energy Réduisez de 1 l'énergie d'un adversaire choisi pour son prochain tour."
    },
    {
        "id": "11",
        "type": "Malus",
        "action": "ForbideRotate",
        "cost": "2",
        "args": ["target"],
        "name": "Forbid rotate !",
        "desc": "Forbid an opponent from turning his robot for 1 turn."
    },
    {
        "id": "12",
        "type": "Malus",
        "action": "ForbideLoop",
        "cost": "2",
        "args": ["target"],
        "name": "Forbid loop !",
        "desc": "Forbid an opponent to use loop."
    },
    {
        "id": "13",
        "type": "Malus",
        "action": "ForbideIf",
        "cost": "2",
        "args": ["target"],
        "name": "Forbid if condition !",
        "desc": "Forbid an opponent to use a if condition."
    },
    {
        "id": "14",
        "type": "Malus",
        "action": "ForbideBreak",
        "cost": "2",
        "args": ["target"],
        "name": "Forbid break !",
        "desc": "Forbid an opponent to use a break."
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
        "name": "While",
        "desc": "Repeat actions while the condition is valid.."
    },
    {
        "id": "17",
        "type": "Structure de controle",
        "action": "If",
        "cost": "2",
        "name": "If condition",
        "desc": "Do once actions in the condition if the condition is true."
    },
    {
        "id": "18",
        "type": "Structure de controle",
        "action": "Break",
        "cost": "2",
        "name": "Stop",
        "desc": "Break the current loop et do the next actions."
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
        "name": "End of While",
        "desc": "Finish the last while loop currently running."
    },
    {
        "id": "21",
        "type": "Fin structure de controle",
        "action": "end-If",
        "cost": "0",
        "name": "Fin si",
        "desc": "Finish the last if condition currently running."
    }
    ,
    {
        "id": "22",
        "type": "Condition",
        "action": "condition-wall-ahead",
        "cost": "0",
        "name": "Condition: Wall ahead",
        "desc": "The condition is true if there is a wall in front of the robot."
    }
]