// import { useState } from 'react'
import Header from "./components/Header"
import { ControlImgStyle } from "./components/styles/ControlImgStyle"
import { ListStyle } from "./components/styles/ListStyle"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', margin: "53px 10%" }}>
        <div style={{ width: "38%" }}>
          <img style={{ width: "100%", borderRadius: "20px", margin: "15px" }} src="src/assets/image-product-1.jpg" alt="" />
          <div style={{ display: 'flex', margin: "" }}>
            <ControlImgStyle active src="src/assets/image-product-1-thumbnail.jpg" />
            <ControlImgStyle src="src/assets/image-product-2-thumbnail.jpg" />
            <ControlImgStyle src="src/assets/image-product-3-thumbnail.jpg" />
            <ControlImgStyle src="src/assets/image-product-4-thumbnail.jpg" />
          </div>
        </div>
        <div style={{ width: "50%", margin: "30px" }}>
          
          <ListStyle>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer </ListStyle>
        </div>
      </div>
    </div>
  )
}

export default App