import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Countdown from "./pages/Countdown";
import Preparing from "./pages/Preparing";
import Celebration from "./pages/Celebration";
import BirthdayCake from "./pages/BirthdayCake";
import SpecialMessages from "./pages/SpecialMessages";
import Memories from "./pages/Memories";
import SpecialLetter from "./pages/SpecialLetter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/preparing" element={<Preparing />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="/cake" element={<BirthdayCake />} />
          <Route path="/messages" element={<SpecialMessages />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/letter" element={<SpecialLetter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
