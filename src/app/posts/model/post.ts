export class Post{
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(

        userId?: number,
        id?: number,
            title?: string,
            body?: string,
         )
    {
        this.userId = userId || -1;
        this.id = id || -1;
        this.title = title || '';
        this.body = body || '';
    }
}