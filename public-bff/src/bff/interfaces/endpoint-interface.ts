interface EndpointInterface {
    host: string;
    port: number;
    path: string;
    method: string;
    headers: {
        "Content-Type": string;
    };
}

export default EndpointInterface;