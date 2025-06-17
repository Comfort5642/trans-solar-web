
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BoreholesDrilling from "./pages/services/BoreholesDrilling";
import SolarPumps from "./pages/services/SolarPumps";
import BoreholeEquipping from "./pages/services/BoreholeEquipping";
import SteelTanks from "./pages/services/SteelTanks";
import HydroSurveys from "./pages/services/HydroSurveys";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/borehole-drilling" element={<BoreholesDrilling />} />
          <Route path="/services/solar-pumps" element={<SolarPumps />} />
          <Route path="/services/borehole-equipping" element={<BoreholeEquipping />} />
          <Route path="/services/steel-tanks" element={<SteelTanks />} />
          <Route path="/services/hydro-surveys" element={<HydroSurveys />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
