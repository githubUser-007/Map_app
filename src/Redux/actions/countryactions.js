import { serviceCallThunk } from "../serivce-call-thunk";
export const setcountrylist = "action/ADD_COUNTRIES";
export const setcountrydetails = "action/ADD_COUNTRIES_DETAILS";

export const getCountrydetails = (payLoad) => {
    return {
        type: setcountrydetails,
        payLoad,
    };
};

export const getcallcountrydetails = (url) => {
    return async (dispatch, getState) => {
      try {
        const state = getState();
        const config = {
          url: `http://api.zippopotam.us/us/ma/${url}`,
          method: "GET",
        };
        return await dispatch(serviceCallThunk(config, getCountrydetails));
      } catch (err) {
        alert("No Data Found");
        throw err;
      }
    };
  };