import { RouterProvider } from "react-router-dom";
import "./i18n";
import { routes } from "./routes";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
