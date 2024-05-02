export default function createReportObject(employeesList=createEmployeesObject()) {
    return {
        allEmployees: ...employeesList,
        getNumberOfDepartments(...employeesList) {
            return employeesList.length;
        }
    }
}