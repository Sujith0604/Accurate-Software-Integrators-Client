import { createContext, useState, useEffect } from "react";
import axios from "../Axios";

export const pageContext = createContext();

const Page = ({ children }) => {
  const [pagesContent, setPageContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios("/page");
      setPageContent(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <pageContext.Provider value={{ pagesContent, setPageContent, loading }}>
      {children}
    </pageContext.Provider>
  );
};

export default Page;
