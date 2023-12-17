// Function to calculate actual sleep hours for the week
function getActualSleepHours() {
  let sleep = 8 + 7 + 8 + 4 + 6 + 8 + 6;
  return sleep;
}

// Function to calculate ideal sleep hours based on the given ideal hours per night
function getIdealSleepHours(idealHoursPerNight) {
  return idealHoursPerNight * 7;
}

// Main function to calculate and display sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let difference = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed. You are over your ideal sleep by ${difference} hours.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest. You are under your ideal sleep by ${difference} hours.`);
  }
}

// Call the main sleep debt calculation function
calculateSleepDebt();
