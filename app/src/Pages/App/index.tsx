import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Settings from "Pages/Settings";
import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";

// Settings
import Account from "Pages/Settings/Account";
import Billing from "Pages/Settings/Billing";
import Menu from "Pages/Settings/Menu";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Menu />} />
            <Route path="account" element={<Account />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
