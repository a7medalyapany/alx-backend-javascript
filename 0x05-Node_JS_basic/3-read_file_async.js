const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
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

      resolve();
    });
  });
}

module.exports = countStudents;
