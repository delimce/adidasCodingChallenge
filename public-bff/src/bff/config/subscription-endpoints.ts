import EndpointInterface from "../interfaces/endpoint-interface";
class SubscriptionEndpoint implements EndpointInterface {
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

export const newSubscription: EndpointInterface = new SubscriptionEndpoint("localhost", 8080, "/v1/subscriptions", "POST", { "Content-Type": "application/json" });
export const cancelSubscription: EndpointInterface = new SubscriptionEndpoint("localhost", 8080, "/v1/subscriptions", "PUT", { "Content-Type": "application/json" });