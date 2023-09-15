import CreateButton from "@components/CreateButton";
import CreateBlock from "@components/CreateBlock";

import { useSelector, useDispatch } from "react-redux";
import { show, close } from '@data/slice/showCreateSlice';

const App = () => {
    
    // const [showCreateBlock, setShowCreateBlock] = useState(false);
    const isShown = useSelector((state) => state.createBlock.isShown);
    const dispatch = useDispatch();

    const handleShow = (e) => {
        e.stopPropagation();
        dispatch(show());
    };

    const handleClose = (e) => {
        e.stopPropagation();
        dispatch(close());
    };


    return (
        <div className="p-2 bg-[#E1E1E1] flex flex-wrap">

            {/* Btn to trigger Create*/}
            <CreateButton onShow={handleShow}/>

            {/*Create Block*/}
            <CreateBlock isShown={isShown} onClose={handleClose} />
            

        </div>
    );
}

export default App; 