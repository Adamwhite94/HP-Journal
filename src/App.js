
import Home from './Components/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client = {queryClient}>
      <Home />
      </QueryClientProvider>
  );
}

export default App;
