import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      })
  }, [])

  return (
    <>
    <div>
    {myData.map((posts)=>{
        const {userId , title , body }= posts;
        return (
          <div key={userId}>
          <h2>{title}</h2>
          <h3>{body}</h3>
                </div>
        )
      
      
      })
    }
    </div>
   
      


      

      <p>`Our users are ${myData}`</p>

    </>
  )
}

export default App
