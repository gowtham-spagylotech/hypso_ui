// FileInput.tsx
import React, { useState } from "react";
import {
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import * as classNames from "@/public/data/classNames"; // Assuming you have a file for classNames

interface FileInputProps {
  name: string;
  className?: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name,className, label, onChange }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    setSelectedFiles(Array.from(files));
    onChange(e);
  };

  const handleCancel = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className={className}>
      <p  className={classNames.formFieldLabel}>{label} :</p>
      <div className={classNames.fileInputContainer}>
        <label
          htmlFor={`dropzone-file-${label}`}
          className={classNames.fileInputLabelContainer}
        >
          {selectedFiles.length > 0 ? (
            <div className={classNames.previewContainer}>
              {selectedFiles.map((file, index) => (
                <div key={index} className={`${classNames.previewItem} py-12`}>
                  <div className={`${classNames.imageContainer} relative w-24 `}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`File Preview ${index + 1}`}
                      className={classNames.filePreview}
                    />
                    <button
                      type="button"
                      onClick={() => handleCancel(index)}
                      className={`${classNames.cancelButton} absolute top-0 right-0`}
                    >
                      <svg
                        height="15"
                        width="13"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512.001 512.001"
                        xmlSpace="preserve"
                      >
                        <path
                          style={{ fill: "#FF6465" }}
                          d="M256.001,512c141.384,0,255.999-114.615,255.999-256.001C512.001,114.615,397.386,0,256.001,0S0.001,114.615,0.001,256.001S114.616,512,256.001,512z"
                        />
                        <path
                          style={{ opacity: 1, enableBackground: "new" }}
                          d="M68.873,256.001c0-129.706,96.466-236.866,221.564-253.688 C279.172,0.798,267.681,0,256.001,0C114.616,0,0.001,114.615,0.001,256.001S114.616,512.001,256,512.001 c11.68,0,23.171-0.798,34.436-2.313C165.339,492.865,68.873,385.705,68.873,256.001z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <span className="flex flex-col items-center justify-center py-12">
                <CloudArrowUpIcon className={classNames.fileIcon} />
                <span className={classNames.fileDragDropText}>Drag & Drop</span>
                <span className="block text-center mb-6 clr-neutral-500">OR</span>
                <span className={classNames.fileSelectFilesButton}>Select Files</span>
                <span className={classNames.fileInfoContainer}>
                  <span className="flex items-center justify-center flex-row flex-wrap gap-2">
                    <InformationCircleIcon className={classNames.fileInformationIcon} />
                    <span className={classNames.fileInformationText}>
                      Maximum allowed file size is 9.00 MB
                    </span>
                  </span>
                  <span className="flex items-center justify-center flex-row flex-wrap gap-2">
                    <InformationCircleIcon className={classNames.fileInformationIcon} />
                    <span className={classNames.fileInformationText}>
                      Maximum 10 files are allowed
                    </span>
                  </span>
                </span>
              </span>
              <input
                type="file"
                id={`dropzone-file-${label}`}
                className="hidden"
                name={name}
                onChange={handleFileChange}
                multiple
              />
            </>
          )}

        </label>
      </div>
    </div>
  );
};

export default FileInput;