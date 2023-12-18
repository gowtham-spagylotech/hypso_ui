// FileInput.tsx
import React from "react";
import {
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import * as classNames from "@/public/data/classNames";

interface FileInputProps {
  className?: string;
  label: string;
  // value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

const FileInput: React.FC<FileInputProps> = ({ className, label, onChange }) => {
  return (
    <div className={className}>
      <p className={classNames.formFieldLabel}>{label} :</p>
      <div className={classNames.fileInputContainer}>
        <label htmlFor={`dropzone-file-${label}`} className={classNames.fileInputLabelContainer}>
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
          <input type="file" id={`dropzone-file-${label}`} className="hidden" onChange={(e) => onChange(e)} />
        </label>
      </div>
    </div>
  );
};

export default FileInput;
