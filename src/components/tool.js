// ------------------------------------------------Tooltip Component------------------------------------------------

// ----------------Importing React,& files from component----------------
import React, { Component } from 'react';
import './tool.css';

class Tool extends Component {
    render() {
        const {showToolTip , position} = this.props.state;
        const {changeShowToolTip} = this.props
        return (
            <div>
                <div className="tool-button" onMouseOver={changeShowToolTip} onMouseOut = {changeShowToolTip}>
                    { <div className="button-info">Hover over me!</div>          /*-- button --*/}
                </div>
                {
                    showToolTip
                    ?<div className= {`box-${position} arrow-${position}`}>I am a Tooltip.</div>   /*-- ToolTip --*/
                    :null
                }
            </div>
        
        );
    }
}

export default Tool;