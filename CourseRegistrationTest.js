// TDD Red Phase: Test case for seat capacity limit
function testSeatCapacityLimit() {
    // Expecting failure when capacity logic is missing
    throw new Error("Test failed - capacity logic not implemented");
}
testSeatCapacityLimit();
// TDD Refactor Phase: Extracted logic into a reusable helper method
const isCourseFull = (seats) => seats <= 0;

function testSeatCapacityLimit() {
    if (!isCourseFull(0)) {
        throw new Error("Test Failed");
    }
    console.log("Refactor Phase: Modular seat validation passed!");
}
testSeatCapacityLimit();
