export default function getStudentsByLocation(listStudents, city) {
  return Array.isArray(listStudents) && listStudents.filter(({ location }) => location === city);
}
