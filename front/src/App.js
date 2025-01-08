import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/test");
        console.log("Données reçues :", response.data);
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test de Proxy</h1>
    </div>
  );
}

export default App;
