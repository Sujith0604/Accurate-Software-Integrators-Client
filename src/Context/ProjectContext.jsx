import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const projectContext = createContext();

const Project = ({ children }) => {
  const [projectContent, setProjectContent] = useState();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/project");
      setProjectContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <projectContext.Provider
      value={{ projectContent, setProjectContent, loading }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default Project;
