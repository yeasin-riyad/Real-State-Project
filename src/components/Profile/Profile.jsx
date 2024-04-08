import { Animated } from "react-animated-css"


const Profile = () => {
  return (
    <div>

<Animated 
         animationIn="fadeInDown" 
         animationOut="zoomOut" 
         animationInDuration={1000} 
         animationOutDuration={1000} 
         isVisible={true}
      >
          <h1 style={{backgroundColor: 'red'}}>TESTE 1</h1>
      </Animated>
      </div>
  )
}

export default Profile