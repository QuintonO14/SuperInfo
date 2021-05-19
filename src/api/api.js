import axios from 'axios';

const hero = axios.create({
    baseURL: `https://akabab.github.io/superhero-api/api`,
});

export default hero;
