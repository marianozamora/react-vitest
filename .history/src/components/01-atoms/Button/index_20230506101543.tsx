// import React from "react"
import { InputText, LabelInput, Bar } from './Input.styles'

const Input = (params) => {
  return <div style={{ position: "relative", margin: "0.5em auto", width: "100%" }}>
      <InputText {...params} />
      <Bar />
      <LabelInput>
        {params.label}
      </LabelInput>
    </div>;}

export default Input
