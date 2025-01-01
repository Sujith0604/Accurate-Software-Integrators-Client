import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const developerContext = createContext();

const Developer = ({ children }) => {
  const [developerContent, setDeveloperContent] = useState();

  const [loading, setLoading] = useState(false);

  console.log(developerContent);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/developer");
      setDeveloperContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <developerContext.Provider
      value={{ developerContent, setDeveloperContent, loading }}
    >
      {children}
    </developerContext.Provider>
  );
};

export default Developer;
