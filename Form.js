import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [selectedDataSet, setSelectedDataSet] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(selectedDataSet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="data-set-select">Select a data set:</label>
      <select
        id="data-set-select"
        value={selectedDataSet}
        onChange={(event) => setSelectedDataSet(event.target.value)}
      >
        <option value="">Select a data set</option>
        <option value="data-set-1">Data Set 1</option>
        <option value="data-set-2">Data Set 2</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;