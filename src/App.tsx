import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Management from "./pages/Management.tsx";
import Developments from "./pages/Developments.tsx";
import Capital from "./pages/Capital.tsx";
import Advisory from "./pages/Advisory.tsx";
import About from "./pages/About.tsx";
import Search from "./pages/Search.tsx";
import PropertyDetail from "./pages/PropertyDetail.tsx";
import OasisEurope from "./pages/OasisEurope.tsx";
import OasisEuropeListings from "./pages/OasisEuropeListings.tsx";
import Insights from "./pages/Insights.tsx";
import InsightDetail from "./pages/InsightDetail.tsx";
import News from "./pages/News.tsx";
import FAQ from "./pages/FAQ.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/management" element={<Management />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/properties/:slug" element={<PropertyDetail />} />
          <Route path="/oasis-europe" element={<OasisEurope />} />
          <Route path="/oasis-europe/rentals" element={<OasisEuropeListings mode="rent" />} />
          <Route path="/oasis-europe/sales" element={<OasisEuropeListings mode="sale" />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/news" element={<News />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights/news" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
