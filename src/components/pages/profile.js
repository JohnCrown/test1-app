import React from "react";


import './profile.css';

const ProfilePage = () => {
    
    return(
      <div className="text-primary">
        <h2> This page is full of secrets!</h2>
        <table className="table table-dark text-center ">
          <thead>
            <tr>

              <th scope="col" className="text-danger">Name Props</th>
              <th scope="col" className="text-danger">Value</th>

            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Name</td>
              <td>John</td>

            </tr>
            <tr>

              <td>Age</td>
              <td>100</td>


            </tr>
            <tr>

              <td>Education</td>
              <td>High</td>


            </tr>

            <tr>

              <td>Hobby</td>
              <td>Sport</td>


            </tr>
            <tr>

              <td colSpan="2" className="text-success">Something other things...hello Pavel ^^" </td>

            </tr>

          </tbody>
        </table>
      </div>

      );
    }
    
    // return <h2 className="text-danger"> You should not see this!!!Follow to Login</h2>
    



export default ProfilePage;