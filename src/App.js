import React,{useState, useEffect} from 'react';
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotels';
import Subscription from './components/Subscription';
import './App.css'

const App = () => {

  const [data, setData] = useState([])
  

    const fetchData = () => {
     
      fetch('api/hotels')
       .then(res =>res.json())
       .then(data =>{
         setData(data)
       })
       .catch(function(){})
  };
  useEffect(() => {
    fetchData()  
  },[])
  
  return (
    <div className="App">
     <h1>Hotels</h1>
     {data ? data.map((item, i) => <Hotel
                                    key={i}
                                    item={item}
     />)
     : <LoadingMask/>}
      
      <Subscription/>
    </div>
  )
}

export default App
