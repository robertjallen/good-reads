import axios from 'axios'

export function fetchHarry(){ 
    return axios.get(`https://goodreads-server-express--dotdash.repl.co/search/harry`)
}

export function search(book){ 
    return axios.get(`https://goodreads-server-express--dotdash.repl.co/search/${book}`)
}