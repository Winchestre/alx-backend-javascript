export default function getStudentIdsSum(listStudents) {
  return Array.isArray(listStudents) ? listStudents.reduce((acc, { id }) => acc + id, 0) : [];
}
