import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { UserFeed } from './pages/UserFeed';


function App() {
 return (
   <Router>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login />} />
     <Route path='/userfeed' element={<UserFeed />} />
     </Routes>
   </Router>
 );
}

export default App;
