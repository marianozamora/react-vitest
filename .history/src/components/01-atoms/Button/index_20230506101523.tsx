// import React from "react"
import { InputText, LabelInput, Bar, Highlight } from './Input.styles'

const Input = (params) => {
  return <div style={{ position: "relative", margin: "0.5em auto", width: "100%" }}>
      <InputText {...params} />
      <Highlight />
      <Bar />
      <LabelInput>
        {params.label}
      </LabelInput>
    </div>;}

export default Input
