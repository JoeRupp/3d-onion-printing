import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
};

export default App;
