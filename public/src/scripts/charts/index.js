'use strict';
/**
 * Chart class
 * @flow
 */

var React = require("react"),
    {Grid, Col, Row} = require('react-bootstrap');

var Markdown2Html = require("react-markdown-to-html");

var Breadcrumbs = require('react-breadcrumbs');

var c3=require("c3");

module.exports = React.createClass({
    displayName:"Chart Example",

    componentDidMount: function () {
        var colorPattern = ["#ff6319", "#ff6319", "#0070a3", "#dbdbdb", "#009fd6", "#ff6319"];

        var chart = c3.generate({
            bindto: "#c3donut",
            size: {
                width: 200,
                height: 229
            },
            transition: {
                duration: 700
            },
            data: {
                columns: [
                    ["Donuts", 10]
                ],
                type: 'donut',
                order: null
            },
            donut: {
                width: 11,
                label: {
                    show: false
                },
                title: 'Donut sales'
            },
            color: {
                pattern: colorPattern
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ["Cinnamon", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["Chocolate", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["Jam", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart.unload({
                ids: 'Donuts'
            });
        }, 2500);

    },

    render: function () {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}><Breadcrumbs {...this.props} /></Col>
            </Row>
            <Row className="show-grid">
                <Col md={12} />
            </Row>

            <Row className="show-grid">
                <Col md={12}>
                    <h1>Charts</h1>
                    <p>Donut chart using the D3 wrapper C3. Animation done using standard C3 and setTimeout().</p>
                    <div id="c3donut"></div>
                    <hr />
                    <Markdown2Html src="./assets/CHART.md" />
                </Col>
            </Row>

        </Grid>
    }

});
