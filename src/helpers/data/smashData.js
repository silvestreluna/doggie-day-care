import dogsData from './getDogsData';
import allWalks from './getWalkersData';
import employeesData from './getEmployeesData';


const smashingAllData = () => {
  dogsData.getDogsData()
    .then(dog => allWalks.getWalksData()
      .then(walk => employeesData.getAllEmp()
        .then((emp) => {
          console.error(dog, walk, emp);
        })))
    .catch(err => console.error(err, 'No data came back'));
};

export default { smashingAllData };
