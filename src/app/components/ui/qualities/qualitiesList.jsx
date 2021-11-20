import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualitiesArray }) => {
  const { isLoading, getQualities } = useQualities();
  const qualities = qualitiesArray.map((id) => {
    return getQualities(id);
  });
  if (!isLoading) {
    return (
      <>
        {qualities.map((qual) => (
          <Quality key={qual._id} {...qual} />
        ))}
      </>
    );
  } else {
    return "Loading...";
  }
};

QualitiesList.propTypes = {
  qualitiesArray: PropTypes.array
};

export default QualitiesList;
