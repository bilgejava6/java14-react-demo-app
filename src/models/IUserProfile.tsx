export interface IUserProfile{
    id: number,
    username: string
    avatar: string
    email: string
    follower: number,
    status: boolean
    socialmedia: SocialMedia
}

export interface SocialMedia{
    insta: string,
    facebook: string,
    x: string,
    linkedin: string
}