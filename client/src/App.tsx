import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import { Login, Board } from './pages';
import { useUser } from './hooks';
import Create from './pages/Create';
import { AppBar } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedLayout />}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Board />
                </RequireAuth>
              }
            />
            <Route
              path="/create"
              element={
                <RequireAuth>
                  <Create />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Layout() {
  return <Outlet />;
}
function ProtectedLayout() {
  return (
    <>
      <div className="app-nav">
        <AppBar />
      </div>
      <Outlet />
    </>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let { isLoggedIn } = useUser();
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
