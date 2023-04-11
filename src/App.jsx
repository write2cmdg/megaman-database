import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Component imports
import NavBar from "./components/NavBar";

//Pages imports
import BossesPage from "./pages/BossesPage";
import BossPage from "./pages/BossPage";
import BossUpdatePage from "./pages/BossUpdatePage";
import BossCreatePage from "./pages/BossCreatePage";
import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import GameCreatePage from "./pages/GameCreatePage";
import GameUpdatePage from "./pages/GameUpdatePage";

//Library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//layouts imports
import Main from "./layouts/Main";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/allGames",
        element: <GamesPage />
      },
      {
        path: "/allBosses",
        element: <BossesPage />,
      },
      {
        path: "/oneBoss/:id",
        element: <BossPage />
      }, 
      {
        path: "/createBoss",
        element: <BossCreatePage />
      }, 
      {
        path: "/updateBoss/:id",
        element: <BossUpdatePage />
      },
      {
        path: "/deleteBoss/:id",
        element: <p>Boss Deleted</p>
      },
      {
        path: "/oneGame/:id",
        element: <GamePage />
      }, 
      {
        path: "/createGame",
        element: <GameCreatePage />
      }, 
      {
        path: "/updateGame/:id",
        element: <GameUpdatePage />
      },
      {
        path: "/deleteGame/:id",
        element: <p>Game Deleted</p>
      }
    ]
  },
])

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;
