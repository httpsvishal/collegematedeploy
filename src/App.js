import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllColleges from './pages/AllColleges';
import Collegepage from './pages/Collegepage';
import ApplyPage from './pages/ApplyPage';
import SuccesPage from './pages/SuccessPage';
import Aboutpage from './pages/Aboutpage';
import SearchCollegePage from './pages/SearchedCollegePage';
import PrivacyPage from './pages/Privacypage';

function App() {

  return (
    <div className="App me-0">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/colleges" element={<AllColleges />} />
          <Route path="/colleges/:collegeId" element={<Collegepage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/success" element={<SuccesPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/colleges/search/:searchQuery" element={<SearchCollegePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
