import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function View({ value, onDelete }) {
    
    const [delete_item, setDelete_item] = useState([]);

    console.log("dddel : "+delete_item)
    return (
        <>

            <div style={{ backgroundColor: "lightblue", width: "70%", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                Click Here to <Link to="/insert">INSERT</Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Email</th>

                            <th scope="col">View</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        {value.length === 0 && "No Data"}
                        {value.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.emp_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={`single-view/${item.emp_id}`}>View</Link></td>
                                    <td><Link to={`edit/${item.emp_id}`}>Edit</Link></td>
                                    <td><Link data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={()=>setDelete_item(item)}>Delete</Link></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>



                 {/* <!-- Modal --> */}
                 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    are you sure!!!
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=>onDelete(delete_item)} data-bs-dismiss="modal">Yes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





            </div>

        </>
    )
}




