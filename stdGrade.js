// We want the "Enter" button to evoke a response when clicked. That is, send a grade once marks has been entered and the "Enter" button clicked.
// We want the user to be alerted the grade they got once they choose their marks. Anything between 0 and less than 40 is an E. Between 40 and 49 inclusive is a D. Greater than 49 to 59 inclusive is a C. Between 60 and 79 inclusive is a B. Anything else above 79 is an A. 


document.getElementById("btn").onclick = function (){
    let myMarks = document.getElementById("marks").value;

    if (myMarks >=0 && myMarks < 40){
        alert("Your Grade is: E");
    }
    
    else if (myMarks >= 40 && myMarks<= 49){
        alert("Your Grade is: D");
    }

    else if (myMarks >49 && myMarks <= 59){
        alert("Your Grade is: C");
    }

    else if (myMarks >= 60 && myMarks <= 79){
        alert("Your Grade is: B")
    }

    else {
        alert("Your Grade is: A")
    }
}