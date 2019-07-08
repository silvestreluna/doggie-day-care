import dogsData from './getDogsData';
import allWalks from './getWalkersData';
import employeesData from './getEmployeesData';

const gettingAllDataToSmash = () => new Promise((resolve, reject) => {
  dogsData.getDogsData()
    .then(dogs => allWalks.getWalksData()
      .then(walks => employeesData.getAllEmp()
        .then((allEmp) => {
          const empDogWalkObject = [];
          dogs.forEach((dog) => {
            walks.forEach((walk) => {
              allEmp.forEach((emp) => {
                if (dog.id === walk.dogId && walk.employeeId === emp.id) {
                  const newObj = {
                    idDog: dog.id,
                    walkId: walk.id,
                    imgUrl: dog.imgUrl,
                    dogName: dog.name,
                    age: dog.age,
                    type: dog.type,
                    color: dog.color,
                    empId: emp.id,
                    walkerName: emp.name,
                    date: walk.date,
                  };
                  empDogWalkObject.push(newObj);
                }
              });
            });
          });
          resolve(empDogWalkObject);
        })))
    .catch(err => reject(err, 'No data came back'));
});


export default { gettingAllDataToSmash };
