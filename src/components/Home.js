import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import CSVReader from 'react-csv-reader'
import axios from 'axios';


const home = () => {
	const handleForce = data => {
	  console.log(data);
	  	const patients_ids = [];
      const headers = {
      	'Content-Type': 'application/json',
      	'User-Token': 'hjjjjjjjjjjjjjj'
      }
      axios.post(`http://localhost:4000/patients`, data, {
	      headers: headers
	      })
      window.location = "/patients"
			};
    return (
      <div className="container">
      	<div><br/><br/>
      		<center>
				    <CSVReader
				      cssClass="react-csv-input"
				      label="Select CSV"
				      onFileLoaded={handleForce}
				    />
				  </center>  
			  </div>  
		  </div>
    )
}
 
export default home;