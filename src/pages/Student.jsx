import { Card } from "../components/Card";


export function Student() {
    return (
        <div className=" w-full h-full overflow-hidden">
            <header className="p-5 flex w-full justify-between">
                <div>seta</div>
                <div>
                    <input
                        className="mr-4 p-1 border rounded-md"
                        type="search"
                        placeholder="Search.."
                    />
                    sinoz
                </div>
            </header>
            <main className="p-5 bg-gray-100 w-full h-full">
                <div className="flex justify-between">
                    <strong className="text-2xl">Students List</strong>
                    <div>
                        cima-baixo
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