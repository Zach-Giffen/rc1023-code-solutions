/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (const key in students) {
    names.push(students[key].name);
  }
  return names;
}
