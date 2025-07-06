import React from 'react'
import UserClass from './UserClass'
import User from './User'

// const About = () => {
//   return (
//     <div>
//       about us
//       <User name={'Ruchi Agrawal'} location={'Dahod'}></User>
//       <h4> class based component</h4>
//       <UserClass name={'Ruchi Agrawal'} location={'Dahod'}/>
//     </div>
//   )
// }

class About extends React.Component {
  constructor(props){
    super(props)
  }

  render()
  {
    return (
      <div>
        about us
        {/* <User name={"Ruchi Agrawal"} location={"Dahod"}></User> */}
        <h4> class based component</h4>
        <UserClass name={"Ruchi Agrawal"} location={"Dahod"} />
      </div>
    );
  }
}

export default About
