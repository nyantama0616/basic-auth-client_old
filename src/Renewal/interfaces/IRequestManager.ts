export default interface IRequestManager<Request, Response> {
    get(url: string, data?: Request): Promise<Response | null>
    post(url: string, data?: Request): Promise<Response | null>
}
