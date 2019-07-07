import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getDogsData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/dogs.json`)
    .then((resp) => {
      const allDogs = resp.data;
      const dogsWithId = [];
      Object.keys(allDogs).forEach((dog) => {
        allDogs[dog].id = dog;
        dogsWithId.push(allDogs[dog]);
      });
      resolve(dogsWithId);
    })
    .catch(err => reject(err, 'No dogs came back'));
});

const postNewWalker = newWalkerObj => axios.post(`${firebaseUrl}/walks.json`, newWalkerObj);
const deleteWalker = walkerId => axios.delete(`${firebaseUrl}/walks/${walkerId}.json`);


export default {
  getDogsData,
  postNewWalker,
  deleteWalker,
};
