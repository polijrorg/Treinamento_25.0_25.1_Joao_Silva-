import React from 'react';
import * as S from './styles';
import { PostActions } from '../PostReactions'; // ajuste o caminho conforme a estrutura do seu projeto

type PostProps = {
    name: string;
    username: string;
    content: string;
    time: string;
    comments?: number;
    likes?: number;
    shares?: number;
    onComment?: () => void;
    onLike?: () => void;
    onShare?: () => void;
};

export const Post: React.FC<PostProps> = ({
    name,
    username,
    content,
    time,
    comments,
    likes = 1,
    shares = 14,
    onComment,
    onLike,
    onShare
}) => {
    return (
        <S.Container>
            <S.Avatar>P</S.Avatar>
            <S.Content>
                <S.Header>
                    <strong>{name}</strong>{' '}
                    <span>
                        @{username} · {time}
                    </span>
                </S.Header>
                <S.Text>{content}</S.Text>
                <PostActions
                    comments={comments}
                    likes={likes}
                    shares={shares}
                    onShare={onShare}
                    onComment={onComment}
                    onLike={onLike}
                />
            </S.Content>
        </S.Container>
    );
};

Post.defaultProps = {
    comments: 0
};

export default Post;
