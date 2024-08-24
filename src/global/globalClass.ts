export class ResponeData<T> {
    data : T | T[] | Promise<T | T[]>;
    statusCode : number;
    message : string;

    constructor(data : T | T[] | Promise<T | T[]> , statusCode : number, message : string) {
        this.data = data
        this.message = message
        this.statusCode = statusCode
    }
}