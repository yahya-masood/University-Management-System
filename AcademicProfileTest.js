// TDD Red Phase: CGPA Calculation Test
function testCGPACalculation() {
    throw new Error("Test failed - CGPA logic is completely missing");
}
testCGPACalculation();
// TDD Green Phase: Basic CGPA logic
function testCGPACalculation() {
    let totalPoints = 30;
    let totalCredits = 10;
    let cgpa = totalPoints / totalCredits;
    console.log("Green Phase: CGPA is " + cgpa);
}
testCGPACalculation();
// TDD Refactor Phase: Reusable CGPA Calculator function
const calculateCGPA = (points, credits) => (points / credits).toFixed(2);

function testCGPACalculation() {
    let currentCGPA = calculateCGPA(30, 10);
    console.log("Refactor Phase: Accurately calculated CGPA: " + currentCGPA);
}
testCGPACalculation();
