import React from "react";

export default class SwitchBTN extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    render(){
        return(
            <div className={  this.state.active === false ? "switch" : "switch active"  }   
                 onClick={ ()=>{ this.setState( { active : ! this.state.active } ) } }>
                <div></div>
            </div>
        );
    }
}