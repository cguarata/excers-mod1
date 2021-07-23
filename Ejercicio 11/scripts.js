'use-strict';
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

// function forEach
const removeMultiplicity = (arr) => {
    const unique = [];
    arr.forEach( (elemento) => {
      if (!unique.includes(elemento)) {
        unique.push(elemento);
      }
    }); 
    return unique;
  } 
  console.log(removeMultiplicity(names));


//  arrow function with set
// const removeMultiplicity = (arr) => {
//     return [... new Set(arr)];
//     }
//     console.log(removeMultiplicity(names));
// ;