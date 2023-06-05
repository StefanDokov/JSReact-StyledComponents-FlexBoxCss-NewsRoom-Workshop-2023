import React from 'react'
import { Spotligh } from '../../components/spotLight'
import { ArticleCard } from '../../components/articleCard'
import { StyledContainer } from './homePage.styles'
import { QuickCard } from '../../components/quickCard'


import articles from '../../data/articles.json'
import quick from '../../data/quick.json'

const HomePage = () => {
    return (
        <StyledContainer>
            <div className="content">

                <Spotligh />
            
            <div className="news-container">
            <div className="articles-section">
                {articles.map(item => (
                    <ArticleCard {...item}/>   
                ))}
            </div>
            <div className="quick-info-section">
               { quick.map((item) => (
                    <QuickCard {...item}/>
                ))}
            </div>
            </div>
            </div>
        </StyledContainer>
    )
}

export default HomePage
