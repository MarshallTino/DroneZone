import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import useToken from "./hooks/useToken/useToken";
function App() {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
}

export default App;
