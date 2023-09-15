import { StarFilledIcon, CalendarIcon, Pencil1Icon, FileIcon, ChatBubbleIcon} from "@radix-ui/react-icons";
const TodoItem = ({ todo, onUpdate }) => {
    const favoriteIconStyle = todo.isFavorite ? "w-[30px] h-[30px] text-[#FFD700] block mr-2 hover:cursor-pointer hover:text-[#4A90E2]" : "w-[30px] h-[30px] text-[#C8C8C8] block mr-2 hover:cursor-pointer hover:text-[#4A90E2]";


    const dueDate = new Date(todo.dueDate);
    //分成日期和時間
    const date = dueDate.toISOString().split('T')[0];
    const time = dueDate.toISOString().split('T')[1].split('.')[0];

    return (
        <div className="w-full flex justify-center flex-wrap mb-5">
    
            <div className="w-[620px] h-[65px] flex justify-start items-center bg-[#F2F2F2] p-5 border-[1px] border-b-[#C8C8C8] rounded-t-[5px]">
                        <input type="checkbox" className="form-checkbox h-6 w-6 text-yellow-600 border-none outline-none focus:ring-0 hover:cursor-pointer" checked={todo.isCompleted}/>
                        <input type="text" className="flex-1 h-[28px] bg-transparent border-none rounded-[5px] focus:outline-none p-5 text-black text-[22px]" placeholder="Type Something Here..." value={todo.title}/>
                        <StarFilledIcon className={favoriteIconStyle} />
                        <Pencil1Icon className="w-[30px] h-[30px] text-[#C8C8C8] block hover:cursor-pointer hover:text-[#4A90E2]"/>
            </div>
            
            <div className="w-full flex justify-center items-center">
                <div className="flex justify-center items-center w-[620px] py-[20px] bg-[#F2F2F2] ">

                    <div className=""> {/* 三個區塊 */}
                        {/* Deadline */}
                        <div className="w-[445px] h-[70px]">
                            <div className="flex items-center">
                                <CalendarIcon className="mr-2"/>
                                <span>Deadline</span>
                            </div>
                            <div className="mx-3 my-2"> 
                                <input className="bg-white mx-3" type="date" value={date}/>
                                <input className="bg-white" type="time" value={time}/>
                            </div>
                        </div>
                            
                        {/* Comment */}
                        <div className="w-[445px] h-[150px]">
                            <div className="flex items-center">
                                <ChatBubbleIcon className="mr-2"/>
                                <span>Comment</span>
                            </div>
                            <div className="w-full h-full px-5 my-1"> 
                                <textarea className="bg-white w-full h-[110px] outline-none p-2" type="text" placeholder="Type Something Here..." style={{  resize: 'none' }} value={todo.comment}/>
                            </div>
                        </div>

                        
                    </div>
                    

                </div>

            </div>
        

        </div>

    );
}

export default TodoItem;