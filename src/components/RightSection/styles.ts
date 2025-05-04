import styled from 'styled-components';

export const Container = styled.aside`
    flex: 1;
    padding: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
`;

export const SearchInput = styled.input`
    padding: 0.75rem 1rem;
    border-radius: 9999px;
    border: none;
    background: var(--Slate-1, #151718);
    color: white;
    outline: none;

    &::placeholder {
        color: #9ca3af;
    }
`;

export const Card = styled.div`
    background-color: #161b22;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CardTitle = styled.h3`
    font-size: 1rem;
    font-weight: bold;
`;

export const UserSuggestion = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: space-between;

    div {
        flex: 1;
        display: flex;
        flex-direction: column;

        span {
            color: #9ca3af;
            font-size: 0.875rem;
        }
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background-color: #374151;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export const Trend = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-weight: bold;
        font-size: 0.9rem;
    }

    small {
        color: #9ca3af;
        font-size: 0.75rem;
    }
`;

export const SectionContainer = styled.aside`
    width: 300px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.slate2};
    border-left: 1px solid ${({ theme }) => theme.colors.slate5};
    height: 100vh;
    overflow-y: auto;
`;

export const TituloSecao = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 16px;
    font-size: 18px;
`;

export const TituloImagemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImagemIcone = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
`;

export const TituloImagem = styled.h1`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
`;
export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--Slate-8, #434a54);
`;

export const FireIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
    object-fit: contain;
`;
