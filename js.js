// Questions will be asked
const Questions = [{
        id: 0,
        q: "What is the capital of the United Arab Emirates?",
        a: [{ text: "Dubai", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Abu Dhabi", isCorrect: true },
            { text: "Mumbai", isCorrect: false }
        ]
 
    },
    {
        id: 1,
        q: "What is the capital of Japan?",
        a: [{ text: "Bangkok", isCorrect: false, isSelected: false },
            { text: "Phuket", isCorrect: false },
            { text: "Ayutthaya", isCorrect: false },
            { text: "Tokyo", isCorrect: true }
        ]
 
    },
    {
        id: 2,
        q: "What is the capital of Greece",
        a: [{ text: "Rome", isCorrect: false },
            { text: "Vadodara", isCorrect: false },
            { text: "Athens", isCorrect: true },
            { text: "Rajkot", isCorrect: false }
        ]
 
    }
 
]
 
// Set start
var start = true;
 
// Iterate
function iterate(id) {
 
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
 
    // Getting the question
    const question = document.getElementById("question");
 
 
    // Setting the question text
    question.innerText = Questions[id].q;
 
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
 
 
    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
 
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
 
    var selected = "";
 
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "creamyyellow";
        op2.style.backgroundColor = "Midnightblue";
        op3.style.backgroundColor = "Slategrey";
        op4.style.backgroundColor = "Slategrey";
        selected = op1.value;
    })
 
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "Slategrey";
        op2.style.backgroundColor = "Creamyblue";
        op3.style.backgroundColor = "Slategrey";
        op4.style.backgroundColor = "Slategrey";
        selected = op2.value;
    })
 
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "Slategrey";
        op2.style.backgroundColor = "Slategrey";
        op3.style.backgroundColor = "creamyyellow";
        op4.style.backgroundColor = "Slategrey";
        selected = op3.value;
    })
 
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "Slategrey";
        op2.style.backgroundColor = "Slategrey";
        op3.style.backgroundColor = "Midnightblue";
        op4.style.backgroundColor = "Slategrey";
        selected = op4.value;
    })
 
    function clearOptionSelections() {
        op1.style.backgroundColor = "Slategrey";  //color for unselected options
        op2.style.backgroundColor = "Slategrey";
        op3.style.backgroundColor = "Slategrey";
        op4.style.backgroundColor = "Slategrey";
    }
    
    // Next button and method
    const next = document.getElementsByClassName('next')[0];
    var id = 0;
    
    next.addEventListener("click", () => {
        start = false;
        if (id < 2) {
            id++;
            iterate(id);
            clearOptionSelections(); // Clears option selections when moving to a new question
            console.log(id);
        }
    })



    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
 
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "Yellow";
            result[0].style.fontSize = "larger";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            result[0].style.fontSize = "larger";
        }
    })
}
 
if (start) {
    iterate("0");
}
 
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
 
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
 
})
