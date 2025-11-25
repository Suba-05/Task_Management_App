import React from 'react';

const Table = ({TableData , HandleEdit , HandleDelete}) => {
    return(
        <div className='bg-pink-200 '>
            <div>
                    <h1 className="mt-6 text-2xl ml-14 mr-14"><strong>Your Tasks</strong></h1>
                </div>

        <table className='w-full border-solid mr-6 mt-6 rounded'>
            
            <thead className='border-solid '>
                <tr className=" bg-pink-700  text-white mb-2 rounded md:gap-32 lg:gap-56 text-xl font-bold ">
                <th>Title</th>
                <th>Description</th>
                <th> Filter</th>
                <th>Duedate</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>{TableData.map((data , index) => {
                return (
                    <tr key={index} className="w-full  bg-pink-500 p-2 text-white mb-2 rounded md:gap-32 lg:gap-56 text-xl font-bold">
                        <td className="">{data.Title}</td>
                        <td className="">{data.Description}</td>
                        <td className="">{data.Priority}</td>
                        <td className="">{data.Duedate}</td>
                        <td className='text-right'>
                            <button className="bg-green-600 text-white p-2 ml-2 rounded"
                            onClick = {() => {
                                HandleEdit(index);
                            }}
                            >Edit</button>
                            <button className="bg-red-600 text-white p-2 ml-2 rounded"
                            onClick = {() => {
                                HandleDelete(index);
                            }}
                            >Delete</button>
                        </td>
                    </tr>
                )
            })}</tbody>
        </table>
        </div>
    );
}
export default Table;