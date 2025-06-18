// 6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

const sumaTotal = exams.reduce((accumulator, exam) => accumulator + exam.score, 0);

console.log(`Suma total de las notas de los examenes: ${sumaTotal}`);

// 6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const sumaAprobados = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
        return accumulator + exam.score;
    }
    return accumulator;
}, 0);

console.log(`Suma total de las notas de los examenes aprobados: ${sumaAprobados}`);


// 6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const mediaNotas = exams.reduce((accumulator, exam) => accumulator + exam.score, 0) / exams.length;

console.log(`Media de las notas de los examenes: ${mediaNotas.toFixed(2)}`);