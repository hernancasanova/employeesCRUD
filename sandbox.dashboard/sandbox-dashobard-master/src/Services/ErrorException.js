export default class ErrorException extends Error {
    constructor(response){
        super(response.problem);
        this.response = response;
    }
}