import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const serviceContext = createContext();

const Service = ({ children }) => {
  const [serviceContent, setServiceContent] = useState();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/whatwedo");
      setServiceContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <serviceContext.Provider
      value={{ serviceContent, setServiceContent, loading }}
    >
      {children}
    </serviceContext.Provider>
  );
};

export default Service;
