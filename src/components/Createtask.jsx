

const Createtask = ({data  , HandleDataChange , HandleSubmit , EditIndex}) => {
    
    return(
        <div className="bg-pink-100   ">
            <div className="ml-14 mr-14 bg-pink-700 flex justify-around rounded">
                 
                
            </div>
            <form onSubmit={HandleSubmit} className="bg-pink-400 mt-5 pb-5">
                <h1 className="text-2xl m-5 pt-4 font-extrabold">Create New Task</h1>

                <div className="lg:flex justify-around ">

                <div className="">
                <h1 className="font-bold">Title :</h1>
                <input type="text" name="Title" placeholder="Enter Title"className="p-3 px-14 rounded mb-5 ml-2" 
                onChange={HandleDataChange} required value={data.Title}></input>
                </div>

                <div>
                <h1 className="font-bold ">Description :</h1>
                <input type="textarea" name="Description" placeholder="Description"className="p-3 px-14 rounded ml-2" 
                onChange={HandleDataChange} required value={data.Description}></input>
                </div>
                
                </div>

                 <div className="lg:flex justify-around">

                    <div className=" mt-4 ">
                    <h2 className="p-2 font-bold rounded" >Filter by Priority :</h2>
                    <select name="Priority" className="p-2 px-24" 
                    onChange={HandleDataChange} required value={data.Priority}>
                        <option>All</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    </div>
                    <div className="mt-4 rounded">
                        <h1 className="font-bold mt-2 mb-2" >Due Date : </h1>
                        <input name="Duedate" className="mb-4 p-2 px-10 rounded ml-2" 
                        onChange={HandleDataChange} required value={data.Duedate}></input>
                    </div>
                    </div>
                    <button type="Sumbit" className="bg-blue-700 text-white text-xl mt-2 p-1 px-3 mr-2 rounded">{EditIndex === null ? "Add" :"Update"}</button>
                    <button className="bg-red-600 text-black text-xl p-1 px-3 rounded">Cancel</button>
            </form>
        </div>
        

    );
}
export default Createtask;