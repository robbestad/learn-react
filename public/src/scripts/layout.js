var React = require('react'),
    {Router, Route, DefaultRoute, NotFoundRoute, RouteHandler, Redirect, Link} = require('react-router'),
    {ReactBootstrap, Nav} = require('react-bootstrap'),
    {ReactRouterBootstrap, NavItemLink, MenuItem, ButtonLink, DropdownButton, ButtonToolbar} = require('react-router-bootstrap'),
    Headroom = require("react-headroom"),
    LoginStore = require("./login/store");


module.exports = React.createClass({
    mixins: [LoginStore.mixin],

    displayName:"Learn React",
    storeDidChange(){
        console.log("store did change");
        this.setState(this.state);
    },
    getInitialState(){
      return {
          searchOpen:false,
          menuOpen:false
      }
    },
    componentDidMount(){
        this.closeMenu();
    },

    fadeFlash(){
        $("#feedback-modal").hide();
    },
    flash(body, toggleClass, delay) {
        if("undefined" === typeof delay) delay=3400;
        var flashDiv = $(this.refs.feedbackModal.getDOMNode()), className;
        switch (toggleClass) {
            case "warning":
                className = "alert-warning";
                break;
            case "danger":
                className = "alert-danger";
                break;
            case "info":
                className = "alert-info";
                break;
            case "success":
                className = "alert-success";
                break;
            default:
                className = "alert-danger"
        }
        flashDiv.empty().append(body).removeClass("alert-warning alert-success alert-danger alert-info").addClass(className),
        flashDiv.hasClass("open") || flashDiv.addClass("open").fadeIn().delay(delay), flashDiv.slideUp(300, function () {
            $(this).removeClass("open"), $(this).hide(0)
        })
    },

    openMenu () {
        this.closeSearch();
        var _this=this;
        $("body").css("overflow","hidden");
        $(this.refs.mainMenu.getDOMNode()).slideDown("fast", function () {
            _this.setState({menuOpen:true});
        });
    },

    closeMenu(){
        $("body").css("overflow","visible");
        var _this=this;
        //var mm = $(".main-menu"), ml = $(".menu-link");
        $(this.refs.mainMenu.getDOMNode()).slideUp("fast", function () {
            _this.setState({menuOpen:false});
        })
    },
    closeSearch() {
        var _this=this;
        $(this.refs.mainSearch.getDOMNode()).slideUp("fast", function () {
            _this.setState({searchOpen:false});
        })
    },
    openSearch() {
        this.closeMenu();

        var _this=this;
        $(this.refs.mainSearch.getDOMNode()).slideDown("fast", function () {
            _this.refs.searchInput.getDOMNode().focus();
            _this.setState({searchOpen:true});
        });

    },
    toggleSearch(){
        this.state.searchOpen === true ? this.closeSearch() : this.openSearch();
    },
    toggleMenu(){
        this.state.menuOpen === true ? this.closeMenu() : this.openMenu();
    },

    render() {
        return (<section>
            <div className="page-header-wrap">
                <nav ref="mainMenu" className="main-menu header-panel">
                    <ul >
                        <li onClick={this.closeMenu}>
                            <Link to="home">Home</Link>
                        </li>

                        <li onClick={this.closeMenu}>
                            <Link to="source">Source</Link>
                        </li>

                        <li onClick={this.closeMenu}>
                            <Link to="login">Login</Link>
                        </li>

                        <li onClick={this.closeMenu}>
                            <Link to="mixin">Mixin Example</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <Link to="static">Statics Example</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <Link to="markdown">Include Markdown</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <Link to="breadcrumbs">Breadcrumbs</Link>
                        </li>
                        <li onClick={this.closeMenu}>
                            <Link to="reactfire">ReactFire</Link>
                        </li>

                    </ul>
                </nav>
                <Headroom>
                    <header className="page-header">
                    <div id="header" className="header-bar">
                        <div ref="feedbackModal" id="feedback-modal"></div>
                        <div className="container">
                            <div className="header-bar-wrap">
                                <div className="header-options">
                                    <div className="header-panel-wrap" onClick={this.toggleMenu}>
                                        <span ref="menuLink" className="menu-link header-panel-element header-panel-link">
                                            <span
                                                className="text-link">Meny</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="logo-wrap logo">
                                    <h2 className="header">Learn React</h2>
                                </div>

                                <div className="header-options main-options">


                                    <div className="header-panel-wrap">
                                        <span onClick={this.toggleSearch}
                                            className="active-link search-link header-panel-element header-panel-link glyphicon glyphicon-search">
                                            <span
                                                className="text-link">Search</span>
                                        </span>

                                        <div ref="mainSearch" className="main-search header-panel">
                                            <div className="container">
                                                <div className="input-search-group">
                                                    <form method="get" action="http://www.google.com/search" role="search">
                                                        <input type="text" name="q"
                                                            ref="searchInput"
                                                            className="input-search form-control input-lg twitter-typeahead"
                                                            placeholder="Search" id="searchfield" />
                                                        <button className="btn btn-search glyphicon glyphicon-search"
                                                            type="submit"></button>

                                                        <input type="hidden" name="sitesearch" value="www.robbestad.com"/>
                                                        <input hidden="true" type="submit" value="Google Search" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </header>
                </Headroom>
            </div>

            <div className="container main-container">
                    <RouteHandler />
            </div>
            <div className="push">&nbsp;</div>

            <div id="footer" className="footer">
                <div className="container">
                    <div className="logo-wrap">
                        <h2 className="page-footer">Learn React</h2>
                        <p>
                            <Link to="/login">Login</Link> status: {LoginStore.isAuthenticated().toString()}
                        </p>
                    </div>
                    <ul className="footer-links">
                        <li>
                            <a href="http://www.robbestad.com" className="copyright">&#169; 2015 Sven Anders Robbestad</a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>)

    }
});