
export interface Database {
    connect(): Promise<Object>;
    close(): Promise<void>;
}