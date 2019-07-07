import dogsData from './getDogsData';
import allWalks from './getWalkersData';
import employeesData from './getEmployeesData';

const gettingAllDataToSmash = () => new Promise((resolve, reject) => {
  dogsData.getDogsData()
    .then(dogs => allWalks.getWalksData()
      .then(walks => employeesData.getAllEmp()
        .then((allEmp) => {
          // smashingAllData(dogs, walks, allEmp);
          const empDogWalkObject = [];
          // console.error(dogs, walks, allEmp);
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


// const gettingAllDataToSmash = () => {
//   dogsData.getDogsData()
//     .then(dogs => allWalks.getWalksData()
//       .then(walks => employeesData.getAllEmp()
//         .then((allEmp) => {
//           // smashingAllData(dogs, walks, allEmp);

//           const empDogWalkObject = [];
//           // console.error(dogs, walks, allEmp);
//           dogs.forEach((dog) => {
//             walks.forEach((walk) => {
//               allEmp.forEach((emp) => {
//                 if (dog.id === walk.dogId && walk.employeeId === emp.id) {
//                   const newObj = {
//                     id: dog.id,
//                     imgUrl: dog.imgUrl,
//                     dogName: dog.name,
//                     age: dog.age,
//                     type: dog.type,
//                     color: dog.color,
//                     walkerName: emp.name,
//                     date: walk.date,
//                   };
//                   empDogWalkObject.push(newObj);
//                 }
//               });
//             });
//           });
//         })))
//     .catch(err => console.error(err, 'No data came back'));
// };

// const smashingAllData = (dogs, walks, allEmp) => {
//   console.error('heel');
//   const empDogWalkObject = [];
//   // console.error(dogs, walks, allEmp);
//   dogs.forEach((dog) => {
//     walks.forEach((walk) => {
//       allEmp.forEach((emp) => {
//         if (dog.id === walk.dogId && walk.employeeId === emp.id) {
//           const newObj = {
//             id: dog.id,
//             imgUrl: dog.imgUrl,
//             dogName: dog.name,
//             age: dog.age,
//             type: dog.type,
//             color: dog.color,
//             walkerName: emp.name,
//             date: walk.date,
//           };
//           empDogWalkObject.push(newObj);
//         }
//       });
//     });
//   });
// };


export default { gettingAllDataToSmash };
