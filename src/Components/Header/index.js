import React from 'react';
import './style.scss';

export default class Header extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
            <div className="headernav">
               <span className="">Map Viewer</span>
            </div>
        </>
        )
    }
}