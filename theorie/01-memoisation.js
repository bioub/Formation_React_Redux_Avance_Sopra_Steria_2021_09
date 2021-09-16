const memo = require('lodash').memoize;

// tableau de 1000 entiers compris en 0 et 9
let nbs = (new Array(1_000_000)).fill(0).map(() => Math.floor(Math.random() * 10));

// Pour être memoisable, une fonction doit être pure
// - pour des paramètres d'entrées donnés, le retour doit toujours être le même (fonction prédictive)
// sum(1, 2) === 3 -> OK, Math.random() === ??? KO
// - elle ne doit pas avoir de side effect, ne doit pas appeler des APIs externe
// ex: requete ajax, écriture dans un storage
// - elle ne doit pas modifier ses paramètres d'entrées (pas être muable)

function countOdds(array) {
  return array.filter((n) => n % 2 === 1).length;
}

const memoCountOdds = memo(countOdds);

console.time('countOdds');
console.log(countOdds(nbs) + ' nombres impairs'); 
console.timeEnd('countOdds');

console.time('countOdds');
console.log(countOdds(nbs) + ' nombres impairs'); 
console.timeEnd('countOdds');

console.time('countOdds');
console.log(countOdds(nbs) + ' nombres impairs'); 
console.timeEnd('countOdds');

console.time('memoCountOdds');
console.log(memoCountOdds(nbs) + ' nombres impairs'); 
console.timeEnd('memoCountOdds');

console.time('memoCountOdds');
console.log(memoCountOdds(nbs) + ' nombres impairs'); 
console.timeEnd('memoCountOdds');

console.time('memoCountOdds');
console.log(memoCountOdds(nbs) + ' nombres impairs'); 
console.timeEnd('memoCountOdds');

nbs = [...nbs, 1];

console.time('memoCountOdds');
console.log(memoCountOdds(nbs) + ' nombres impairs'); 
console.timeEnd('memoCountOdds');

nbs.push(1);

console.time('memoCountOdds');
console.log(memoCountOdds(nbs) + ' nombres impairs'); 
console.timeEnd('memoCountOdds');