import styled from "styled-components";

export const StyledContainer = styled.div`

.quick-card {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin-bottom: 20px;
    .title {
        font-size: 22px;
        font-weight: 600;
    }
    .description {
        font-size: 15px;
        padding-top: 5px;
        font-weight: 300;
    }
}



`