import React from "react";

const HappyBanner = ({ attempts }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{attempts} guess(es)</strong>.
      </p>
    </div>
  );
};

export default HappyBanner;
