import EndpointInterface from "../interfaces/endpoint-interface";

class EmailEndpoint implements EndpointInterface {
    host: string;
    port: number;
    path: string;
    method: string;
    headers: {
        "Content-Type": string;
    };
    constructor(host: string, port: number, path: string, method: string, headers: { "Content-Type": string; }) {
        this.host = host;
        this.port = port;
        this.path = path;
        this.method = method;
        this.headers = headers;
    }
}

const emailOptions: EndpointInterface = new EmailEndpoint("localhost", 8084, "/v1/email/send", "POST", { "Content-Type": "application/json" });

export default emailOptions;


