import { StarIcon, CalendarIcon, Pencil1Icon, FileIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
const CreateBlock = () => {
    return (
        <div className="w-full flex flex-wrap justify-center mt-3 ">
                <div className="w-[620px] h-[65px] flex justify-start items-center bg-[#F2F2F2] p-5 border-[1px] border-b-[#C8C8C8] rounded-t-[5px]">
                    <input type="checkbox" className="form-checkbox h-6 w-6 text-yellow-600 border-none outline-none focus:ring-0 hover:cursor-pointer" />
                    <input type="text" className="flex-1 h-[28px] bg-transparent border-none rounded-[5px] focus:outline-none p-5 text-black text-[22px]" placeholder="Type Something Here..." />
                    <StarIcon className="w-[30px] h-[30px] text-[#C8C8C8] block mr-2 hover:cursor-pointer hover:text-[#4A90E2]" />
                    <Pencil1Icon className="w-[30px] h-[30px] text-[#C8C8C8] block hover:cursor-pointer hover:text-[#4A90E2]"/>
                </div>
                
                <div className="w-full flex justify-center items-center">
                    <div className="flex justify-center items-center w-[620px] py-[40px] bg-[#F2F2F2] rounded-b-[5px]">

                        <div className="">
                            {/* 分三個區塊 */}
                            <div className="w-[445px] h-[70px]">
                                <div className="flex items-center">
                                    <CalendarIcon className="mr-2"/>
                                    <span>Deadline</span>
                                </div>
                                <div className="mx-3 my-2"> 
                                    <input className="bg-white mx-3" type="date"/>
                                    <input className="bg-white" type="time"/>
                                </div>
                            </div>



                            <div className="w-[445px] h-[80px]">
                                <div className="flex items-center">
                                    <FileIcon className="mr-2"/>
                                    <span>File</span>
                                </div>
                                <div className="mx-3"> 
                                    <input className="bg-white mx-3" type="file"/>
                                </div>
                            </div>
                            <div className="w-[445px] h-[150px]">
                                <div className="flex items-center">
                                    <ChatBubbleIcon className="mr-2"/>
                                    <span>Comment</span>
                                </div>
                                <div className="w-full h-full px-5 my-1"> 
                                    <textarea className="bg-white w-full h-[110px] outline-none p-2" type="text" placeholder="Type Something Here..." style={{  resize: 'none' }} />
                                </div>
                            </div>

                            
                        </div>
                        

                    </div>

                </div>

            </div>
    )
}

export default CreateBlock