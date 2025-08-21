import React from 'react'
export default function TopBar(){
  return (
    <header className="card" role="banner" aria-label="App header">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div>
          <h1>Quote of the Day</h1>
          <div className="muted">fresh, simple motivation — one click</div>
        </div>
        <div className="badge" aria-label="Privacy friendly">No login · Local only</div>
      </div>
    </header>
  )
}