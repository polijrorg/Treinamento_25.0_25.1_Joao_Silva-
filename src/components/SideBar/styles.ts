import styled from 'styled-components';

export const Container = styled.aside`
    width: 250px;
    min-height: 50vh;
    background: linear-gradient(135deg, hsl(205, 45%, 8.6%) 0%, #151718 100%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1rem;
    border-right: 1px solid #1f2937;
`;
export const TituloLogo = styled.h2`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
    object-fit: contain;
`;
export const SectionLogo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 20px;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;
export const ChatBubbleIcon = styled.img`
    width: 22px;
    height: 22px;
    object-fit: contain;
`;
export const BookmarkIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

export const PersonIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background 0.2s;
    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        border-radius: 0px 80px 80px 0px;
        background: var(--Indigo-9, #3e63dd);
    }
`;

export const Logout = styled.div`
    display: flex;
    margin-top: 300px;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    color: #e11d48;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: #1f2937;
    }
`;
