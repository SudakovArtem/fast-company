import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import qualitiesService from "../services/qualities.service";
import { toast } from "react-toastify";

const qualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(qualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getQualitiesList();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  function errorCather(error) {
    const { message } = error.response.data;
    setError(message);
  }

  function getQualities(id) {
    return qualities.find((item) => item._id === id);
  }

  async function getQualitiesList() {
    try {
      const data = await qualitiesService.get();
      console.log(data);
      setQualities(data.content);
      setLoading(false);
    } catch (error) {
      errorCather(error);
    }
  }

  return (
    <qualitiesContext.Provider value={{
      isLoading,
      qualities,
      getQualities
    }}>
      {children}
    </qualitiesContext.Provider>
  );
};

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
