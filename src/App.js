import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View'
import Insert from './Component/Insert'
import Edit from './Component/Edit'
import { useState, useEffect } from 'react';
import SingleView from './Component/Single_View';

function App() {
  const [oldvalue, setOldvalue] = useState([]);

  let initvalue;
  if (localStorage.getItem("Employee") === null) {
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem("Employee"))
  }

  
// Insert ######################################################
  const onSubmit = (name, phone, email) => {
    console.log(name, phone, email)
    let emp_id = 101;
    if (value.length === 0) {
      emp_id = 101;
    }
    else {
      emp_id = value[value.length - 1].emp_id + 1
    }
    const details = {
      emp_id: emp_id,
      name: name,
      phone: phone,
      email: email
    }
    setValue([...value, details])

  }
  // ############################################################

  // Delete ################################################################
  const onDelete = (item) => {
    console.log("delete: " + JSON.stringify(item))
    setValue(value.filter((e) => {
      console.log(e)
      return e !== item
    }));
    localStorage.setItem("Employee", JSON.stringify(value))
  }
  // #######################################################################

  // Edit ################################################################
  const onEdit = (val,index) => {
    
    console.log(val)
    console.log(index)
    console.log(value.splice(index,1,val))
    localStorage.setItem("Employee",JSON.stringify(value))
    
  }
  // #######################################################################

  const [value, setValue] = useState(initvalue)
  useEffect(() => {
    localStorage.setItem("Employee", JSON.stringify(value))
  }, [value])
  

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<View value={value} onDelete={onDelete} />} />
            <Route exact path="/single-view/:id" element={<SingleView value={value}/>} />
            <Route exact path="/insert" element={<Insert onSubmit={onSubmit} />} />
            <Route exact path="/edit/:id" element={<Edit onEdit={onEdit} value={value} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
