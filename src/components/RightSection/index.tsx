import React from 'react';
import { Noticia } from 'components/Noticia';
import * as S from './styles';

const noticias = [
    {
        id: 'eleicoes',
        imagem: 'assets/images/image 8.png',
        titulo: 'Eleições 2022',
        resumo: 'Veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr.'
    },
    {
        id: 'apple-teacher',
        imagem: 'assets/images/image 10.png',
        titulo: '#AppleTeacher',
        resumo: 'Na semana do professor, agradecemos sua dedicação!'
    },
    {
        id: 'fazenda',
        imagem: 'assets/images/image 11.png',
        titulo: 'A Fazenda',
        resumo: 'A Fazenda 14: Veja os Pius sobre o programa 🐮'
    },
    {
        id: 'volei',
        imagem: 'assets/images/Frame 15038.png',
        titulo: 'Vôlei',
        resumo: 'Sérvia derrota o Brasil e é campeã mundial de vôlei feminino'
    },
    {
        id: 'Climao do NTEC',
        imagem: 'assets/images/image 13.png',
        titulo: 'Clima tenso no NTEC',
        resumo: 'Alan Rosenthal Zisman afirma com todas as letras que comercial é superior a projetos'
    }
];

export const RightSection = () => {
    return (
        <S.SectionContainer>
            <S.SectionHeader>
                <S.FireIcon src="assets\images\Frame.svg" alt="Ícone" />
                <S.TituloSecao>Pius em alta</S.TituloSecao>
            </S.SectionHeader>
            {noticias.map((noticia) => (
                <Noticia
                    key={noticia.id}
                    imagem={noticia.imagem}
                    titulo={noticia.titulo}
                    resumo={noticia.resumo}
                />
            ))}
        </S.SectionContainer>
    );
};
