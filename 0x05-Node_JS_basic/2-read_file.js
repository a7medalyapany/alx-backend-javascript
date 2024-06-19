const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    // Initialize counts and lists
    let countCS = 0;
    let countSWE = 0;
    const listCS = [];
    const listSWE = [];

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field === 'CS') {
        countCS++;
        listCS.push(firstname);
      } else if (field === 'SWE') {
        countSWE++;
        listSWE.push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    console.log(
      `Number of students in CS: ${countCS}. List: ${listCS.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${countSWE}. List: ${listSWE.join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
