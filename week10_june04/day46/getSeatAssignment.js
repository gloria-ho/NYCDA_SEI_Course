// define a function that accepts two arrays and selects a random item from each array and removes it and returns the selected item in an object.

let students = ["Alfonso Arriola", "Alex Legaspi", "Iryna Manu", "Quaisha Thornton", "Christian Aracena", "Erisay Perez", "Goshgar Huseynov", "Gloria Ho", "Tim McKiernan", "Alyson Swerdloff", "Sharon Morato", "Badruduja BHUIYA", "Jose Zapata"]
let seats = ["1a", "1b", "1c", "1d", "2a", "2b", "2c", "2d", "3a", "3b", "3c", "3d", "4a", "4b", "4c", "4d"]

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSeatAssignment(names, seatNum){
  let newSeats = []
  while (names.length > 0) {
    let seat = random(seatNum);
    let student = random(names);
    let seatIndex = seatNum.indexOf(seat);
    let studentIndex = names.indexOf(student);
    seatNum.splice(seatIndex,1);
    names.splice(studentIndex,1);
    newSeats.push({seat, student});
  }
  return newSeats;
}
let results = getSeatAssignment(students, seats);
console.log(results);