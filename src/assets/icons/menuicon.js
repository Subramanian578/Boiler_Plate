import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Menu(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
      {...props}
    >
      <Path d="M120-240v-80h720v80H120zm0-200v-80h720v80H120zm0-200v-80h720v80H120z" />
    </Svg>
  )
}

export default Menu
