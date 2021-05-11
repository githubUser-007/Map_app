import React from 'react';
import { withRouter } from "react-router-dom";
import './style.scss';

class Selectcitycomp extends React.Component{
    state = {cntrylist : [],currentcity:null}

    handlecities = () => {
        let citylist = [...this.state.cntrylist];
        return citylist.map((items,inx) => {
            return (
                <li className="cityballs" key={inx}>
                    <div className={items.active?"icn_hldelr active":"icn_hldelr"} onClick={(e)=>this.selectcurrentcity(items["place name"])}>
                        <span className="city_name">{items["place name"]}</span>
                    </div>
                </li>
            )
        });
    }

    componentDidMount(){
        this.setState({cntrylist:[...this.props.citylist],currentcity:null})
    }

    selectcurrentcity = (currcity) => {
        let citylist = [...this.state.cntrylist];
        let currentcity = null;
        citylist.map((items) => {
            if(items["place name"]===currcity) {
                items.active = true;
                currentcity = items["place name"];
            }
            else{
                items.active = false;
            }
            return items;
        });
        this.setState({cntrylist:citylist,currentcity})
    }

    submitactn = () => {
        let currentcity = this.state.currentcity;
        this.props.getcallcountrydetails(currentcity);
        this.props.history.push("/mapview");
    }

    render(){
        return (
            <>
            <div className="citylistholder">
                <p className="city_hdng">Please Select The Below Cities</p>
                {this.state.cntrylist.length!== 0 ? <ul>
                    {this.handlecities()}
                </ul>:<div className="no_rcrd">No Record Found</div>}
                {this.state.cntrylist.length!== 0 && <button disabled={this.state.currentcity!==null?false:true} type="button" name="getbtn" value="submit" className="btnactn" onClick={(e)=>this.submitactn()}>Submit</button>}
            </div>
        </>
        )
    }
}

export default withRouter(Selectcitycomp);