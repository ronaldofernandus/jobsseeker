import React, { useState, useEffect } from "react";
import "../../index.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  getListAllJobs,
  getDetailJobsById,
  getPageJobs,
} from "../../Axios/homeAxios";
import ReactPaginate from "react-paginate";
const Home = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [currentPage, setcurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(7);

  const indexOfLastEmployee = currentPage * postPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee-postPerPage;

  

  const {
    getListJobsResult,
    getListJobsLoading,
    getListJobsError,
    getPageResult,
    getPageLoading,
    getPageError,
  } = useSelector((state) => state.homeReducers);

  useEffect(() => {
    dispatch(getListAllJobs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPageJobs());
  }, [dispatch]);

  return (
    <>
      <section className="section-details-content">
        <div className=" container d-flex">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className=" search form-control me-1"
            type="search"
            placeholder="Search by Title,Location,or Type"
            aria-label="Search"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details">
                <h1>Job List</h1>
                <hr></hr>
                {getListJobsResult ? (
                  getListJobsResult
                    .filter((job) => {
                      if (search === "") {
                        return job;
                      } else if (
                        job.location
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return job;
                      } else if (
                        job.company.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return job;
                      } else if (
                        job.title.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return job;
                      } else if (
                        job.type.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return job;
                      }
                    })

                    .slice(indexOfFirstEmployee,indexOfLastEmployee)

                    .map((job) => {
                      // console.log(getListJobsResult);
                      return (
                        <>
                          <div className="jobs">
                            <div className="row-first my-0 py-0 d-flex">
                              <Link
                                onClick={() => dispatch(getDetailJobsById(job))}
                                to={`/positions/detail/${job.id}`}
                                className="d-flex ms-1 me-auto my-0 py-0"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
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
                              <p className="d-flex ms-1  my-0 py-0">
                                {job.type}
                              </p>
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

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
