/* exported getStudentNames */
function getStudentNames(students: Record<string, string>[]): string[] {
  const names = [];
  for (const student of students) {
    names.push(student.name);
  }
  return names;
}
