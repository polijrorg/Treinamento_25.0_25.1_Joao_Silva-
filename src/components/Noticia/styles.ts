import styled from 'styled-components';

export const NoticiaContainer = styled.div`
    display: flex;
    gap: 12px;
    padding-bottom: 20px;
    background: var(--Slate-1, #151718);
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--Slate-8, #434a54);
    &:hover {
        border-radius: 0px 0px 0px 0px;
        background: var(--Indigo-9, #3e63dd);
    }
`;

export const Imagem = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`;

export const Titulo = styled.h4`
    margin: 0;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.white};
`;

export const Resumo = styled.p`
    margin: 4px 0 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.slate11};
`;
