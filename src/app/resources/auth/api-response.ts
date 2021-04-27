export class ApiResponse<T> {
    public body: T;
    public code: number;
    public message: string;
    public status: string;
}