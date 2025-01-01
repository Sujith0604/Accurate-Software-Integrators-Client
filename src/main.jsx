import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Page from "./Context/PageContext.jsx";
import Testimony from "./Context/TestimonyContext.jsx";
import Project from "./Context/ProjectContext.jsx";
import Service from "./Context/ServiceContext.jsx";
import Tech from "./Context/TechstackContext.jsx";
import WhyUs from "./Context/WhyUsContext.jsx";
import Developer from "./Context/DeveloperContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page>
      <Testimony>
        <Project>
          <Service>
            <Tech>
              <Developer>
                {" "}
                <WhyUs>
                  <App />
                </WhyUs>
              </Developer>
            </Tech>
          </Service>
        </Project>
      </Testimony>
    </Page>
  </StrictMode>
);
