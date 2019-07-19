
export interface IPost {
    postid?:number;
    userid?: number,
    text?: string,
    privacy?: string,
    likes?: IPostLike,
    createdAt?:Date,
    updatedAt?:Date,
    authore?:string,
    comments?:IPostComment,
    commentshow?:boolean;
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

  export interface IPostLike {
    likeid?:number;
    userid: number,
    postid:number,
  
  }

