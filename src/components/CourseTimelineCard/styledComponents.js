import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  font-fammily: 'Roboto';
  color: #171f46;
  font-size: 15px;
  font-weight: 700;
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
export const CourseDescription = styled.p`
  font-family: 'Rogoto';
  font-size: 13px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CourseTagsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  font-family: 'Roboto'
  font-size: 10px;
  font-weight: 500;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 8px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 600;
  }
`
