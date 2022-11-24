
import logo from "../src/assets/powered.png"
import style from "../src/App.module.css"
import { useState } from "react"

import { Levels } from "./helpers"
import leftarrow from "../src/assets/leftArrow.png"
import 'react-toastify/dist/ReactToastify.css'

import { CalculatedIMC } from "./helpers"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [toshow, setToShow] = useState(false)
  const [heigth, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [IMC, setIMC] = useState(0)
 


  function resetToShow() {
      
      setHeight(0)
      setWeight(0)
      setIMC(0)
      setToShow(false)
  }

  function handlerButton() {


    if (heigth === 0 || weight === 0) {
      toast.error("Preencha os campos obrigatórios !")
    } else {
      setToShow(true)
      setIMC(parseFloat(CalculatedIMC(heigth, weight).toFixed(2)));

    }


  }

  function setHeightField(e: number) {
    setHeight(e);
    console.log(heigth)
  }

  function setWeightField(e: number) {
    setWeight(e);
  }


  return (
    <div >
      <ToastContainer />
      <header>
        <div className={style.container}>
          <img src={logo} alt="" />
        </div>
      </header>
      <main>
        <div className={`${style.container} ${style.flex}`} >
          <div className={style.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p> IMC é a sigla para índice de massa corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa</p>
            <input type="number"
              value={heigth > 0 ? heigth : ""}
              onChange={e => { setHeightField(parseFloat(e.target.value)) }}

              placeholder="Informe a sua altura em metro"
              disabled={toshow ? true : false}
              
             
            />
            <input type="number"
              value={weight > 0 ? weight : ""}
              onChange={e => { setWeightField(parseFloat(e.target.value)) }}
              placeholder={heigth > 0 ? "" : "Informe o seu peso em kilos"}
              disabled={toshow ? true : false}
            />
            <button  disabled={toshow ? true : false} onClick={handlerButton}>Calcular</button>
          </div>
          <div className={(toshow ==false ? style.rightSide : style.rightSideBIG) }>
            <>
                {!toshow &&
                  Levels.map((e, index) =>
                    <div className={style.card} key={index} style={{ backgroundColor: e.color }} >
                      <div className={style.bgIMG}><img src={`../src/assets/${e.icon}.png`} alt="" /></div>
                      <h3>{e.title}</h3>
                      <p>{e.text}</p>
                    </div>
                  )}
                {toshow &&
                  Levels.map((e, index) => {
                    if (IMC > e.range[0] && IMC <= e.range[1]) {
                      return (
                        <div className={style.cardBIG} key={index} style={{ backgroundColor: e.color }} >
                          <div className={style.bgIMGBIG}><img src={`../src/assets/${e.icon}.png`} alt="" />
                          </div>
                          <h3 className={style.cardBIGTitle}>{e.title}</h3>
                          <p className={style.cardBIGp}>{e.text}</p>
                          <p className={style.cardBIGp}>O seu IMC é de {IMC}</p>
                          <div onClick={resetToShow} className={style.leftArrow}>
                            <img className={style.leftarrowIMG} src={leftarrow}   alt="" />
                          </div>
                        </div>
                        
                      )
                    }
                    
                  })
                
                
                }
              
            </>
          </div>
        </div>
      </main>


    </div>
  )
}

export default App
