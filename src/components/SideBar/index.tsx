import React from 'react';
import { HomeIcon, BellIcon, GearIcon } from '@radix-ui/react-icons';
import * as S from './styles';

const Sidebar = () => {
    return (
        <S.Container>
            <S.SectionLogo>
                <S.Logo
                    src="assets/images/chick-svgrepo-com 1.svg"
                    alt="logo"
                />
                <S.TituloLogo>PIUPIUWER</S.TituloLogo>
            </S.SectionLogo>
            <S.Nav>
                <S.NavItem>
                    <HomeIcon /> Página Inicial
                </S.NavItem>
                <S.NavItem>
                    <BellIcon /> Notificações
                </S.NavItem>
                <S.NavItem>
                    <S.ChatBubbleIcon
                        src="assets/images/jam_messages-alt.png"
                        alt="Mensagens"
                    />
                    Mensagens
                </S.NavItem>
                <S.NavItem>
                    <S.BookmarkIcon
                        src="assets/images/Cloud_Check.png"
                        alt="Salvos"
                    />
                    Salvos
                </S.NavItem>
                <S.NavItem>
                    <S.PersonIcon
                        src="assets/images/pajamas_profile.png"
                        alt="Perfil"
                    />
                    Perfil
                </S.NavItem>
                <S.NavItem>
                    <GearIcon /> Configurações
                </S.NavItem>
            </S.Nav>
            <S.Logout>
                <S.Button>
                    <S.ExitIcon src="assets/images/Log_Out.png" />
                </S.Button>
            </S.Logout>
        </S.Container>
    );
};

export default Sidebar;
