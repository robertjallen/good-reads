import React from 'react';
import './App.css';
import {useEffect, useState} from 'react'
import {fetchHarry} from "./utils/api"
import {search} from "./utils/api"
import List from './components/List'

function App() {
  const [pick, setPick] = useState('Harry Potter')
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=>{
    // //fetch data by initial get
    fetchHarry()
    .then(function(res){
        console.log(res)
        if(res.data.list){
          console.log("list", res.data.list)
          setData(res.data.list);
        }
    })
    //   .catch(function() {
    //     // Code for handling errors
    //   });
    },[])

    useEffect(()=>{
      // //fetch data by initial get
      search(query)
      .then(function(res){
          console.log(res)
          if(res.data.list){
            console.log("list", res.data.list)
            setData(res.data.list);
          }
      })
      //   .catch(function() {
      //     // Code for handling errors
      //   });
      },[query])



    function handleSubmit(event) {
      event.preventDefault()
      // submitToApi(formData)
      console.log(query)
      setPick(query)
  }



  return (
    <div className="App">
      <header>
        <h1>Search more options</h1>
        <div className='wrap'>
        <form onSubmit={handleSubmit} class="search">
        <input
          class="searchTerm" 
          value={query}
          type="text"
          name="title"
          placeholder='Title'
          onChange={e => setQuery(e.target.value)}
        />
        <input
          class="searchButton"
          type="submit"/>
        </form>
        </div>
      </header>
      
      <List data={data} pick={pick}/>
    </div>
  );
}

export default App;
