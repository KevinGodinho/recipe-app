// katie's key 5f878bcb5034c06827eec266665468cb
// my key 3429316165c83bd92b8ca569aba32ac1

import axios from 'axios';
import { key } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        const key = '5f878bcb5034c06827eec266665468cb';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
//             console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

