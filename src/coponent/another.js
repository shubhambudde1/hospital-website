import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import './f.css'

const Appp = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    // Fetch the health records from the Express API
    axios.get('http://localhost:3003/api/health-records')
      .then((response) => {
        setRecords(response.data);
        setFilteredRecords(response.data); // Initialize with all records
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If search term is empty, show all records
      setFilteredRecords(records);
    } else {
      // Filter records based on the search term
      const filtered = records.filter(record =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecords(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Health Records Table</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button style={{marginLeft: '90px' }}><Link to="/form">Add patient</Link></button>
      </div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Temperature</th>
            <th>Temperature Unit</th>
            <th>Systolic</th>
            <th>Diastolic</th>
            <th>Heart Rate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.temperature}</td>
              <td>{record.temperature_unit}</td>
              <td>{record.systolic}</td>
              <td>{record.diastolic}</td>
              <td>{record.heart_rate}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Appp;
