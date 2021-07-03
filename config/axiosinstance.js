const axios = require('axios').default;

const deputyAPI = axios.create({
    baseURL: 'https://raw.githubusercontent.com/centraldedados/parlamento-deputados/master/data/deputados.json',
  });

// const deputyAPI = async () => {
// try {
//     return await axios.get('https://raw.githubusercontent.com/centraldedados/parlamento-deputados/master/data/deputados.json')
// } catch (error) {
//     console.error(error)
// }
// }

module.exports = deputyAPI;
