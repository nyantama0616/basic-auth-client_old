import IRequestManager from '../interfaces/IRequestManager';
import axios from 'axios';

export default class RequestManager<Request, Response> implements IRequestManager<Request, Response> {
    public async get(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            axios
                .get(url, { params: data })
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(null);
                });
        });
    }

    public async post(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            axios
                .post(url, data)
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(null);
                });
        });
    }
}

export type TypeRequestManager = typeof RequestManager;
