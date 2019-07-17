
export interface IPost {
    postid?:number;
    userid?: number,
    text?: string,
    privacy?: string,
    likes?: string,
    createdAt?:Date,
    updatedAt?:Date,
    authore?:string,
    comments?:IPostComment,

  }

  export interface IPostComment {
    commentid?:number;
    userid?: number,
    postid?:number,
    comment?: string,
    createdAt?:Date,
    updatedAt?:Date,
    authore?:string,
  }
