import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Transactions from './pages/transactions';
import Database from './pages/database';
import Dash from './components/dash';
import Layout from './pages/layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard/'                   element={<Layout />}>
                    <Route index                            element={ <Dashboard />} />
                    <Route path='/dashboard/Users'          element={<Users />} />
                    <Route path='/dashboard/Transactions'          element={<Transactions />} />
                    <Route path='/dashboard/Database'          element={<Database />} />
                    {/* <Route path='/dashboard/Settings'       element={<Settings />} /> */}
                </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
