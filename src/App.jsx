import React from 'react'
import { Card } from './Components/Card/Card'
import {data} from './Components/Card/Data'

function App() {
  return (
    <>
      {data ? ( 
          data.map((e, i) => {
          return (
            <Card imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
          );
        })
      ) : (
        <h1>Data not fetch!!</h1>
      )}
    </>
  )


}

export default App

