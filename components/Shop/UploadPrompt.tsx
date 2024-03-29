import { styles } from '@/utils/styles'
import { useAuth } from '@clerk/nextjs';
import { Button, Input, Select,
    SelectItem,
    Selection,
    Textarea, } from '@nextui-org/react'
import { IoDocumentAttachOutline } from "react-icons/io5";
import Image from "next/image";
import React, { ChangeEvent, DragEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

type Props = {}

type PromptData ={
    name: string;
    shortDescription:string;
    description:string;
    images:string[];
    attachments:string[];
    estimatedPrice: string;
    price: string;
    tags:string;

};

const categorieItem = [
    {
      title: "Chatgpt",
    },
    {
      title: "Midjourney",
    },
    {
      title: "Bard",
    },
    {
      title: "Dalle",
    },
  ];

const UploadPrompt = (props: Props) => {
    const [promptData,setPromptData] = useState<PromptData>({
        name: "",
        shortDescription: "",
        description: "",
        images: [],
        attachments: [],
        estimatedPrice: "",
        price: "",
        tags: "",
    });
    const [dragging, setDragging] = useState<Boolean>(false);
    const {userId} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState<Selection>(new Set([]));

    const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const files = Array.from(e.target.files);
    
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPromptData((prevData) => ({
                  ...prevData,
                  images: [...prevData.images, reader.result as string],
                }));
              }
            };
            reader.readAsDataURL(file);
          });
        }
      };

      const handleAttachmentFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const files = Array.from(e.target.files);
    
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPromptData((prevData) => ({
                  ...prevData,
                  attachments: [...prevData.attachments, reader.result as string],
                }));
              }
            };
            reader.readAsDataURL(file);
          });
        }
      };
    
      const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);
      };
    
      const handleImageDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);
    
        if (e.dataTransfer.files) {
          const files = Array.from(e.dataTransfer.files);
    
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPromptData((prevData) => ({
                  ...prevData,
                  images: [...prevData.images, reader.result as string],
                }));
              }
            };
            reader.readAsDataURL(file);
          });
        }
      };
    
      const handleAttachmentDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files) {
          const files = Array.from(e.dataTransfer.files);
    
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPromptData((prevData) => ({
                  ...prevData,
                  attachments: [...prevData.attachments, reader.result as string],
                }));
              }
            };
            reader.readAsDataURL(file);
          });
        }
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const categoryString = Array.from(category).join(",");
        await axios
          .post("/api/upload-prompt", {
            ...promptData,
            category: categoryString,
            sellerId: userId,
          })
          .then((res) => {
            setIsLoading(false);
            toast.success("Prompt uploaded successfully");
            setPromptData({
              name: "",
              shortDescription: "",
              description: "",
              images: [],
              attachments: [],
              estimatedPrice: "",
              price: "",
              tags: "",
            });
            redirect("/shop/prompts");
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
            // toast.error(error.data.message);
          });
      };
    
      const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(new Set([e.target.value]));
      };

  return (
    <div>
        <h1 className={`${styles.heading} text-center py-5`}>
           Upload your Prompt
        </h1>
        <br />
       <form className='w-[90%] m-auto' onSubmit={handleSubmit}>
            <Input
            type='text'
            label="Title"
            value={promptData.name}
            onChange={(e) =>
                setPromptData({ ...promptData, name: e.target.value })
              }
              variant="bordered"
              required
              placeholder="Enter your prompt title"
            />
       </form>
    </div>
  )
}

export default UploadPrompt