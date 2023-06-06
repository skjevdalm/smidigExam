const questions = [
    {
        questions: "wich paint is this?",
        answers: [
            { Text:"munch1", correct: false},
            { Text:"munch2", correct: true},
            { Text:"munch3", correct: false},
        ]

    },
    {
        questions: "wich paint is this?",
        answers: [
            { Text:"munch4", correct: false},
            { Text:"munch5", correct: true},
            { Text:"munch6", correct: false},
        ]

    }

];
const questionselemnt = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz (){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "next";
    showquestion();
}

function showquestion(){
    let currentquetion = questions[currentquestionindex];
    let questonNo  = currentquestionindex + 1;
    questionselemnt.innerHTML = questonNo + ". " + currentquetion.question;
    questions; 

    currentquestion.answers.array.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.Text;
     button.classList.add("btn");
     answerbuttons.appendChild(button);  
        
    });
}
function startquiz ();
