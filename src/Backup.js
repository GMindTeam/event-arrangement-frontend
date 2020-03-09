// import React, { Component } from 'react';
// import './App.css';
// import { Table, Button } from 'reactstrap';
// import axios from 'axios';
// class Backup extends Component {
//    state = {
//       students: []
     
//    }
   
   
//    componentDidMount() {
      
//       axios.get('http://localhost:8000/api/student').then((response) => {
//          this.setState({
//             students: response.data
//          })
//       });
      
//    }
//    render() {
//          let students = this.state.students.map((student) =>{
//             return (
//                <tr>
//                   <td>{student.id}</td>
//                   <td>{student.name}</td>
//                   <td>{student.dob}</td>
//                   <td>{student.age}</td>
//                </tr>
//             )
//          });


//       return (
//          <div className="App container">
//             <Table>
//                <thead>
//                   <tr>
//                      <th>#</th>
//                      <th>Name</th>
//                      <th>Dob</th>
//                      <th>Age</th>
//                   </tr>
//                </thead>
//                <tbody>
//                  {students}
//                </tbody>
//             </Table>
//          </div>
//       );
//    }
// }

// export default App;
