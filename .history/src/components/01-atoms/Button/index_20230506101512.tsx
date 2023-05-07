// import React from "react"
import { InputText, LabelInput, Bar, Highlight } from './Input.styles'
import Tooltip from '../../03-components/Tooltip'

const Input = (params) => {
  return <div style={{ position: "relative", margin: "0.5em auto", width: "100%" }}>
      <InputText {...params} />
      <Highlight />
      <Bar />
      <LabelInput>
        {params.label}
        {params.hasTooltip && <Tooltip message={params.tooltipMessage}>
            <i className="fa fa-info-circle" />
          </Tooltip>}
      </LabelInput>
    </div>;}

export default Input
