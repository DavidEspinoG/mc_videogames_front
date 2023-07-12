import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
    </Routes>
  </Router>
);

export default App;
