import React,{useState,useEffect} from 'react'
import './App.css';
import data from './Data';
import Input from './Input'
import MyTeam from './MyTeam'

function App() { 
  const [allNames,setAllNames]=useState([]);
  const [myTeam,setMyTeam]=useState([]);

useEffect(() => {
 const newData =[];
  for (let i=0;i<data.length;i++){
    newData.push({
      id:data[i].id,
      name:data[i].name,
      speciality:data[i].speciality,
      originalIndex:i
    })
    setAllNames(newData)
  }
}, [])





 const handleFilter=(e)=>{
    // console.log(e.target.value)
     let filtered=  data.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()))
     setAllNames(filtered)
 }
 
  const getOnlyFrontend=()=>{
   let filteredNames = data.filter(item=> item.speciality==="frontend")
   setAllNames(filteredNames)
  }
  const getOnlyBackend=()=>{
    let filteredNames = data.filter(item=> item.speciality==="backend")
    setAllNames(filteredNames)
  }
 
  const getAllNames=()=>{
    setAllNames(data)
  }

  const addToTeam=(dev)=>{
    // console.log(dev)
      let found = myTeam.some(item=>item.id === dev.id)

      if(myTeam.length===6){
        alert('You have reached to the maximum number of developers.')
      } else if(!found){
        setMyTeam([...myTeam,dev])
        let newList = allNames.filter(item=>item.id !== dev.id)
        setAllNames(newList)
      }
      
  }

  const removeFromTeam=(dev)=>{
    //  console.log(dev)
    let updatedTeam = myTeam.filter(item=>item.id !== dev.id)
    setMyTeam(updatedTeam)

    const firstPart = allNames.slice(0, dev.originalIndex);
    const secondPart = allNames.slice(dev.originalIndex)
    const final = [
      ...firstPart, dev ,...secondPart
    ]

    setAllNames(final)
  }


  return (
    <div>

        <Input handleFilter={handleFilter} getAllNames={getAllNames} getOnlyFrontend={getOnlyFrontend} getOnlyBackend={getOnlyBackend}/>
        <MyTeam myTeam={myTeam} removeFromTeam={removeFromTeam}/>
        <div className="names-container">
          {
            allNames.map(item=>{
              return <button onClick={()=>addToTeam(item)} className={item.speciality==="frontend" ? "frontend-dev" : "backend-dev" }>
                {item.name}</button>
            })
          }
        </div>

    </div>
    
  );
}

export default App;
