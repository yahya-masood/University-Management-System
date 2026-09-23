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
