import CreateButton from "@components/CreateButton";
import CreateBlock from "@components/CreateBlock";

const App = () => {
    return (
        <div className="p-10 bg-[#E1E1E1] flex flex-wrap">

            {/* Btn to trigger Create*/}
            <CreateButton />

            {/*Create Block*/}
            <CreateBlock />
            

        </div>
    );
}

export default App; 