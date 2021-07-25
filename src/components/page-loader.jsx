import React from 'react'
import { RingLoader } from "react-spinners";

function PageLoader(props) {
  return (
    <div className="sweet-loading">
      <RingLoader
        size={50}
        color={props.color}
        loading={props.loading}
      />
    </div>
  )
}

export default PageLoader;

