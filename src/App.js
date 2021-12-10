import React, { useState } from "react";
import AppContext from "./AppContext";
import { renderRoutes } from "react-router-config";
import { getLocalStorage, setLocalStorage } from "./services/storage/LocalStorage";

function App({ route }) {
  const [user, setUser] = useState(JSON.parse(getLocalStorage("user")) || {})
  const updateUser = (value) => {
    setLocalStorage("user", value)
    setUser(value)
  }
  const [loading, setLoading] = useState(false)

  return (
      <AppContext.Provider value={{
        user,
        setUser: updateUser,
        loading,
        setLoading
      }}>
        <div className="App">
          {renderRoutes(route.routes)}
        </div>
      </AppContext.Provider>
  )
}

export default App;
