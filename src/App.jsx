import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";

//Component imports
import NavBar from "./components/NavBar";

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

//Library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//layouts imports
import Main from "./layouts/Main";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";


const navigate = useNavigate();



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/allGames",
        element: 
        <ProtectedRoutes>
        <GamesPage />
        </ProtectedRoutes>
      },
      {
        path: "/allBosses",
        element: 
        <ProtectedRoutes>
        <BossesPage />
      </ProtectedRoutes>
      },
      {
        path: "/oneBoss/:id",
        element: 
        <ProtectedRoutes>
          <BossPage />
        </ProtectedRoutes>
      }, 
      {
        path: "/oneBossByName/:id",
        element: 
        <ProtectedRoutes>
        <BossByNamePage />
      </ProtectedRoutes>
      }, 
      {
        path: "/createBoss",
        element:
        <ProtectedRoutes>
         <BossCreatePage />
        </ProtectedRoutes>
      }, 
      {
        path: "/updateBoss/:id",
        element: 
        <ProtectedRoutes>
          <BossUpdatePage />
        </ProtectedRoutes>
      },
      {
        path: "/deleteBoss/:id",
        element:
         <p>Boss Deleted</p>
      },
      {
        path: "/oneGame/:id",
        element: 
        <ProtectedRoutes>
        <GamePage />
      </ProtectedRoutes>
      }, 
      {
        path: "/oneGameByName/:id",
        element: 
        <ProtectedRoutes>
        <GameByName />
      </ProtectedRoutes>
      }, 
      {
        path: "/createGame",
        element: 
        <ProtectedRoutes>
         <GameCreatePage />
        </ProtectedRoutes>
      }, 
      {
        path: "/updateGame/:id",
        element: 
        <ProtectedRoutes>
         <GameUpdatePage />
        </ProtectedRoutes>
      },
      {
        path: "/deleteGame/:id",
        element: 
         <p>Game Deleted</p>,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/notfound",
    // element: <Navigate to='https://megamandb-api.onrender.com/' replace />
    element: <NotFound />
  },
  {
    path: "/*",
    // element: <Navigate to='https://megamandb-api.onrender.com/' replace />
    element: navigate("/")
  }
])

function App() {

  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;
