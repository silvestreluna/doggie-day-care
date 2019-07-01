import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalksData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/walks.json`)
    .then((resp) => {
      const allWalks = resp.data;
      const walksWithId = [];
      Object.keys(allWalks).forEach((walk) => {
        allWalks[walk].id = walk;
        walksWithId.push(allWalks[walk]);
      });
      resolve(walksWithId);
    })
    .catch(err => reject(err));
});

export default { getWalksData };
