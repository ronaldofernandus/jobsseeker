import React, { useState, useEffect } from "react";
import "../../index.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getListAllJobs, getDetailJobsById } from "../../Axios/homeAxios";

const Home = () => {
  const dispatch = useDispatch();
  const { getListJobsResult, getListJobsLoading, getListJobsError } =
    useSelector((state) => state.homeReducers);

  useEffect(() => {
    dispatch(getListAllJobs());
  }, [dispatch]);

  return (
    <>
      <section className="section-details-content">
        <div className="container">
          <div className=" d-flex">
            <input
              className=" search form-control me-1"
              type="search"
              placeholder="Search by Description,Location,or Type"
              aria-label="Search"
            />
          </div>
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details">
                <h1>Job List</h1>
                <hr></hr>
                {getListJobsResult ? (
                  getListJobsResult.map((job) => {
                    // console.log(getListJobsResult);
                    return (
                      <>
                        <div className="jobs">
                          <div className="row-first my-0 py-0 d-flex">
                            <Link
                              onClick={() => dispatch(getDetailJobsById(job))}
                              to={`/positions/detail/${job.id}`}
                              className="d-flex ms-1 me-auto my-0 py-0"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {job.title}
                            </Link>
                            <p className="d-flex ms-auto me-1 my-0 py-0">
                              {job.location}
                            </p>
                          </div>
                          <div className="row-second my-0 py-0 d-flex">
                            <p className="d-flex ms-1 me-0 my-0 py-0">
                              {job.company}-
                            </p>
                            <p className="d-flex ms-1  my-0 py-0">{job.type}</p>
                            <p className="d-flex ms-auto me-1 my-0 py-0">
                              {job.created_at}
                            </p>
                          </div>
                        </div>
                        <hr></hr>
                      </>
                    );
                  })
                ) : getListJobsLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>{getListJobsError ? getListJobsError : "Data Kosong"}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
