import { QueryClientProvider, QueryClient } from "react-query";
import { setupWallets, WalletProvider } from "./components/WalletConnect";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
setupWallets();

const AppProviders = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>
        <WalletProvider>{children}</WalletProvider>
        <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
);

export default AppProviders;