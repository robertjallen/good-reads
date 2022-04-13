import axios from 'axios'

export function fetchHarry(){ 
    return axios.get(`https://goodreads-server-express--dotdash.repl.co/search/harry`)
}