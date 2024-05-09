export default function getListStudentIds(array) {
  return Array.isArray(array) ? array.map(({ id }) => id) : [];
}
