import React from "react";

interface AlertMessage {
    message: string
}

const ShowAlert: React.FC<AlertMessage> = ({message}) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show mt-3"
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default ShowAlert