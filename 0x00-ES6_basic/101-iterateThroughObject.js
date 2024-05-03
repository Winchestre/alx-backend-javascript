export default function iterateThroughObject(reportWithIterator) {
  const employee = [];
  for (const report of reportWithIterator) {
    employee.push(report);
  }
  return employee.join(' | ');
}
