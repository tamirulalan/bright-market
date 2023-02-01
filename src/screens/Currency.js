// import React from 'react'
import React, { useEffect, useState } from "react";

const Currency = () => {

    useEffect(() => {
    console.log('hani')
      }, []);
  return (
    <div>
      <select className="custom-select">
        <option value="">12</option>
      </select>
    </div>
  )
}

export default Currency
