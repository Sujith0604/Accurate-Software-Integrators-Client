import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const techContext = createContext();

const Tech = ({ children }) => {
  const [techContent, setTechContent] = useState();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/tech");
      setTechContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <techContext.Provider value={{ techContent, setTechContent, loading }}>
      {children}
    </techContext.Provider>
  );
};

export default Tech;
