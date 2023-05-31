import { ToastContainer } from "react-toastify";
import { UserProvider } from "./components/context/contextUser";

import { RoutesMain } from "./components/routes";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
       
          <RoutesMain />
        
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
