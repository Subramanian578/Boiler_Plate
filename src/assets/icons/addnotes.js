import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddNotes(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      {...props}
    >
      <Path d="M160-240v-480 480zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v132q-19-8-39.5-10.5t-40.5.5v-122H447l-80-80H160v480h324l-4 4v76H160zm400 80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560zm300-263l-37-37 37 37zM620-140h38l121-122-18-19-19-18-122 121v38zm141-141l-19-18 37 37-18-19z" />
    </Svg>
  )
}

export default AddNotes
