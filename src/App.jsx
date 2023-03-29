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
        path: "/games",
        element: <GamesPage />
      },
      {
        path: "/bosses",
        element: <BossesPage />,
      },
      {
        path: "/bosses/boss",
        element: <BossPage />
      }, 
      {
        path: "/bosses/createBoss",
        element: <BossCreatePage />
      }, 
      {
        path: "/bosses/boss/updateBoss",
        element: <BossUpdatePage />
      },
      {
        path: "/games/game",
        element: <GamePage />
      }, 
      {
        path: "/games/createGame",
        element: <GameCreatePage />
      }, 
      {
        path: "/games/game/updateGame",
        element: <GameUpdatePage />
      },
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
