import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    padding: 16px;
    border-radius: ${({ theme }) => theme.radii.md}px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.slate4};
    }
    width: 100%;
`;

export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    background-color: #374151;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export const Content = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    font-size: 0.9rem;
    color: #9ca3af;

    strong {
        color: white;
        margin-right: 0.5rem;
    }
`;

export const Text = styled.p`
    color: white;
    margin-top: 0.25rem;
`;
