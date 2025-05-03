import React from 'react';
import * as S from './styles';
import Post from '../Post';

const CenterSection = () => {
    return (
        <S.Container>
            <S.SectionSI>
                <S.SearchInput placeholder="Ouvir um piu..." />
                <S.SIimage src="assets/images/ci_search.png" />
            </S.SectionSI>
            <S.SectionPiuBox>
                <S.PiuBox placeholder="Quero dar um piu..." rows={3} />
                <S.SectionPiuBoxAux>
                    <S.PiuActions>
                        <S.SendButton>
                            <S.PImage src="assets/images/Image_02.svg" />
                        </S.SendButton>
                        <S.SendButton>
                            <S.PVideo src="assets/images/Video.svg" />
                        </S.SendButton>
                        <S.SendButton>
                            <S.PEmoji src="assets/images/Emoji.svg" />
                        </S.SendButton>
                        <S.SendButton>
                            <S.PMarcador src="assets/images/Tag.svg" />
                        </S.SendButton>
                        <S.SendButton>
                            <S.PGif src="assets/images/qisso.svg" />
                        </S.SendButton>
                    </S.PiuActions>
                    <S.SendButton>
                        <S.ImageButton src="assets/images/Paper_Plane.svg" />
                    </S.SendButton>
                </S.SectionPiuBoxAux>
            </S.SectionPiuBox>
            <S.Feed>
                <Post
                    username="moizes_avila"
                    name="Moizés Ávila"
                    content="Este é meu primeiro piu! 🐤"
                    time="2min"
                />
                <Post
                    username="usuario123"
                    name="Maria Silva"
                    content="Olá mundo! Testando o piupiuwer."
                    time="5min"
                />
            </S.Feed>
        </S.Container>
    );
};

export default CenterSection;
