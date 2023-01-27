import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './Form';
import Grid from './Grid';

const App = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('');

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <Form
            onFormSubmit={(dataSet) => {
              setSelectedDataSet(dataSet);
            }}
          />
        )}
      />
      <Route
        path="/grid"
        render={() => <Grid selectedDataSet={selectedDataSet} />}
      />
    </Router>
  );
};

export default App;