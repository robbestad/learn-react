var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Redirect = Router.Redirect,
    Link = Router.Link,

    ReactBootstrap = require('react-bootstrap'),
    Nav = ReactBootstrap.Nav,
    ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    MenuItem = ReactBootstrap.MenuItem,
    ButtonLink = ReactRouterBootstrap.ButtonLink,
    DropdownButton = ReactBootstrap.DropdownButton,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;
var StickyDiv = require('react-stickydiv'),
    Headroom = require("react-headroom");


module.exports = React.createClass({
    displayName:"Learn React",
    getInitialState(){
      return {
          searchOpen:false,
          menuOpen:false
      }
    },


    fadeFlash(){
        $("#feedback-modal").hide();
    },
    flash(body, toggleClass, delay) {
        if("undefined" === typeof delay) delay=3400;
        var flashDiv = $("#feedback-modal"), className;
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
        var mm = $(".main-menu"), ml = $(".menu-link");
        mm.slideDown("fast", function () {
            _this.setState({menuOpen:true});
        });
    },

    closeMenu(){
        var _this=this;
        var mm = $(".main-menu"), ml = $(".menu-link");
        //this.flash("<h1><p class=\"flash-text\">h1 er en bra overskrift</p></h1>", "warning");
        mm.slideUp("fast", function () {
            _this.setState({menuOpen:false});
        })
    },
    closeSearch() {
        var _this=this;
        var m = $(".main-search"), s = $(".search-link");
        m.slideUp("fast", function () {
            _this.setState({searchOpen:false});
        })
    },
    openSearch() {
        this.closeMenu();

        var _this=this;
        var m = $(".main-search"), s = $(".search-link");
        m.slideDown("fast", function () {
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

    //<li>
    //<Link to="reflux">Reflux example</Link>
    //</li>
    render() {
        return (<section>
            <div className="page-header-wrap">
                <header className="page-header">
                    <Headroom>
                    <div id="header" className="header-bar">
                        <div id="feedback-modal"></div>
                        <div className="container">
                            <div className="header-bar-wrap">
                                <div className="header-options">
                                    <div className="header-panel-wrap" onClick={this.toggleMenu}>
                                        <span className="menu-link header-panel-element header-panel-link">
                                            <span
                                                className="text-link">Meny</span>
                                        </span>
                                        <nav className="main-menu header-panel">
                                            <ul >
                                                <li>
                                                    <Link to="home">Home</Link>
                                                </li>

                                                <li>
                                                    <Link to="source">Source</Link>
                                                </li>

                                                <li>
                                                    <Link to="mixin">Mixin Example</Link>
                                                </li>
                                                <li>
                                                    <Link to="static">Statics Example</Link>
                                                </li>
                                                <li>
                                                    <Link to="markdown">Include Markdown</Link>
                                                </li>
                                                <li>
                                                    <Link to="breadcrumbs">Breadcrumbs</Link>
                                                </li>
                                                <li>
                                                    <Link to="reactfire">ReactFire</Link>
                                                </li>

                                            </ul>
                                        </nav>
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

                                        <div className="main-search header-panel">
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
                    </Headroom>
                </header>
            </div>

            <div className="container main-container">
                    <RouteHandler />
            </div>
            <div className="push">&nbsp;</div>

            <div id="footer" className="footer">
                <div className="container">
                    <div className="logo-wrap">
                        <h2 className="page-footer">Learn React</h2>
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
})