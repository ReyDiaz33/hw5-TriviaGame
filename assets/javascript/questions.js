// create questions for quiz (Prompts)
// create answers from variables 

var quizQuestions = [
    {
        question: "What phrase is said as the Power Rangers transform?",
        choices: ["Cowabunga!", "Eat My Shorts!", "Respect My Authority!", "It's Morphin Time"],
        correctAnswer: "It's Morphin Time",
    },

    {
        question: 'Which Power Ranger is the leader of the group?',
        choices: ["Red Ranger", "Blue Ranger", "Black Ranger", "Pink Ranger"],
        correctAnswer: "Red Ranger",
    },

    {
        question: "Which Power Ranger was introduced as 'Evil' but converted to good later in the series?",
        choices: ["Red Ranger", "Pink Ranger", "Black Ranger", "Green Ranger"],
        correctAnswer: "Green Ranger",
    },

    {
        question: 'What is the name of the character with the floating head?',
        choices: ["Zoltar", "Zoltan", "Zordon", "Jeff"],
        correctAnswer: "Zordon",
    },

    {
        question: 'What weapon did the White Ranger carry?',
        choices: ["Tiger Sword", "Staff", "Katana", "Power Glove"],
        correctAnswer: 'Tiger Sword',
    },

];

// Gigphy for right and wrong answers
var correctGifs = [
    "/assets/images/correct1.gif",
    "/assets/images/correct2.gif",
    "/assets/images/correct3.gif",
    "/assets/images/correct4.gif",
    "/assets/images/correct5.gif",
];

var wrongGifs = [
    "../assets/images/wrong1.gif", 
    "../assets/images/wrong2.gif", 
    "../assets/images/wrong3.gif", 
    "../assets/images/wrong4.gif", 
    "../assets/images/wrong5.gif", 
];