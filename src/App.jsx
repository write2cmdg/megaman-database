import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

//Pages imports
import BossesPage from "./pages/BossesPage";
import BossPage from "./pages/BossPage";
import BossByNamePage from "./pages/BossByNamePage";
import BossUpdatePage from "./pages/BossUpdatePage";
import BossCreatePage from "./pages/BossCreatePage";
import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import GameCreatePage from "./pages/GameCreatePage";
import GameUpdatePage from "./pages/GameUpdatePage";
import GameByName from "./pages/GameByName";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

//Library imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//layouts imports
import Main from "./layouts/Main";

//routes
import ProtectedRoutes from "./routes/ProtectedRoutes";

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<Main />}>

      <Route
        path="/login"
        element={
          <Login />
        }
      />
      <Route
        path="/register"
        element={
          <Register />
        }
      />
      <Route
        path="/allGames"
        element={
          <ProtectedRoutes>
            <GamesPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/allBosses"
        element={
          <ProtectedRoutes>
            <BossesPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/oneBoss/:id"
        element={
          <ProtectedRoutes>
            <BossPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/oneBossByName/:id"
        element={
          <ProtectedRoutes>
            <BossByNamePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/createBoss"
        element={
          <ProtectedRoutes>
            <BossCreatePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/updateBoss/:id"
        element={
          <ProtectedRoutes>
            <BossUpdatePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/deleteBoss/:id"
        element={
          <p>Boss Deleted</p>
        }
      />
      <Route
        path="/oneGame/:id"
        element={
          <ProtectedRoutes>
            <GamePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/oneGameByName/:id"
        element={
          <ProtectedRoutes>
            <GameByName />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/createGame"
        element={
          <ProtectedRoutes>
            <GameCreatePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/updateGame/:id"
        element={
          <ProtectedRoutes>
            <GameUpdatePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/deleteGame/:id"
        element={
          <p>Game Deleted</p>
        }
      />
      <Route
        path="/*"
        element={
          <NotFound />  
        }
      />
    </Route>
  )

);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
