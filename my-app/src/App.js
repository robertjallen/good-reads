import './App.css';
import {useEffect, useState} from 'react'
import {fetchHarry} from "./utils/api"
import List from './components/List';

function App() {

  const [data, setData] = useState([])

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


  return (
    <div className="App">
      <h1>Search more options</h1>
      <hr></hr>
      <List data={data}/>
    </div>
  );
}

export default App;
