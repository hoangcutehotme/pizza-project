import styled from 'styled-components';

export const SpecialtyTitle = styled.h2`
  margin-top: 24px;
  font: 700 26px IBM Plex Serif, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
  
`;

export const SpecialtyDesc = styled.p`
  margin-top: 20px;
  font: 500 18px IBM Plex Serif, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;


export const SpecialtiesSection = styled.section`
  background-color: #e8fff0;
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 42px 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
export const Specialties = styled.div`
  width: 100%;
  max-width: 1429px;
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;
export const SpecialtyColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 33%;

  @media (max-width: 991px) { 
    width: 100%; 
  }
`;
export const SpecialtyContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;