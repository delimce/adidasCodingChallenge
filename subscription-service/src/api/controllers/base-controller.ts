import httpStatus from "http-status";
export abstract class BaseController {

    protected result: { message: string, data?: any };
    protected status: number;

    constructor() {
        this.result = {
            message: ''
        };
        this.status = httpStatus.OK;
    }

    private setMessage(message: string): void {
        this.result.message = message;
    }

    protected setOk(msg?: string): void {
        this.status = httpStatus.OK;
        if (msg) this.setMessage(msg);
    }

    protected setCreated(msg?: string): void {
        this.status = httpStatus.CREATED;
        if (msg) this.setMessage(msg);
    }

    protected setBadRequest(msg?: string): void {
        this.status = httpStatus.BAD_REQUEST;
        if (msg) this.setMessage(msg);
    }

    protected setError(msg: string): void {
        this.status = httpStatus.INTERNAL_SERVER_ERROR;
        if (msg) this.setMessage(msg);
    }

    protected setData(data: any): void {
        this.result.data = data;
    }

}

export default BaseController;