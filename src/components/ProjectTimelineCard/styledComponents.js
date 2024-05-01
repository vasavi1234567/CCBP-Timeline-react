import styled from 'styled-components/macro'

export const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const ProjectImage = styled.img`
  height: 100vh;
  width: 100vh;
`
export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ProjectTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 600;
  margin-left: 5px;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const ProjectDescription = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ProjectLink = styled.a`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #0967d2;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
