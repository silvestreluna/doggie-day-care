import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmp = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/employees.json`)
    .then((resp) => {
      const allEmployees = resp.data;
      const empWithId = [];
      Object.keys(allEmployees).forEach((emp) => {
        allEmployees[emp].id = emp;
        empWithId.push(allEmployees[emp]);
      });
      resolve(empWithId);
    })
    .catch(err => reject(err, 'No Employees data came back'));
});

export default { getAllEmp };
