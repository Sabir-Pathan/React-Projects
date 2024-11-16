import { useState } from 'react'
import ColorBtn from './assets/Components/ColorBtn'

function App() {
  const [color, setColor] = useState('bg-black')

  function colorChange (newColor){
    return setColor(newColor)
  }
  return (
    <>
    <div className={`w-full h-screen ${color} flex justify-center `}>
    <div className="w-[80vw] h-[7%] bg-zinc-200 flex items-center justify-center rounded-md gap-5 flex-wrap">
    
    <ColorBtn btnColor={'bg-red-600'} text='Red' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-blue-600'} text='Blue' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-green-600'} text='Green' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-yellow-400'} text='Yellow' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-gray-700'} text='Gray' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-pink-400'} text='Pink' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-indigo-700'} text='Indigo' btnHandler={colorChange}/>
    <ColorBtn btnColor={'bg-purple-700'} text='Purple' btnHandler={colorChange}/>
</div>

    </div>
    </>
  )
}

export default App
