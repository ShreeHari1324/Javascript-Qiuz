const questions =[{
        question:"1) Which type of JavaScript language is ",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level0",
        correct:"b"
},
{
    question:"2) Which one of the following also known as Conditional Expression: ",
    a:"Alternative to if-else",
    b:"Switch statement",
    c:"If-then-else statement",
    d:"immediate if",
    correct:"d"
},
{
    question:"3) In JavaScript, what is a block of statement? ",
    a:"Conditional block",
    b:"block that combines a number of statements into a single compound statement",
    c:"both conditional block and a single statement",
    d:"block that contains a single statement",
    correct:"b"
},
{
    question:"4) When interpreter encounters an empty statements, what it will do ",
    a:"Shows a warning",
    b:"Prompts to complete the statement",
    c:"Throws an error",
    d:"Ignores the statements",
    correct:"d"
},
{
    question:"5) The 'function' and 'var' are known as: ",
    a:"Keywords",
    b:"Data types",
    c:"Declaration statementsr",
    d:"Prototypes",
    correct:"a"
},
]

var question=document.getElementById("question");



var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");

var display=document.getElementById("display");
var nextbtn=document.getElementById("next");





var current=0;
var score=0;

load();

function load(){

    const current_quiz =questions[current];
    question.innerHTML =current_quiz.question;
    one.innerHTML=current_quiz.a;
    two.innerHTML=current_quiz.b;
    three.innerHTML=current_quiz.c;
    four.innerHTML=current_quiz.d;
    
    

};



function checkans(){
   
  
    const current_quiz =questions[current];
    var ans=current_quiz.correct;


    var a=document.getElementById("a");
    if(a.checked){
        if(a.value == ans){
            console.log("correct");
            score++;
            display.innerHTML=`The  option is correct ${ans}`;
        }
        else{
            display.innerHTML=`The  option is wrong ${a.value} the correct option is ${ans}`;
        }
    }


    var b=document.getElementById("b");
    if(b.checked){
        if(b.value == ans){
            console.log("correct");
            score++;
            display.innerHTML=`The  option is correct ${ans}`;
        }
        else{
            display.innerHTML=`The  option is wrong ${b.value} the correct option is ${ans}`;
        }
    }

    var c=document.getElementById("c");
    if(c.checked){
        if(c.value == ans){
            console.log("correct");
            score++;
            display.innerHTML=`The  option is correct ${ans}`;
        }
        else{
            display.innerHTML=`The  option is wrong ${c.value} the correct option is ${ans}`;
        }
    }

    var d=document.getElementById("d");
    if(d.checked){
        if(d.value == ans){
            console.log("correct");
            score++;
            display.innerHTML=`The  option is correct ${ans}`;
        }
        else{
            display.innerHTML=`The  option is wrong ${d.value} the correct option is ${ans}`;
        }
    }
    if(!a.checked & !b.checked & !c.checked & !d.checked){
        alert("Select the option")
    }
    else{
        nextbtn.style.display="block";

    }

};

function next(){
    current ++;
    if(current >=5 ){
        document.getElementById("output").innerHTML=`Your Scour is ${score} /5`;
     }
     else{
        load();
    display.innerHTML="";
    nextbtn.style.display="none";
    console.log(score);
     }
    
    
};



