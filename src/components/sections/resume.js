import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"

import { detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen }  from "../../hooks/"
import ContentWrapper from "../../styles/ContentWrapper"
import Button from "../../styles/Button"
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
import Blink from 'react-blink-text';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';



const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  .cta-btn {
    display: block;
    text-align: center;
    margin: 2rem auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
    }
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .projects {
      display: flex;
      flex-direction: row;
      margin-top: -2.5rem;
      padding: 2.5rem 2.5rem;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        margin-top: 0;
        padding: 0;
        overflow: visible;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid white;
          background-color: rgba(0, 0, 0, 0.5);
        }

        &::-webkit-scrollbar-track {
          background-color: #fff;
          border-radius: 8px;
        }
      }
    }
    .counter {
      position: absolute;
      top: 2.2rem;
      right: 2.5rem;
      font-size: 1.125rem;
      font-weight: 500;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
      }
    }
  }
`

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2rem;
  flex-shrink: 0;
  padding-right: 2.5rem;
  max-width: 20rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 25rem;
    margin-top: 2rem;
    padding-right: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    flex-shrink: 1;
    max-width: 62.5rem;
    margin-bottom: 10rem;
    padding-right: 0;
    /* Positioning of image and details should vary */
    flex-direction: ${({ position }) =>
      position % 2 !== 0 ? "row" : "row-reverse"};
  }
  .details {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 0;
    }
    .category {
      font-size: 0.875rem;
      line-height: 1rem;
      text-transform: uppercase;
      letter-spacing: +1px;
    }
    .title {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      line-height: 1.2rem;
      span {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      a {
        display: inline-block;
        margin-right: 2rem;
      }
      svg {
        width: 1.3rem;
        height: 1.3rem;
        transition: all 0.3s ease-out;
      }
      svg:hover {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .screenshot {
    width: 100%;
    max-width: 25rem;
    height: 15rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-out;
    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 18.75rem;
    }
  }
 
`


const Resume = () => {
    
  
    return (
    <StyledSection>
    <StyledContentWrapper>
        <div id = "resume">
      <h3 className="section-title" >resume</h3>

      </div>
     
      <div >
      <iframe src="https://drive.google.com/file/d/1E_0a1rzdsA_0BrnZGFlNTO6C92p7zrZI/preview" width="100%" height="480" scrolling="auto" ></iframe>
      </div>
      
    </StyledContentWrapper>
    </StyledSection>
    )
  }
  
  export default Resume