import React from "react";
import Resume from "@/components/Resume";

const ResumePage: React.FC = () => {
  return (
    <div>
     
      <Resume />
      
    </div>
  );
};

export default ResumePage;
export const metadata = {
  title: "Resume",
  description: "View my resume and professional experience.",
};