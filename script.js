const students = []; /*array*/
let control;/* this is a variable to control the repetition structure*/

for (control = 0; control < 2; control++){
  const student = {/*object that we'll put on the array*/
    name: String(prompt(`Insira o nome do Aluno`)),/*array element*/
    grade1: Number(prompt(`Insira a nota 1 do Aluno`)),/*array element*/
    grade2: Number(prompt(`Insira a nota 2 do Aluno`)),/*array element*/
  };
  student.average = (student.grade1 + student.grade2) / 2;/*average calculation. Can't be inside the object because it needs the .grade1 and .grade2 elements and they're not set (until now)*/
  students.push(student);/*push command to send the object(student) to the array(students)*/
}

for (let student of students) {/*runs through the object( in this case student) of students*/
  const result = (student.average >=7 /*This is a ternary if */
  ? `Parabéns, ${student.name}! Você passou de ano!` 
  : `Que pena, ${student.name}, você não passou.  
  `)
  
  alert(`
  Nome do estudante: ${student.name}
  Nota 1 do estudante: ${student.grade1}  
  Nota 2 do estudante: ${student.grade2}
  ${result}`
  )}