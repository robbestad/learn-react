/**
 * StickyDiv class
 * @flow
 */

'use strict';

const React = require('react');

var Sticky = require('../react-stickydiv');
const Breadcrumbs = require('react-breadcrumbs'),
    {Grid, Col, Row} = require('react-bootstrap');

module.exports = React.createClass({
    displayName: "Sticky Div",
    render():any {
        return <Grid className="flyin-widget">

                <Row className="show-grid">
                    <Col md={12}><Breadcrumbs /></Col>
                </Row>

                <Row className="show-grid">
                    <Col md={12}>
                        <Sticky >
                            <span className="centered" style={{
                                backgroundColor: 'transparent', color: 'red',
                                fontSize: '24px', padding: '2px'
                            }}>I'm really sticky</span>
                        </Sticky>

                        <p>Sample text to fill up the page</p>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci distinctio doloribus earum fugit id incidunt iste itaque minus modi nisi nulla omnis perspiciatis placeat provident tenetur ullam unde, voluptatum.</div>
                        <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia quis ratione voluptatibus.</div>
                        <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum! Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque expedita laborum mollitia optio vel.</div>
                        <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam molestiae nulla similique.</div>
                        <div>Aperiam beatae commodi consectetur dolor doloribus dolorum, ex iure natus nulla perferendis reprehenderit ullam veniam vitae. Aliquam delectus eaque fugiat laboriosam magnam numquam officiis optio praesentium quasi unde. Iusto, laudantium.</div>
                        <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia quis ratione voluptatibus.</div>
                        <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum! Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque expedita laborum mollitia optio vel.</div>
                        <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam molestiae nulla similique.</div>
                        <div>Beatae exercitationem maxime molestiae nesciunt voluptates. Aspernatur cumque cupiditate, dolore doloribus, ducimus earum eligendi esse expedita ipsum labore natus optio provident quisquam quod quos ratione recusandae tenetur ullam vero voluptates.</div>
                        <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum! Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque expedita laborum mollitia optio vel.</div>
                        <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam molestiae nulla similique.</div>
                        <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia quis ratione voluptatibus.</div>
                        <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum! Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque expedita laborum mollitia optio vel.</div>
                        <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam molestiae nulla similique.</div>
                        <div>Dolore dolorem enim illum incidunt non. Deserunt dolor hic, laudantium neque nesciunt nihil nulla porro! Dignissimos fugit porro praesentium rem voluptatum! Aliquam debitis deserunt eius esse expedita voluptatum. Possimus, tenetur!</div>

                    </Col>

                </Row>

            </Grid>;
    }
});