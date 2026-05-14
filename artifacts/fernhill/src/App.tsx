import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Proposal from "@/pages/proposal";
import Evidence from "@/pages/evidence";
import Delivery from "@/pages/delivery";
import GetInvolved from "@/pages/get-involved";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/proposal" component={Proposal} />
        <Route path="/evidence" component={Evidence} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/weddings" component={Proposal} />
        <Route path="/wakes" component={Proposal} />
        <Route path="/tea-room" component={Proposal} />
        <Route path="/cinema" component={Proposal} />
        <Route path="/community" component={Proposal} />
        <Route path="/about" component={Evidence} />
        <Route path="/contact" component={GetInvolved} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;