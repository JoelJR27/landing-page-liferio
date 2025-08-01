import { AiOutlineLoading } from "react-icons/ai";
export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <AiOutlineLoading className="text-primary-color text-[60px] animate-spin" />
    </div>
  );
}
