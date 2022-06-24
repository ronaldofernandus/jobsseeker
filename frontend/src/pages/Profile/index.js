import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../../index.css";

const Profile = () => {
  return (
    <>
      <div className="card text-center col-8 justify-content-center">
        <div className="card-body">
          <div className="container-fluid p-0  ">
            <div className="row p-0 m-0">
              <div className="col-4 ">
                <img
                  src="https://via.placeholder.com/150"
                  className="rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-5">
                <h4 style={{ textAlign: "left" }}>Nama Kandidat</h4>
                <p style={{ textAlign: "left" }}>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
