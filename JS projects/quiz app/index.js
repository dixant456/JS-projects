var quizdata = [
    {
        question : 'Which framework is related to JS',
        a : '.net',
        b : 'flask',
        c : 'react',
        d : 'django',
        correct : 'c'
    },
    {
        question : 'Which is not a programming language',
        a : 'html',
        b : 'python',
        c : 'java',
        d : 'JS',
        correct : 'a'
    },
    {
        question : 'Which is not a framework',
        a : 'react',
        b : 'js',
        c : 'angular',
        d : 'django',
        correct : 'b'
    },
    {
        question : 'CSS stands for',
        a : 'cascading style state',
        b : 'cascading style sheet',
        c : 'cascading style of sheet',
        d : 'none',
        correct : 'b'
    }
]
var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submit_btn = document.getElementById('submit')

var currentquestion = 0
var quiscore = 0

loadQuiz()

function loadQuiz(){
    deselect()
    question.innerHTML = quizdata[currentquestion].question
    option_a.innerText = quizdata[currentquestion].a
    option_b.innerText = quizdata[currentquestion].b
    option_c.innerText = quizdata[currentquestion].c
    option_d.innerText = quizdata[currentquestion].d
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}
submit_btn.addEventListener('click' , ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    }) 
    if(selectedoption==quizdata[currentquestion].correct){
        quiscore = quiscore+1
    }
    currentquestion = currentquestion + 1
    if(currentquestion==quizdata.length){
        document.getElementById('quizdiv').innerHTML = `<h1>you have answered ${quiscore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})