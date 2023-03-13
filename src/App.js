import "./App.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import Rate from "./Rate";

const Queryclient = new QueryClient();

function App() {
  return (
    
    <QueryClientProvider client={Queryclient}>
      <Rate></Rate>
      </QueryClientProvider>
    );
   
   
}

export default App;