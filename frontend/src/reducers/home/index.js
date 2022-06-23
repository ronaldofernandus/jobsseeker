import { getListJobs } from "../../Axios/homeAxios";
const initialState = {
  getListJobsResult: false,
  getListJobsLoading: false,
  getListJobsError: false,
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

    default:
      return state;
  }
};

export default jobs;
