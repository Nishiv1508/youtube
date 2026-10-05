export interface UploadResponse{
    fileName: string;
    fileSize: number;
    contentType: string;
}

export interface PartResponse{
    partNumbers: number[];
}