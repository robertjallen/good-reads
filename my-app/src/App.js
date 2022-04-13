import './App.css';
import {useEffect, useState} from 'react'
import {fetchHarry} from "./utils/api"
import {search} from "./utils/api"
import List from './components/List'
import Search from './components/Search'

function App() {

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
  }



  return (
    <div className="App">
      <h1>Search more options</h1>

      <form onSubmit={handleSubmit}>
		  <input 
        value={query}
        type="text"
        name="title"
        placeholder='Title'
        onChange={e => setQuery(e.target.value)}
      />

		  <input type="submit" />
		  </form>
      <hr></hr>
      <List data={data}/>
    </div>
  );
}

export default App;
