import {setcountrylist,setcountrydetails} from '../actions/countryactions';
const data = {
    citylist : [{"place name":"Belmont","icon Name":"home","active":false},{"place name":"Chicago","icon Name":"city","active":false}
    ,{"place name":"Houston","icon Name":"city","active":false},{"place name":"Los Angeles","icon Name":"city","active":false},{"place name":"Mesa","icon Name":"city","active":false}],
    citydetails: [],
}

export default (state = data, action) => {
switch (action.type) {
  case setcountrylist:
    return {
      ...state,
      citylist:action.payLoad,
    };
    case setcountrydetails:
        return {
          ...state,
          citydetails:action.payLoad,
        };
  default:
    return state;
}
};