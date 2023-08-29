"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(value.trim()[0].toLowerCase()!=='a'){
      push(`/prediction/${value}`);
    }else{
      push(`/starta`);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-[url('https://static.toiimg.com/photo/msid-58515713,width-96,height-65.cms')]">
      <h1 className="text-2xl font-semibold mb-4 bg-white p-8 rounded-md text-center text-black">
        next app First complete project
        </h1>

      <div className="p-12 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-center text-black">
          Enter a string but not start with A
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Type something..."
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
