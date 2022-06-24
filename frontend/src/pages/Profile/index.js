import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";

import { getUser } from "../../Axios/userAxios";

const Profile = () => {
  const { profileResult, profileLoading, profileError } = useSelector(
    (state) => state.profileReducers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.start")
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className="card text-center col-8 ">
        <div className="card-body">
          <div className="container-fluid p-0  ">
            <div className="row p-0 m-0 ">
              <div className="col-4 ">
                <img
                  src="https://via.placeholder.com/150"
                  className="rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-5">
                <h4 style={{ textAlign: "left" }}>
                  {profileResult ? profileResult.username : "USername kosong"}
                </h4>
                <p style={{ textAlign: "left" }}>
                  {" "}
                  {profileResult ? profileResult.email : "USername kosong"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
