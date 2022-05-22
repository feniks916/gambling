import React from "react"; 

import "./App.css"; 
import { FallBackList } from "./components/FallBackList";
import { ErrorBoundary } from "./ErrorBoundary";

const ListLazy = React.lazy(() => "poker/PokerApp");

function App() {
  return (
    <div className="App"> 
          <ErrorBoundary error={'error'} fallback={<FallBackList />} loading={'loading...'}>
                <ListLazy /> 
          </ErrorBoundary> 
    </div>
  );
}

export default App;
