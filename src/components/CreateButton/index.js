import { PlusIcon } from "@radix-ui/react-icons";

const CreateButton = ({onShow}) => {
    return (
         <div className="w-full flex justify-center">
            <button className="w-[620px] h-[65px]  bg-[#FFFFFF] border-[2px] border-[#C8C8C8] rounded-[5px] flex justify-start items-center p-5 hover:border-[#4A90E2]" onClick={onShow}>
                <PlusIcon className="w-[30px] h-[30px] text-[#C8C8C8] block mr-2"/>
                <span  type="text" className="text-[24px] text-[#C8C8C8]">Add Task</span>
            </button>
        </div>
    )
}

export default CreateButton