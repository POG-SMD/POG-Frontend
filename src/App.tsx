import { RouterProvider } from "react-router-dom";
import "./i18n";
import { routes } from "./routes";
import { AuthProvider } from "./contexts";
import { Toaster } from "sonner";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

function App() {
  return (
    <>
      <AuthProvider>
        <CustomProvider>
          <RouterProvider router={routes} />
          <Toaster
            toastOptions={{
              classNames: {
                success: "bg-green-400 text-white border-columnBackgroundColor",
                error:
                  "bg-rose-500 text-white border-columnBackgroundColor text-gray-200",
              },
            }}
          />
        </CustomProvider>
      </AuthProvider>
    </>
  );
}

export default App;
