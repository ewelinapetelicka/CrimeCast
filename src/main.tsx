import * as ReactDOM from 'react-dom/client'
import './index.css'
import "./index.css";
import App from "./App.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./api/query-client.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
);