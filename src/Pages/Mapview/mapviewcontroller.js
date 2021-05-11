import { connect } from 'react-redux';
import Mapviewcomp from '../../Components/mapcomp';

const mapStateToProps = (state) => {
    return {
        citydetails:state.mapdetailsreducer.citydetails,
    };
};

const Mapview = connect(mapStateToProps,{ })(Mapviewcomp)

export default Mapview;

