export function Form() {
    return(
        
        <div className=" flex flex-wrap text-center items-center justify-center bg-white h-2/3 w-80 rounded-lg " >
            <h1 className="strong w-full text-2xl h-4"><strong>CRUD OPERATIONS</strong></h1>
            <h2 className="strong w-full h-2 text-lg"><strong>LOGAR</strong></h2>
            <p className="text-gray-500 w-full h-2">Entre com suas credenciais para acessar sua conta</p>

            <div className=" flex flex-wrap gap-4 text-left justify-center ">
                <div>
                    <label>Email</label>
                    <input className="text-slate-400 border-2 border-slate-200 outline-0 w-full rounded"type="text" placeholder="Entre com seu email"/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="text" placeholder="Entre com sua senha"  className=" text-slate-400 border-2 border-slate-200 outline-0 rounded w-full " />
                </div>

                <button className="w-72 rounded text-white bg-yellow-400">Logar</button>
            </div>
        </div>
        

    )
}