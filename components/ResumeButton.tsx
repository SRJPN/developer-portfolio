import React from 'react';
import { greetings, educationInfo, experience, projects } from '../portfolio';
import { Button } from 'reactstrap';

const ResumeButton: React.FC = () => {
    const generateMarkdown = () => {
        const markdownContent = `
# ${greetings.name}

${greetings.description}

## Experience
${experience.map(exp => `### ${exp.role} at ${exp.company}\n- **Duration:** ${exp.date}\n- **Description:** ${exp.desc}\n${exp.descBullets ? exp.descBullets.map(bullet => `  - ${bullet}`).join('\n') : ''}`).join('\n\n')}


## Education
${educationInfo.map(edu => `### ${edu.course}\n- **School:** ${edu.schoolName}\n- **Duration:** ${edu.duration}\n- **Description:** ${edu.desc}`).join('\n\n')}


## Projects
${projects.map(proj => `### ${proj.name}\n${proj.tagline}\n\n${proj.desc}`).join('\n\n')}
    `;
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.md';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Button
            className="btn-icon-only rounded-circle ml-1"
            color="default"
            onClick={generateMarkdown}
            aria-label="Generate Resume"
        >
            <span className="btn-inner--icon">
                <i className="fa fa-file" />
            </span>
        </Button>
    );
};

export default ResumeButton;
