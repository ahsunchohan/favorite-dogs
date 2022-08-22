import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Features/Favorites";
import Layout from "./Layout";

function App({ notify }) {
  const LOCAL_STORAGE_DOGS_NAME = "FAVORITE_DOGS_LIST";
  const localStorageDogsList = localStorage.getItem(LOCAL_STORAGE_DOGS_NAME);

 

  let parseDogsList;

  const storeDogs = (store) => {
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME, store);
  };

  if (!localStorageDogsList) {
    localStorage.setItem(LOCAL_STORAGE_DOGS_NAME, JSON.stringify([]));
    parseDogsList = [];
  } else {
    parseDogsList = JSON.parse(localStorageDogsList);
  }

  const [favoriteDogs, setFavoriteDogs] = useState(parseDogsList);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favoriteDogs={favoriteDogs}
                setFavoriteDogs={setFavoriteDogs}
                storeDogs={storeDogs}
                notify={notify}
              />
            }
          />
          <Route
            exact
            path="/favorites"
            element={
              <Favorites
                storeDogs={storeDogs}
                parseDogsList={parseDogsList}
                notify={notify}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
