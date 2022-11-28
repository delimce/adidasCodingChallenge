export interface Email {
    to: string;
    from?: string;
    subject: string;
    text: string;
}

export default Email;