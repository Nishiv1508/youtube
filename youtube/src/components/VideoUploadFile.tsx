import { Button } from "./ui/button";
import { Input } from "./ui/input";

const VideoUploadFile = ({ file, handleFileChange, handleFileUpload }: { file: File | null, handleFileChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void, handleFileUpload: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> }) => {

    return (
        <>
            <div>
                <Input type="file" onChange={(e) => handleFileChange(e)} /><br />
                <p>Upload Video</p>
            </div>
            <Button disabled={!file} onClick={(e) => handleFileUpload(e)}>
                Upload
            </Button>
        </>
    );
};

export default VideoUploadFile;