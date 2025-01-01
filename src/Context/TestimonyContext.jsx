import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const testimonyContext = createContext();

const Testimony = ({ children }) => {
  const [testimonyContent, setTestimonyContent] = useState();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/testimony");
      setTestimonyContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <testimonyContext.Provider
      value={{ testimonyContent, setTestimonyContent, loading }}
    >
      {children}
    </testimonyContext.Provider>
  );
};

export default Testimony;
