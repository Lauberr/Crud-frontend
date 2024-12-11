export function Form() {
    return(
        <div className="flex flex-wrap text-center items-center justify-center bg-white h-3/5 w-1/4 rounded-xl p-5" >
            <h1 className=" strong w-full text-2xl"><strong className="border-l-yellow-400 border-l-4 px-2">CRUD OPERATIONS</strong></h1>
            <h2 className="strong w-full text-lg"><strong>SIGN IN</strong></h2>
            <p className="text-gray-500 w-full">Entre com suas credenciais para acessar sua conta</p>

            <div className="w-full flex flex-wrap gap-4 text-left justify-center ">
                <div className="w-full">
                    <label>Email</label>
                    <input className="text-slate-400 border-2 border-slate-200 outline-0 w-full rounded"type="email" placeholder="Enter your email"/>
                </div>

                <div className="w-full">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"  className=" text-slate-400 border-2 border-slate-200 outline-0 rounded w-full " />
                </div>

                <button className="w-full rounded text-white bg-yellow-400">SIGN IN</button>

                <p>Forgot your password? <a href="#" className="text-yellow-400">Reset Password</a></p>
            </div>
        </div>
    )
}