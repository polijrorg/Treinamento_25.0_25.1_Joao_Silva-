import styled from 'styled-components';

export const SearchInput = styled.input`
    padding: 0.75rem;
    border-radius: 999px;
    border: none;
    outline: none;
    background: var(--Slate-8, #4c5155);
    color: white;
`;
export const SectionSI = styled.div`
    border-radius: 999px;
    border: none;
    outline: none;
    background: var(--Slate-8, #4c5155);
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const SIimage = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;
export const SectionPiuBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 16px 16px;
    background: var(--Slate-8, #4c5155);
    align-items: left;
`;
export const SectionPiuBoxAux = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
    border-radius: 16px 16px;
    background: var(--Slate-8, #4c5155);
    align-items: left;
`;
export const PiuBox = styled.input`
    padding: 2rem;
    color: white;
    background: var(--Slate-8, #4c5155);
    width: 100%;
    border: none;
    height: 5rem;
    border-radius: 16px 16px;
`;
export const PImage = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;
export const PVideo = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;
export const PEmoji = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;
export const PMarcador = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;
export const PGif = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
`;

export const PiuActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin-right: 750px;
`;
export const SendButton = styled.button`
    background-color: var(--Slate-8, #4c5155);
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-left: auto;
    border-radius: 16px 16px 16px 16px;
    :hover {
        background: var(--Indigo-9, #3e63dd);
    }
    align-items: center;
`;
export const ImageButton = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;
export const Container = styled.section`
    flex: 2;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #1f2937;
    border-right: 1px solid #1f2937;
    height: 100vh;
    overflow-y: auto;
    color: white;
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    background-color: #0d1117;
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    border-bottom: 1px solid #1f2937;
`;

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;
