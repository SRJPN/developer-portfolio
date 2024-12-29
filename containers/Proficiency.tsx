import React from 'react';
import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col } from 'reactstrap';
import { Fade } from 'react-awesome-reveal';
import DisplayLottie from '../components/DisplayLottie';

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade direction="up" duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiency</h1>
              {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <DisplayLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col className="text-center">
              <a
                href="https://srjpn.github.io/skills-radar/"
                rel="noopener noreferrer"
                className="btn btn-info btn-lg shadow-lg hover-translate-y-n10"
              >
                View My Skills Radar
              </a>
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
