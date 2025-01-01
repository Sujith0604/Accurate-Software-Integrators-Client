import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const whyUsContext = createContext();

const WhyUs = ({ children }) => {
  const [whyUsContent, setWhyUsContent] = useState();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/page");
      setWhyUsContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <whyUsContext.Provider value={{ whyUsContent, setWhyUsContent, loading }}>
      {children}
    </whyUsContext.Provider>
  );
};

export default WhyUs;
