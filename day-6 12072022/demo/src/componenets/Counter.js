import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {   count : 0 }
    }


    render(){
        return(
            <div>
                <button  onClick={ ()=>{
                    this.setState( { count :( this.state.count + 1) } )
                } }  > { this.state.count } clicks </button>
            </div>
        );
    }
}