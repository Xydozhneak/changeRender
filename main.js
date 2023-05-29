// For Monday and Tuesday elements of the array should perform next methods:



// Convert time that had been taken for task implementation to the hours, from the minutes.
// Leave only these tasks that need more then 2 hours for implement.
// Multiply result on hourly rate (amount) and add this result as a third element of array.
// Render to the html table, with this example:



const amount = 100;
const monday = [
  ['Write a tutorial', 180],
  ['Some web development', 120]
];
const tuesday = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 360],
  ['A whole lot of nothing', 240]
];

//task1
const mondayInHours = monday.map(function(task) {
      return [task[0], task[1] / 60]; 
});

const tuesdayInHours = tuesday.map(function(task) {
      return [task[0], task[1] / 60];  
});

console.log(mondayInHours);
console.log(tuesdayInHours);

//task2
const mondayFiltered = mondayInHours.filter(function(task) {
  return  task[1] > 2; 
});

const tuesdayFiltered = tuesdayInHours.filter(function(task) {
  return task[1] > 2; 
});

console.log(mondayFiltered);
console.log(tuesdayFiltered);

//task3
const mondayWithRate = mondayFiltered.map(function(task) {
  return [task[0], task[1], task[1] * amount];
});

const tuesdayWithRate = tuesdayFiltered.map(function(task) {
  return [task[0], task[1], task[1] * amount];
});

console.log(mondayWithRate);
console.log(tuesdayWithRate);

//task4
const mondayTable = mondayWithRate.map(function(task) {
  return (
    `<tr>
    <td>Task name: ${task[0]}</td> 
    <td>Task duration: ${task[1]} hours</td> 
    <td>Task amount: $${task[2]}</td> 
    </tr>`
  );
});

document.write(`<table>${mondayTable.join('')}</table>`);

const tuesdayTable = tuesdayWithRate.map(function(task) {
  return (
    `<tr>
    <td>Task name: ${task[0]}</td> 
    <td>Task duration: ${task[1]} hours</td> 
    <td>Task amount: $${task[2]}</td> 
    </tr>`
  );
});

document.write(`<table>${tuesdayTable .join('')}</table>`);