import { Card } from "../components/Card";


export function Student() {
    return (
        <div className=" w-full h-full overflow-hidden">
            <header className="p-5 flex w-full justify-between">
                <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
                <div>
                    <input
                        className="mr-4 p-1 border rounded-md"
                        type="search"
                        placeholder="Search.."
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>
            </header>
            <main className="p-5 bg-gray-100 w-full h-full">
                <div className="flex justify-between">
                    <strong className="text-2xl">Students List</strong>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/></svg>
                        <button className="ml-3 p-2 rounded text-white px-5 bg-yellow-400">ADD NEW STUDENT</button>
                    </div>
                </div>
                <hr className="mt-4" />
                
                {/* icone de setas */}

                <button className="roudend bg-orange-500"></button>

                <table className="w-full">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Enroll Number</th>
                        <th>Date of admission</th>
                    </tr>
                    <Card/> 
                </table>

            </main>
        </div>
    );
  }