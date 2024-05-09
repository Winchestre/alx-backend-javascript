export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return Array.isArray(listStudents) && listStudents
    .filter(({ location }) => location === city)
    .map(item => {
      const target = newGrades.filter(({ studentId }) => studentId === item.id);
      const { grade = "N/A" } = target.length > 0 ? target[0] : {};
      return { ...item, grade }
    });
}
