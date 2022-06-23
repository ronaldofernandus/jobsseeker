import { getListJobs, getDetailJobs } from "../../Axios/homeAxios";
const initialState = {
  getListJobsResult: false,
  getListJobsLoading: false,
  getListJobsError: false,

  getDetailJobsResult: false,
 
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case getListJobs:
      return {
        ...state,
        getListJobsResult: action.payload.data,
        getListJobsLoading: action.payload.loading,
        getListJobsError: action.payload.errorMessage,
      };

    case getDetailJobs:
      return {
        ...state,
        getDetailJobsResult: action.payload.data,
 
      };

    default:
      return state;
  }
};

export default jobs;
