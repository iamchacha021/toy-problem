// The easiest way to find points is to take the speed minus the required threshold, which is 70, divide the resulting solution by five and find its floor value. The final value will be the desired integers.
// If the speed is below 70 we will get OK. For every 5km/h above 70, which is returned by the else if statement, we will get one demerit point up until 12 demerit points.
// If the demerit points exceed 12, which is returned by the else, we will get a suspended license.

let speed = 99;
let points = Math.floor((speed - 70) / 5);

if (points <= 0){
    return "OK";
} 
else if (points >0 && points <=12) {
    return `Points: ${points}`;
}

else {
    return "License suspended";
}