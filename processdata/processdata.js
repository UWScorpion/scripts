console.log("test")

import fs from 'fs';
import csv from 'csv-parser';

const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results); // `results` is an array of objects

    // Example: Iterate and process the data
    for (const row of results) {
      console.log(`Row processed:`, row);
    }
  });