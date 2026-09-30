// import { useState } from "react";
import { Button } from "./ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
// import useThumbnail from "../hooks/useThumbnail";

export default function FileUpload({ title, isPending, handleChange, handleClick }: { title: string, isPending: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement, Element>) => void, handleClick: () => void }) {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // const { mutate, isPending } = useThumbnail();

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const file = e.target.files?.[0] ?? null;
  //   setSelectedFile(file);
  // }

  // function handleClick() {
  //   if (!selectedFile) {
  //     alert("Select a file");
  //     return;
  //   }

  //   mutate({
  //     file: selectedFile,
  //     fileName: selectedFile.name,
  //     contentType: selectedFile.type,
  //   });
  // }

  return (
    <Field>
      <FieldLabel htmlFor="picture">{title}</FieldLabel>

      <Input
        id="picture"
        type="file"
        onChange={handleChange}
      />

      <Button
        type="button"
        onClick={handleClick}
        disabled={isPending}
      >
        {isPending ? "Uploading..." : "Upload"}
      </Button>

      <FieldDescription>
        Select a {title} to upload.
      </FieldDescription>
    </Field>
  );
}
