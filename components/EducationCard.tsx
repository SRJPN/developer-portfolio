import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { EducationType } from '../types/sections';
import { Fade } from 'react-awesome-reveal';

const EducationCard = ({
  schoolName,
  course,
  duration,
  desc
}: EducationType) => {
  return (
    <Fade direction="left" duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{course}</h5>
              <h6>{schoolName}</h6>
              <Badge color="info" className="mr-2">
                {duration}
              </Badge>
              <p className="description mt-3">{desc}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
