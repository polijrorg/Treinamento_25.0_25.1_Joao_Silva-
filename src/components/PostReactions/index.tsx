import React from 'react';
import styled from 'styled-components';
import { ChatBubbleIcon, HeartIcon, Share1Icon } from '@radix-ui/react-icons';

type PostActionsProps = {
    comments?: number;
    likes?: number;
    shares?: number;
    onShare?: () => void;
    onComment?: () => void;
    onLike?: () => void;
};

const ActionsContainer = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0.5rem 1rem;
`;

const ActionButton = styled.button`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    align-items: center;
    gap: 0.25rem;
    background: none;
    border: none;
    color: var(--Indigo-9, #3e63dd);
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
        color: white;
    }
`;

export const PostActions: React.FC<PostActionsProps> = ({
    comments = 0,
    likes = 0,
    shares = 0,
    onComment,
    onLike,
    onShare
}) => {
    return (
        <ActionsContainer>
            <ActionButton onClick={() => onComment?.()}>
                <ChatBubbleIcon />
                {comments}
            </ActionButton>
            <ActionButton onClick={() => onLike?.()}>
                <HeartIcon />
                {likes}
            </ActionButton>
            <ActionButton onClick={() => onShare?.()}>
                <Share1Icon />
                {shares}
            </ActionButton>
        </ActionsContainer>
    );
};
