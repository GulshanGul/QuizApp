import React from "react";

import "../css/simple.css";
import Math from "../component/math";
import Header from "../component/Header";

class Home extends React.Component{
    render(){
        return(
<div>

<Header />
<Math />
</div>

           
        )
    }
}

export default Home