import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Welcome to my portfolio! Below, you'll find a showcase of some of my recent projects.
                    Each project reflects my passion for design and development. Feel free to explore
                  </p>
                  
                  {/* GitHub link */}
                  <p>
                    Check out my projects on GitHub: {" "}
                    <a href="https://github.com/sha-linimoorthy" target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
