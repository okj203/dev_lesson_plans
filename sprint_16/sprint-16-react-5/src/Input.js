import React from 'react'

export default function Input({handleFilter,getOnlyFrontend,getOnlyBackend,getAllNames}) {
  return (
    <div className="input-container">
        <h3 className="title">SELECT DEVELOPERS FOR YOUR TEAM</h3>
        <div className="filter-container">
            <input onChange={handleFilter} placeholder="Enter a name"/>
            <button onClick={getAllNames}>All</button>
            <button className="frontend-dev" onClick={getOnlyFrontend}>Frontend Devs</button>
            <button className="backend-dev" onClick={getOnlyBackend}>Backend Devs</button>
        </div>
      
    </div>
  )
}
