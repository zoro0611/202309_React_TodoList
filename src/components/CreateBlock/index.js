import { StarIcon, CalendarIcon, Pencil1Icon, FileIcon, ChatBubbleIcon, Cross1Icon, PlusIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';



const CreateBlock = ({isShown = false,  onClose}) => {
    const [taskText, setTaskText] = useState('');
    const [deadline_date, setDeadlineDate] = useState('');
    const [deadline_time, setDeadlineTime] = useState('');
    const [deadline, setDeadline] = useState('');
    const [comment, setComment] = useState('');

    const todoList = useSelector((state) => state.todo.todoItemList);
    const add = (newTodo) => ({ type: "todo/add", payload: newTodo });
    const close = () => ({ type: "createBlock/close" });
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.stopPropagation();
        const newTodo = {
            id: todoList.length + 1,
            isFavorite: false,
            isCompleted: false,
            title: taskText,
            comment: comment,
            dueDate: deadline,
        };
        dispatch(add(newTodo)); 
        dispatch(close());
    };
    

    const handleTaskTextChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleDeadlineDateChange = (e) => {
        setDeadlineDate((prev) => {
            const newDate = e.target.value;
            handleDeadlineChange(newDate, deadline_time);
            return newDate;
        });
    };
    
    const handleDeadlineTimeChange = (e) => {
        setDeadlineTime((prev) => {
            const newTime = e.target.value;
            handleDeadlineChange(deadline_date, newTime);
            return newTime;
        });
    };
    
    const handleDeadlineChange = (newDate, newTime) => {
        const newDeadline = `${newDate} ${newTime}:00`;
        setDeadline(newDeadline);
    };
    
    const handleCommentChange = (e) => {
        setComment(prev=>e.target.value);
    }
    useEffect(() => {
        console.log("Task Text:", taskText);
        console.log("Deadline:", deadline);
        console.log("Comment:", comment);
      }, [taskText, deadline, comment]);

    // }
    if (isShown)   {
        return (
            <div className="w-full flex flex-wrap justify-center mt-3 ">
                    <div className="w-[620px] h-[65px] flex justify-start items-center bg-[#F2F2F2] p-5 border-[1px] border-b-[#C8C8C8] rounded-t-[5px]">
                        <h1 className="text-[26px] font-bold">Task:</h1>
                        {/* <input type="checkbox" className="form-checkbox h-6 w-6 text-yellow-600 border-none outline-none focus:ring-0 hover:cursor-pointer" /> */}
                        <input type="text" className="flex-1 h-[28px] bg-transparent border-none rounded-[5px] focus:outline-none p-5 text-black text-[22px]" placeholder="Type Something Here..." onChange={handleTaskTextChange} />
                        {/* <StarIcon className="w-[30px] h-[30px] text-[#C8C8C8] block mr-2 hover:cursor-pointer hover:text-[#4A90E2]" />
                        <Pencil1Icon className="w-[30px] h-[30px] text-[#C8C8C8] block hover:cursor-pointer hover:text-[#4A90E2]"/> */}
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
                                        <input className="bg-white mx-3" type="date" onChange={handleDeadlineDateChange}/>
                                        <input className="bg-white" type="time" onChange={handleDeadlineTimeChange}/>
                                    </div>
                                </div>
                                    
                                {/* Comment */}
                                <div className="w-[445px] h-[150px]">
                                    <div className="flex items-center">
                                        <ChatBubbleIcon className="mr-2"/>
                                        <span>Comment</span>
                                    </div>
                                    <div className="w-full h-full px-5 my-1"> 
                                        <textarea className="bg-white w-full h-[110px] outline-none p-2" type="text" placeholder="Type Something Here..." style={{  resize: 'none' }} onChange={handleCommentChange}/>
                                    </div>
                                </div>
    
                                
                            </div>
                            
    
                        </div>
    
                    </div>
    
                    <div className="w-full flex justify-center items-center">
                        <div className="flex w-[620px] rounded-b-[5px] bg-[#F2F2F2]">
                            <button className="w-[50%] bg-white rounded-bl-[5px] text-red-500 p-4 flex items-center justify-center" onClick={onClose}>
                                <Cross1Icon className="w-[30px] h-[30px] text-red-500 block mr-2"/>
                                <span className="text-[24px]">Cancel</span>
                            </button>
                            <button className="flex-1 bg-[#4A90E2] rounded-br-[5px] text-white p-4 flex items-center justify-center" onClick={handleAddTodo}>
                                <PlusIcon className="w-[36px] h-[36px] text-white block mr-2"/>
                                <span className="text-[24px]">Add Task</span>
                                
                            </button>
                        </div>
                    </div>
    
            </div>
        )
    }

        
    
   
}

export default CreateBlock