import "@styles/global.css";
import { children } from "react";
import Nav from "@components/nav";
import Provider from "@components/provider";

export const metadata = {
  title: "PromptAI",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>

        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
