import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
