import React from 'react'
import { StyledContainer } from './articleCard.styles'
import {ThumbsUp as Like, CommentChatMessageAlt as Comments, ArrowRight as More} from 'react-basicons'

const ArticleCard = ({source, title, description, urlToImage}) => {
  return (
    <StyledContainer>

    <div className="article-card" key={source.id}>
                    <img src={urlToImage} alt="1" />
                    <div className="title">{title}</div>
                    <div className="divider" />
                    <div className="description">{description}</div>
                <div className="data-section">
                    <div className="like-icon vertical-centered">
                        <Like size={16} />
                        <span>165</span>
                    </div>
                    <div className="comments-icon vertical-centered">
                        <Comments size={16} />
                        <span>38</span>
                    </div>
                    <div className="more-icon vertical-centered">
                        
                        <span>More...</span>
                        <More size={16} />
                    </div>
                </div>
                </div>
    </StyledContainer>
  )
}

export default ArticleCard
