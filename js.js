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
var selectedOption;

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
    const options = [
        document.getElementById('op1'),
        document.getElementById('op2'),
        document.getElementById('op3'),
        document.getElementById('op4')
    ];
 
    // Providing option text and value
    options.forEach((option, index) => {
        option.innerText = Questions[id].a[index].text;
        option.value = Questions[id].a[index].isCorrect;
        option.style.backgroundColor = "Slategrey";
    });
 
    // Show selection
    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            options.forEach((opt, idx) => {
                if (index === idx) {
                    opt.style.backgroundColor = "creamyyellow";
                    selectedOption = opt;
                } else {
                    opt.style.backgroundColor = "Slategrey";
                }
            });
        });
    });

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
 
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selectedOption.value === "true") {
            selectedOption.style.backgroundColor = "MidnightBlue";
            result[0].innerHTML = "True";
            result[0].style.color = "Green";
            result[0].style.fontSize = "larger";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "Red";
            result[0].style.fontSize = "larger";
        }
    })
}
 
if (start) {
    iterate(0);
}
 
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
 
next.addEventListener("click", () => {
    start
