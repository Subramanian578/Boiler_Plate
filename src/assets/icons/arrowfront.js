import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Arrowfront(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={"black"}
      {...props}
    >
      <Path d="M504-480L320-664l56-56 240 240-240 240-56-56 184-184z" />
    </Svg>
  )
}

export default Arrowfront
