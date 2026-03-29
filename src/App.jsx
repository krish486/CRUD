import Form from "./components/Form"
import Navbar from "./components/Navbar"
import AllDetails from "./components/AllDetails"
import { useState } from "react"

const App = () => {



  let [update, setUpdate] = useState(null)

  let [toggle, setToggle] = useState(false)

  let [datas, setDatas] = useState(JSON.parse(localStorage.getItem("users")) || [])




  let deleteData = (id) => {
    let arr = datas.filter((elem) => {
      return (id !== elem.id)
    })
    setDatas(arr)
    localStorage.setItem("users", JSON.stringify(arr));
  }

  return (
    <div className="h-screen w-screen bg-gray-900 p-5">
      <Navbar props={setToggle} toggle={toggle} />
      {toggle ? <Form datas={datas} setDatas={setDatas} setToggle={setToggle} update={update} setUpdate={setUpdate} /> : <AllDetails datas={datas} deleteData={deleteData} setUpdate={setUpdate} setToggle={setToggle} />}

    </div>
  )
}

export default App
