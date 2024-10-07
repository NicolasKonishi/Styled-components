import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserFeed } from './pages/UserFeed';
import { Teste } from './pages';


function App() {
 return (
   <Router>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/userfeed' element={<UserFeed />} />
     <Route path='/teste' element={<Teste />} />

     </Routes>
   </Router>
 );
}

export default App;
