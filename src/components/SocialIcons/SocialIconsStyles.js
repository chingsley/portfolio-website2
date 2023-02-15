import styled from 'styled-components';

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: ${props => props.shouldWrap ? 'wrap' : 'no-wrap'};
	}
`;

export const StyledIcon = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px 16px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;