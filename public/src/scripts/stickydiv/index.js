/**
 * StickyDiv class
 * @flow
 */

'use strict';

const React = require('react');

var Sticky = require('react-stickydiv');
const Breadcrumbs = require('react-breadcrumbs'),
  {Grid, Col, Row} = require('react-bootstrap'),
  Markdown2Html = require("react-markdown-to-html");

module.exports = React.createClass({
  displayName: "Sticky Div",
  render(): any {
    return (<span className="flyin-widget">
            <Sticky offsetTop={100} zIndex={10}>
                <span className="centered" style={{
                    backgroundColor: 'transparent', color: 'red',
                    fontSize: 24, padding: 1, opacity: 1,
                    position:'absolute',top:-30, width:'100%',zIndex:0
                }}>
                <span style={{backgroundColor: '#fff',
                boxShadow:'0px 5px 15px 15px rgba(0,0,0,0.75)'}}>
                  I'm really sticky</span>
                </span>
            </Sticky>
            <Grid >
              <Row className="show-grid">
                <Col md={12}>
                  <Breadcrumbs routes={this.props.routes} />
                  <Markdown2Html src="assets/STICKY.md"/>

                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={12}>
                  <p>Sample text to fill up the page</p>
                  <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio
                    pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia
                    quis ratione voluptatibus.
                  </div>
                  <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum!
                    Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque
                    expedita laborum mollitia optio vel.
                  </div>
                  <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum
                    praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam
                    molestiae nulla similique.
                  </div>
                  <div>Aperiam beatae commodi consectetur dolor doloribus dolorum, ex iure natus nulla perferendis
                    reprehenderit ullam veniam vitae. Aliquam delectus eaque fugiat laboriosam magnam numquam officiis
                    optio praesentium quasi unde. Iusto, laudantium.
                  </div>
                  <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio
                    pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia
                    quis ratione voluptatibus.
                  </div>
                  <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum!
                    Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque
                    expedita laborum mollitia optio vel.
                  </div>
                  <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum
                    praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam
                    molestiae nulla similique.
                  </div>
                  <div>Beatae exercitationem maxime molestiae nesciunt voluptates. Aspernatur cumque cupiditate, dolore
                    doloribus, ducimus earum eligendi esse expedita ipsum labore natus optio provident quisquam quod
                    quos ratione recusandae tenetur ullam vero voluptates.
                  </div>
                  <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum!
                    Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque
                    expedita laborum mollitia optio vel.
                  </div>
                  <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum
                    praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam
                    molestiae nulla similique.
                  </div>
                  <div>Ab adipisci, aliquid beatae consectetur dolore enim expedita iste iusto nesciunt officia optio
                    pariatur porro quam qui quibusdam quidem quod reiciendis tenetur. Eveniet ipsa provident quas quia
                    quis ratione voluptatibus.
                  </div>
                  <div>Nisi non sint veritatis. Dignissimos doloremque expedita minus odio quasi quibusdam rerum!
                    Aperiam eum ex, fugit incidunt molestias nihil placeat porro sapiente temporibus ut. Doloremque
                    expedita laborum mollitia optio vel.
                  </div>
                  <div>Animi aut, ipsum mollitia possimus quas sed! Commodi cum delectus ducimus eos eum harum laborum
                    praesentium quasi ratione saepe! Accusantium atque cupiditate dolores fugiat id ipsam laboriosam
                    molestiae nulla similique.
                  </div>
                  <div>Dolore dolorem enim illum incidunt non. Deserunt dolor hic, laudantium neque nesciunt nihil nulla
                    porro! Dignissimos fugit porro praesentium rem voluptatum! Aliquam debitis deserunt eius esse
                    expedita voluptatum. Possimus, tenetur!
                  </div>
                </Col>
              </Row>

            </Grid>
        </span>

    )

  }
});