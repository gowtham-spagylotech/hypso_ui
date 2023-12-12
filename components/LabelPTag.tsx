// LabelPTag.tsx
import React from "react";
import * as classNames from "@/public/data/classNames"; 

interface LabelPTagProps {
  className?: string;
  label: string;
}

const LabelPTag: React.FC<LabelPTagProps> = ({ className, label }) => {
  return (
    <p className={classNames.formFieldLabel}>{label} :</p>
  );
};

export default LabelPTag;
