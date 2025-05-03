import React from 'react';
import * as S from './styles'; // Ajuste esse import conforme seu projeto

type NoticiaProps = {
    imagem: string;
    titulo: string;
    resumo: string;
};

export const Noticia = ({ imagem, titulo, resumo }: NoticiaProps) => {
    return (
        <S.NoticiaContainer>
            <S.Imagem src={imagem} alt={titulo} />
            <div>
                <S.Titulo>{titulo}</S.Titulo>
                <S.Resumo>{resumo}</S.Resumo>
            </div>
        </S.NoticiaContainer>
    );
};
