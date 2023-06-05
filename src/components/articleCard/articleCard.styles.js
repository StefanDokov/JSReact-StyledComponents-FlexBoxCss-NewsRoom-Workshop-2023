import styled from "styled-components";

export const StyledContainer = styled.div`

 

 .article-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    
    height: 600px;

      img {
        max-width: 400px;
        flex: 0 0 auto;
      }

      .title {
        font-size: 25px;
        padding: 5px 10px 0 10px;
        font-family: ${(props) => props.theme.fonts.secondary};
        text-align: center;
        flex: 1 2 auto;
      }
      .divider {
        flex: 0 0 auto;
        margin-top: 13px;
        margin-bottom: 3px;
        height: 1px;
        width: 45%;
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.background.lightBlack};
      }
      .description {
        flex: 2 2 auto;
        font-size: 15px;
        font-family: ${(props) => props.theme.fonts.secondary};
        text-align: center;
        padding: 12px;
        font-weight: 300;
        color: #000000;
      }
      .data-section {
        display: flex;
        flex: 0 2 auto;
        width: 70%;
        justify-content: space-around;
        margin-bottom: 30px;
        span {
            padding-left: 2px;
            font-size: 13px;
        }
      }
      .vertical-centered {
        display: flex;
        align-items: center;
      }
      .more-icon {
        text-decoration: underline;
      }
 }



`