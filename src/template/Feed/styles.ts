import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, hsl(205, 45%, 8.6%) 0%, #151718 100%);
    padding: 1rem;
    gap: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    padding: ${({ theme }) => `${theme.space[6]}px`};
    border-radius: ${({ theme }) => `${theme.radii.md}px`};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[4]}px`};
    }
`;

export const ComponentWrapper = styled.div`
    margin-top: ${({ theme }) => `${theme.space[4]}px`};
    animation: ${fadeIn} 1.2s ease-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
