"use strict";

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

}

var SimplePageScrollMixin = {
    componentDidMount: function () {
        window.addEventListener('scroll', this.onScroll, false);
    },
    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.onScroll, false);
    },
};
var SimpleResizeMixin = {
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    }
};

var StickyDiv = React.createClass({
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
        var pos = util.findPosRelativeToViewport(this.getDOMNode());
        if (pos[1]<0){
            this.setState({fix: true});
        } else {
            this.setState({fix: false});
        }
    },
    render: function () {
        var divStyle, className;
        if("undefined" !== typeof this.props.className)
            className=this.props.className;

        var zIndex=99;
        if("undefined" !== typeof this.props.zIndex)
            zIndex=this.props.zIndex;

        var top=0;
        if("undefined" !== typeof this.props.top)
            top=this.props.top;

        if (this.state.fix) {
            divStyle = {
                display: 'block',
                position: 'fixed',
                width: this.refs.original.getDOMNode().getBoundingClientRect().width + 'px',
                top: top
            }
            return <div style={{'zIndex' : zIndex, width:'100%'}}>
                <div key='duplicate' className={className} style={divStyle}>
            {this.props.children}
                </div>
                <div ref='original' key='original' style={{visibility:'hidden'}}>
            {this.props.children}
                </div>
            </div>;
        }
        else {
            divStyle = {
                display: 'block',
                position: 'relative'
            }
            return <div style={{'zIndex' : zIndex, width:'100%'}}>
                <div ref='original' key='original' style={divStyle}>
          {this.props.children}
                </div>
            </div>;
        }
    }
});
