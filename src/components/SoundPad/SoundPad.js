import React, { useState, useEffect } from "react"


const SoundPad = ({ bank, volume, setRecord }) => {

    const [color, setColor] = useState(false)
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress)
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
      }
    })
  
    const handleKeyPress = e => {
      if(e.keyCode === bank.keyCode) {
        sound()
      }
    }
    
  
    const sound = () => {
      const audio = document.getElementById(bank.keyTrigger)
      setColor(true)
      setTimeout(() => setColor(false), 200)
      audio.time = 0
      audio.play()
      audio.volume = volume
      setRecord(prev => prev + bank.keyTrigger + ' ')
    }
  
    return (
      <div id={bank.id} className={`btn btn-secondary p-4 m-3 drum-pad ${color && "btn-warning"}` } onClick={sound}>
        <audio id={bank.keyTrigger} src={bank.url} className="clip" />
        {bank.keyTrigger}
      </div>
    ) 
  }

  export default SoundPad;