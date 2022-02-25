import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Header from './views/Header';
import Login from './views/Login';
import Register from './views/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './views/Profile';
import NewProfile from './views/NewProfile';
import EditProfile from './views/EditProfile';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProfileProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <ProtectedRoute exact path="/profile">
                <Profile />
              </ProtectedRoute>
              <ProtectedRoute exact path="/new-profile">
                <NewProfile />
              </ProtectedRoute>
              <ProtectedRoute exact path="/profile/edit">
                <EditProfile />
              </ProtectedRoute>
            </Switch>
          </BrowserRouter>
        </ProfileProvider>
      </UserProvider>
    </div>
  );
}

export default App;
