import React from 'react';
import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

const CommentBlock = () => {
  return (
    <div className='flex flex-col gap-2 items-start'>
      <h1 className='text-xl mt-5'>Leave a Comment</h1>
      <Textarea
        labelPlacement="outside"
        placeholder="Write your comments here..."
        className="max-w-full h-[100px]"
      />
      <Button className='bg-indigo-500 text-white rounded-lg py-6 px-10'>Publish review</Button>
    </div>
  );
};

export default CommentBlock;