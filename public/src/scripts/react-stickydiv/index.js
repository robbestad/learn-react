/*jshint -W079 */
/*jshint -W084 */

"use strict";

var React = require("react");

var util = {
    // findPos() by quirksmode.org
    // Finds the absolute position of an element on a page
    findPos: function (obj) {
        var curleft = 0,
            curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return [curleft, curtop];
    },

    // getPageScroll() by quirksmode.org
    // Finds the scroll position of a page
    getPageScroll: function () {
        var xScroll, yScroll;
        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft;
        } else if (document.body) {// all other Explorers
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft;
        }
        return [xScroll, yScroll]
    },

    // Finds the position of an element relative to the viewport.
    findPosRelativeToViewport: function (obj) {
        var objPos = this.findPos(obj)
        var scroll = this.getPageScroll()
        return [ objPos[0] - scroll[0], objPos[1] - scroll[1] ]
    }

};
var SimplePageScrollMixin = {
    componentDidMount: function () {
        window.addEventListener('scroll', this.onScroll, false);
    },
    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.onScroll, false);
    }
};
var SimpleResizeMixin = {
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    }
};

module.exports = React.createClass({
    displayName:"Sticky Div",
    propTypes:{
        className: React.PropTypes.string,
        visibility: React.PropTypes.string
    },
    mixins: [SimplePageScrollMixin, SimpleResizeMixin],
    getInitialState : function(){
        return {fix: false};
    },
    handleResize : function(){
        this.checkPositions();
    },
    onScroll: function () {
        this.checkPositions();
    },
    checkPositions: function(){
        if(!this.isMounted()) return false;
        var pos = util.findPosRelativeToViewport(this.getDOMNode());
        var height=0;
        if("undefined" !== typeof this.refs.orig) height=this.refs.orig.getDOMNode().getBoundingClientRect().height;
        if("undefined" !== typeof this.refs.dupe) height=this.refs.dupe.getDOMNode().getBoundingClientRect().height;


        if (pos[1]<Math.floor(height/2)){
            this.setState({fix: true});
        } else {
            this.setState({fix: false, top:self.pageYOffset});
        }
    },
    render: function () {
        var divStyle;
        var className;
        if("undefined" !== typeof this.props.className)
            className=this.props.className;
        var height=0;
        if("undefined" !== typeof this.refs.orig) height=this.refs.orig.getDOMNode().getBoundingClientRect().height;
        if("undefined" !== typeof this.refs.dupe) height=this.refs.dupe.getDOMNode().getBoundingClientRect().height;
        if(this.state.fix){
            divStyle= {
                position: 'fixed',
                top: self.pageYOffset-height/2,
                visibility:this.props.visibility,
                width: '100%',
                zIndex: 99

            };
            return React.DOM.span(
                {key: "dupe", ref:"dupe", className: className,style: divStyle},this.props.children
            );

        }
        if(!this.state.fix){
            divStyle= {
                position: 'relative',
                width: '100%',

                visibility:this.props.visibility

            };
            return React.DOM.span(
                {key: "original", ref:"orig",className: className,style: divStyle},this.props.children
            );
        }


    }
});
