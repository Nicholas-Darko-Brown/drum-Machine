import React, { useState } from 'react';
import './App.css';
import SoundPad from './components/SoundPad/SoundPad';
import bankOne from './util/BeatBank/BeatBank';


const App = () => {
  const [volume, setVolume] = useState(1)
  const [record, setRecord] = useState('')

  const playRecord = () => {

    let index = 0
    let recordArr = record.split(" ")

    const interval = setInterval(() => {
        const audio = document.getElementById(recordArr[index])
        audio.time = 0
        audio.play()
        audio.volume = volume
        index++
      }, 300)

      setTimeout(() => clearInterval(interval), 300 * recordArr.length - 1)
    }

  return (
    <div id="drum-machine" className="App container fw-bold text-dark mt-5 shadow-lg p-3 mb-5 bg-info rounded">
      <div id="display">
        <h1>Drum Machine</h1> 
          <div>
            {bankOne.map((bank) => {
              return <SoundPad key={bank.id} bank={bank} volume={volume} setRecord={setRecord} />
            })}
          </div>

          <div>
            <input type='range' value={volume} onChange={(e) => setVolume(e.target.value)} max='1' min='0' step='0.1' />
          </div>

          <div> {record} </div>

          <div>
            {record && (
              <div>
                <button className='btn btn-success m-4' onClick={playRecord}>Play</button>
                <button className='btn btn-danger' onClick={() => setRecord('')}>Delete</button>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}

export default App;
