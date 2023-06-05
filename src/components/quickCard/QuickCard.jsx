import React from 'react'
import { StyledContainer } from './quickCard.styles'

const QuickCard = ({title, description}) => {
  return (
    <StyledContainer>
      <div className="quick-card">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
    </StyledContainer>
  )
}

export default QuickCard
