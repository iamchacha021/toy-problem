// we first want to define our variables, that's the gross salary, the paye, the nhif, and the nssf
const basicSalary = 40000;
const personalRelief = 2400	;
const insuranceRelief = 5000;
const pensionFund = 20000;
const housingRelief = 9000;
const ownerOccupierInterest = 25000;
const benefits = personalRelief + insuranceRelief + pensionFund + housingRelief + ownerOccupierInterest;
let grossSalary = basicSalary + benefits;
let paye;
let nhif;
let nssf = 400;

// I assumed that the personal releif, insurance relief, pension fund, housing relief, and the owner occupier interests are the benefits. Gross salary is the basic income plus the benefits.



// We want to set the paye condition for the three income brackets: below 24000,  between 24001 and 32333, and above 32333

if (grossSalary >= 0 && grossSalary <= 24000){
    paye = grossSalary * 0.1
}
else if (grossSalary >= 24001 && grossSalary <= 32333){
    paye = grossSalary * 0.25
}
else {
    paye = grossSalary * 0.3
}


// We want to get the NHIF deducted based on the gross salary bracket

if (grossSalary >= 0 && grossSalary <=5999){
    nhif = 150;
}
else if (grossSalary >= 6000 && grossSalary <= 7999){
    nhif = 300;
}
else if (grossSalary >= 8000 && grossSalary <= 11999){
    nhif = 400;
}
else if (grossSalary >= 12000 && grossSalary <= 14999){
    nhif = 500;
}
else if (grossSalary >= 15000 && grossSalary <=19999){
    nhif = 600;
}
else if (grossSalary >= 20000 && grossSalary <=24999){
    nhif = 750;
}
else if (grossSalary >= 25000 && grossSalary <= 29999){
    nhif = 850;
}
else if (grossSalary >= 30000 && grossSalary <= 34999){
    nhif = 900;
}
else if (grossSalary >= 35000 && grossSalary <= 39999){
    nhif = 950;
}
else if (grossSalary >= 40000 && grossSalary <= 44999){
    nhif = 1000;
}
else if (grossSalary >= 45000 && grossSalary <=49999){
    nhif = 1100;
}
else if (grossSalary >= 50000 && grossSalary <=59999){
    nhif = 1200;
}
else if (grossSalary >= 60000 && grossSalary <= 69999){
    nhif = 1300;
}
else if (grossSalary >= 70000 && grossSalary <= 79999){
    nhif = 1400;
}
else if (grossSalary >= 80000 && grossSalary <= 89999){
    nhif = 1500;
}
else if (grossSalary >= 90000 && grossSalary <= 99999){
    nhif = 1600;
}
else {
    nhif = 1700;
}

// Having our paye and NHIF calculated based on the gross income bracket, it is now time to get our net Salary. Our net salary will be gross salary minus the paye minus the NHIF minus the NSSF.

let deductions = paye + nhif + nssf;
let netSalary = grossSalary  - deductions;




// Disclaimer!!!! Since I'm not in any way conversant with economics, I assumed that PAYE is the tax subtracted from the gross salary, 
