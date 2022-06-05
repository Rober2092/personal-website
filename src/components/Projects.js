import React, { Component } from 'react'
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';

import Footer from './Footer';
import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'
import * as remote from '../assets/images/remote.jpg';
import * as featured_webp from '../assets/images/space.webp';
import * as car_webp from '../assets/images/car.webp'
import * as remote_webp from '../assets/images/remote.webp';
import * as immortelle from '../assets/images/immortelle_30.png';
import * as immortelle_webp from '../assets/images/immortelle_30.webp';
import * as cedarcide from '../assets/images/cedarcide_30.png';
import * as cedarcide_webp from '../assets/images/cedarcide_30.webp';
import * as coi from '../assets/images/coi_30.png';
import * as coi_webp from '../assets/images/coi_30.webp';
import * as ottinsurance from '../assets/images/ottinsurance.png';
import * as ottinsurance_webp from '../assets/images/ottinsurance.webp';

class Projects extends Component {
    render() {

        const projects = [
            {
                name: 'E-commerce back end',
                link: 'https://github.com/Rober2092/E-commerce-Back-End',
                description: 'Users can search for movies and save them to their watchlist. Demonstrates complete use of the MERN Stack.',
                technologies: 'React, MongoDB, GraphQL, Apollo, and Bootstrap.',
                image: remote,
                webp: remote_webp
            },
            {
                name: 'cimema-ready app',
                link: 'https://github.com/Rober2092/cinema-ready-app',
                description: 'A website that provides access to browse movies ',
                technologies: 'jQuery, Javascript,html,css,The Movie Database API',
                image: featured,
                webp: featured_webp
            },
            {
                name: 'vehicle- maintenance tracker',
                link: 'https://github.com/Rober2092/Vehicle-Maintenance-Tracker',
                description: 'Keep track of maintenance issues using the logbook or see which maintenance needs to be done based on your mileage.',
                technologies: 'Express, Handlebars.js, MySQL, Node.js.',
                image: car,
                webp: car_webp
            },
            {
                name: 'bubble-shooter-game',
                link: 'https://github.com/Rober2092/bubble-shooter-game',
                description: 'Static webpage built for a client. Utilizes lazy-loading, webp images, and a lot of SEO metadata.',
                technologies: 'phython',
                image: ottinsurance,
                webp: ottinsurance_webp
            },
            {
                name: 'employee-Tracker',
                link: 'https://github.com/Rober2092/Employee-Tracker',
                description: 'A node.js application that uses user input from inquirer to populate an employee tracker database displaying members of a company',
                technologies: 'Wordpress, Custom PHP Plugins, Custom Theme Development',
                image: immortelle,
                webp: immortelle_webp
            },
            {
                name: 'team-profile-generator',
                link: 'https://github.com/Rober2092/Team-Profile-Generator',
                description: `A node.js application that uses user input from inquirer to populate a index.html file displaying members of a development team. The index.html file is created in the dist directory.
                .`,
                technologies: 'Wordpress, Custom PHP Plugins, Custom Theme Development, jQuery, Javascript, PHP.',
                image: cedarcide,
                webp: cedarcide_webp
            },
           
            // },
        ];

        return (
            <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                <Row xs={1} md={2} xl={3} className="proj-row projects-cols">
                    {projects.map(thing => (
                            <Card className="proj-col" key={thing.name}>
                                <a href={thing.link} rel="noopener noreferrer" target="_blank" className="proj-img-wrap">
                                    <picture >
                                        <source className="card-img-top proj-img" srcSet={thing.webp} type="image/webp" />
                                        <source className="card-img-top proj-img" srcSet={thing.image} type="image/jpeg" />
                                        <img className="card-img-top proj-img" src={thing.image} alt={thing.title} />
                                    </picture>
                                    <div className="proj-overlay">
                                        <div className="gh-link">TEST</div>
                                        <div className="live-link">TEST</div>
                                    </div>
                                </a>
                                <Card.Body>
                                <Card.Title className="proj-title"><h3><a href={thing.link} rel="noopener noreferrer" target="_blank" className="display-4">{thing.name}</a></h3></Card.Title>
                                <Card.Text className="lead">
                                    {thing.description}
                                </Card.Text>
                                <Card.Text className="lead">
                                Features: <span className="bolded">{thing.technologies}</span>
                                </Card.Text>

                                </Card.Body>
                            </Card>
                    ))}
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Projects
