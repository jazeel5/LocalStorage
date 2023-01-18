import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit({value,onEdit}) {
  const params = useParams()
  const [single, setSingle] = useState({})
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")


  useEffect(() => {
    return (
      setSingle(Object.assign({}, ...(value.filter((e) => e.emp_id == params.id))))
    )
  }, [])

  const index=(value.findIndex((e) => e.emp_id ==params.id))



  const editSubmit = (e) => {
    e.preventDefault();
    onEdit(single,index)
    navigate("/")
  }
  console.log(params.id)
  console.log(index)

  const OnChange = (e) => {
    setSingle({...single, [e.target.name]:e.target.value})
    console.log(single)
  }

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <form onSubmit={editSubmit} method="POST" style={{ width: "500px", marginRight: "auto", marginLeft: "auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Edit Form</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
            <input type="text" className="form-control" name="name" onChange={OnChange} value={single.name}  id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
            <input type="text" name='phone' onChange={OnChange} value={single.phone} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="a" className="form-label">Email</label>
            <input type="email" name='email' onChange={OnChange} value={single.email} className="form-control" id="a" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>


    </div>
  )
}
