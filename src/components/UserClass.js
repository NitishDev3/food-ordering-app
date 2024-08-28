import React from "react";

//UserClass will inherit the properties from React.Component
class UserClass extends React.Component {

    constructor(props) {
        super(props); //to make props accessible in child component/class from parent component(class)
        this.state = {  // cretating state multiple state variables 
            count: 0,
            count2: 0
        }
    }

    render() {

        const { name, location } = this.props;  //destructuring props
        const { count, count2 } = this.state;    //destructuring state

        return (
            <div className="user-card">
                <h2>Learning Class Based Component</h2>
                <h3>{name}</h3>                     {/* access of props by destructuring*/}
                <h5>{this.props.location}</h5>      {/* normal access of props */}
                <h5>nitish_3.ig</h5>

                <h4>Count = {this.state.count}</h4> {/* normal access of State */}
                <h4>Count = {count2}</h4>           {/* access of State by destructuring*/}

                <button
                onClick={()=>{
                    this.setState({                     /* updating the State variable*/
                        count: this.state.count + 1,    /*it will take an object as input and update the state var mentioned in it*/
                        count2: count2 + 2
                    })
                }}
                >Incease Count</button>
            </div>
        )
    }
}

export default UserClass;