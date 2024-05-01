// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  ProjectLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectCardDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectCardDetails

  return (
    <ProjectContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={projectUrl}>Visit</ProjectLink>
    </ProjectContainer>
  )
}

export default ProjectTimelineCard
