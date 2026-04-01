import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Rankings from "./pages/Rankings";
import Athletes from "./pages/Athletes";
import AthleteProfile from "./pages/AthletProfile";
import Register from "./pages/Register";
import News from "./pages/News";
import About from "./pages/About";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Asosiy Wrapper qo'shdik: bg-background klassi bilan */}
      <div className="bg-background min-h-screen text-foreground selection:bg-accent/30">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/rankings" element={<Rankings />} />
              <Route path="/athletes" element={<Athletes />} />
              <Route path="/athlete/:id" element={<AthleteProfile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/news" element={<News />} />
              <Route path="/media" element={<Media />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
