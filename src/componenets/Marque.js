import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
    let salesinfo='Flash Sales!!! 👞 👠 👟 🧣 👗 '
  return (
    <div>
        <Marquee speed ={60} gradient={false} style={{backgroundColor:'', color:'dark'}}>
            <h2>{salesinfo}</h2>
        </Marquee>
    </div>
  )
}

export default Marque