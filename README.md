# Toy Solutions
These solutions contain the solutions to the Toy problems provided in the content.

## Student Grade
    The first solution is the student grade solution. We want the user to get a response whenever they choose a student's marks and click enter.
    The marks ranges from 0 - 100 in the following grading order:
    < 40 : E
    40 - 49 : D
    49 - 59 : C
    60 - 79 : B
    /> 79 : A

### Instructions
    We needed to create a user input in the html file that would allow the user to choose a number between 0 and 100 inclusive. We had to create a submit button. 
    We needed to get the user value in order to ellicit the right response, that is the correct grade.
    We assigned the the input and the button unique id's.
    Since we wanted to ellicit a response based on the user's input, we had get the input element by id.
    We formed an anonymous function and assigned a variable 'myMarks' to the getElementById of the user's input value.
    Based on the value the user chooses, they would get the correct grade.



## Speed Detector
    Speed <= 70 km/hr: OK
    Every 5 km/hr above 70 km/hr: Get an incrementing point;
    points > 12 : Get your license suspended for dangerous and reckless driving.
### Instructions
    The easiest way to find points is to take the speed minus the accepted speed limit, 70 km/hr, divide the resulting solution by five and find its floor value. The final value will be an integer.
    If the speed is below 70 we will get OK. For every 5km/hr above the normal speed limit 70 km/hr, which is returned by the else if statement, we will get one demerit point up until 12 demerit points.
    Once the demerit points exceed 12, which is returned by the else statement, we will get a suspended license.



# Licence
These Codes belong to Emmanuel Chacha. Feel free to use them for educational purposes.