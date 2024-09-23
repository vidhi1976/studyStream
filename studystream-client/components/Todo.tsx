"use client";
import Image from "next/image";
import React , {useState} from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FileUpload } from "@/components/ui/file-upload";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card  card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        To-Do:
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
 
  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}

const AssignmentContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"assignment-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Assignment:
              </span>{" "}
              Complete the given programming tasks, debug the provided code snippets, and document the results. Ensure to follow the given specifications and submit the assignments by the due date.
            </p>
            {/* File Upload Component */}
            <div className="mt-6">
              <FileUploadDemo />
            </div>
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Algorithms",
    title: "Implement and test sorting algorithms.",
    // src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
  {
    category: "Data Structures",
    title: "Build and analyze binary search trees.",
    // src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
  {
    category: "Software Engineering",
    title: "Develop a small web application using React.",
    // src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
  {
    category: "Database Systems",
    title: "Design and normalize a database schema.",
    // src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
  {
    category: "Operating Systems",
    title: "Implement a basic file system.",
    // src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
  {
    category: "Computer Networks",
    title: "Create a simple network protocol.",
    // src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AssignmentContent />,
  },
];
