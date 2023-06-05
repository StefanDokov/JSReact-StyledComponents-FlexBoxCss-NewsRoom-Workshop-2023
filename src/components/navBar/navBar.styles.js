import styled from 'styled-components'

export const StyledContainer = styled.div`
width: 100%;
.nav-items {
    width: 100%;
    background-color: #000000;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.primary};

    span {
        a {
            color: #ffffff;
            text-decoration: none;
            font-size: 20px; 
            padding: 0 10px 0 10px;
            font-weight: 600;
            letter-spacing: 1px;

            &:hover {
                background-color: red;
                color: black;
            }
        }
    }
}
`;