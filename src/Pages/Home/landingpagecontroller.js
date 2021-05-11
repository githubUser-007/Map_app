import { connect } from 'react-redux';
import Selectcitycomp from '../../Components/selectcitycomp';
import {getcallcountrydetails} from '../../Redux/actions/countryactions';

const mapStateToProps = (state) => {
    return {
        citylist:state.mapdetailsreducer.citylist,
    };
};

const Landingpage = connect(mapStateToProps,{ 
    getcallcountrydetails: (cityname) => getcallcountrydetails(cityname), 
  })(Selectcitycomp)

export default Landingpage;

