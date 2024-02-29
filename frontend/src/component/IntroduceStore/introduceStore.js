import styled from "styled-components";

export const Box = styled.div`
    background-color: #e8fff0;
    display: flex;
    margin-top: 27px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 42px 60px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 0 20px;
    }
  `;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
    @media (max-width: 991px) {
      width: 100%;
    }
  `;


export const Div = styled.div`
    width: 100%;
    max-width: 1429px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `;

export const Div2 = styled.div`
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  `;


export const Div3 = styled.div`
    display: flex;
    margin-top: 18px;
    flex-direction: column;
    color: #000;
    white-space: nowrap;
    text-align: center;
    @media (max-width: 991px) {
      margin-top: 40px;
      white-space: initial;
    }
  `;

export const Img = styled.img`
    aspect-ratio: 1.39;
    object-fit: auto;
    object-position: center;
    width: 160px;
    fill: #18ac4e;
    align-self: center;
    max-width: 100%;
  `;

export const Div4 = styled.div`
align-self: stretch;
    margin-top: 32px;
    font: 700 26px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `;

export const Div5 = styled.div`
    margin-top: 14px;
    font: 500 16px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `;

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
    @media (max-width: 991px) {
      width: 100%;
    }
  `;

export const Div6 = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    color: #000;
    white-space: nowrap;
    text-align: center;
    @media (max-width: 991px) {
      margin-top: 40px;
      white-space: initial;
    }
  `;

export const Img2 = styled.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 147px;
    max-width: 100%;
  `;

export const Div7 = styled.div`
    margin-top: 20px;
    font: 700 26px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `;

export const Div8 = styled.div`
    align-self: stretch;
    margin-top: 19px;
    font: 500 16px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `;

export const Column3 = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
    @media (max-width: 991px) {
      width: 100%;
    }
  `;

export const Div9 = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: center;
    color: #000;
    white-space: nowrap;
    text-align: center;
    margin: auto 0;
    @media (max-width: 991px) {
      margin-top: 40px;
      white-space: initial;
    }
  `;

export const Img3 = styled.img`
    aspect-ratio: 1.32;
    object-fit: auto;
    object-position: center;
    width: 153px;
    max-width: 100%;
  `;

export const Div10 = styled.div`
    align-self: stretch;
    margin-top: 48px;
    font: 700 26px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      margin-top: 40px;
      white-space: initial;
    }
  `;

export const Div11 = styled.div`
    margin-top: 20px;
    font: 500 16px IBM Plex Serif, sans-serif;
    @media (max-width: 991px) {
      white-space: initial;
    }
  `;


  export default {
    Box, Div, Div10, Div11, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Column, Column2, Column3, Img, Img2, Img3
};