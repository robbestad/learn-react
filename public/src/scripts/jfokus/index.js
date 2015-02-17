var React = require("react");
//import React from 'react';
import { Flummox } from 'flummox';

let flux = new Flummox();

module.exports=React.createClass({

    render(){
        return <div>
            <h1>Jfokus</h1>
            <p>This is my component</p>

        </div>
    }

});