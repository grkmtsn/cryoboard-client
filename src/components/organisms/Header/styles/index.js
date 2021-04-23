import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.spacing.xlarge}rem;
`;