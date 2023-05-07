// import React from "react"
import 'index.css'

const Input = (params) => {
  return <div style={{ position: "relative", margin: "0.5em auto", width: "100%" }}>
      <input {...params} />
      <Bar />
      <LabelInput>
        {params.label}
      </LabelInput>
    </div>;}

export default Input
