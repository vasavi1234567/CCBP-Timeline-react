import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const CCBPHeading = styled.span`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #2b237c;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
