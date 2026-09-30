export interface videoInterface{
    id: string;
    title: string;
    description: string;
    videoKey: string;
    thumbnailKey: string;
    category: string;
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    commentCount: number;
    createdAt: string;
    owner: {
        id: string;
        name: string;
        channelName: string;
        avatarKey: string | null;
    };
    myReaction?: string
}