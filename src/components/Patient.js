import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import CSVReader from 'react-csv-reader'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      patients: []
    }
  }

  componentDidMount() {
  	const headers = {
    	'Content-Type': 'application/json',
    	'User-Token': 'hjjjjjjjjjjjjjj'
    }
    axios.get(`http://localhost:4000/patients`,{
	      headers: headers
	   })
    .then(response => {
      this.setState({ patients: response.data.data.patients });
    })
  }

  render() {
    const { error, patients} = this.state;
    const allrecord = [];
      {patients.map((patient, index) =>
        <div key={index}>
          { allrecord.push({id: patient.id, name: patient.name, number: patient.number, description: patient.description})
          }
        </div>
      )}
      this.state = { allrecord };
      const data = {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Number',
            field: 'number',
            sort: 'false',
            width: 150
          },
          {
            label: 'Description',
            field: 'description',
            sort: 'false',
            width: 150
          },
        ],
        rows: allrecord
      };


    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
	      <div className="container">
	        <div><br/>
	          <h2>Patients List</h2>
	          <MDBDataTable
	            small
	            striped
	            bordered
	            hover
	            data={data}
	          />
	        </div>
	      </div>  
      )
    }
  }
}

export default Patient;