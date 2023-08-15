import { Routes, Route,} from "react-router-dom"
import Red from './Red' 
import Blue from './Blue'  
import Pink from './Pink'
import Home from './Home'
function MainSec() {
    return (
<div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/pink" element={<Pink />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} /> {/* Add a Route for the Home component */}
        </Routes>
      </div>
    )
}

export default MainSec