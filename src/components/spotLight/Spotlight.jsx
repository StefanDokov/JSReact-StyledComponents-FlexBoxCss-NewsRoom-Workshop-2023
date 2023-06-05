import React from 'react'
import { StyledContainer } from './spotLight.styles'
import { ModelDiamond as Icon } from 'react-basicons'

const Spotlight = () => {
  return (
    <StyledContainer>
      <div className="spotlight-section">
        <div className="title">NEWS</div>
        <p className='description'>The most important news in the world</p>
      <div className="dividers-container">
        <div className="divider" />
        <div className="icon-container"><Icon size={16}/></div>
        <div className="divider" />
      </div>
      </div>
    </StyledContainer>
  )
}

export default Spotlight
