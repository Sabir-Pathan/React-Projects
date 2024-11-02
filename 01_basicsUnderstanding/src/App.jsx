import ChangeObject from "./assets/ChangeObject"
import ChangeArray from "./assets/Components/ChangeArray"
import Cards from "./assets/Components/Cards"
import Counter from "./assets/Components/Counter"
import Propes from "./assets/Components/Propes"

function App() {


  return ( 
  <>
  {/* <Cards />  */}
    {/* <Counter/> */}
    
    {/* <ChangeObject /> */}
    {/* <ChangeArray /> */}

  
    <Propes text='Show More' colorName="bg-blue-500" />
    <Propes text='No More' colorName="bg-red-700" />
    <Propes text='Download Now' colorName="bg-green-700" />
   
  </>
  )
}

export default App
