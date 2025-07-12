import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<h2>Home...</h2>} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
