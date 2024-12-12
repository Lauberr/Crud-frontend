


export function LoginPage() {
    return (
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-screen w-screen flex items-center justify-center">
            <div className=" flex flex-wrap text-center items-center justify-center bg-white h-3/6 w-1/4 rounded-2xl p-5">
                <h1 className="w-full text-3xl"><strong className="border-l-yellow-400 border-l-4 px-2">CRUD OPERATIONS</strong></h1>
                <div>
                    <strong className="w-full text-xl">LOGAR</strong><br />
                    <p className="text-gray-500 w-full">Entre com suas credenciais para acessar sua conta</p>
                </div>
                
                
                {/* <div className="w-full text-lg"><strong>SIGN IN</strong></div>
                <div className="text-gray-500 w-full">Entre com suas credenciais para acessar sua conta</div> */}

                <div className="w-full flex flex-wrap gap-4 text-left justify-center">
                    <div className="w-full">
                        <label className="text-slate-500">Email</label>
                        <input 
                            className="placeholder:text-slate-300 mt-1 p-2 text-slate-500 border border-slate-200 outline-0 w-full rounded"
                            type="email"    
                            placeholder="Entre com seu email"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-slate-500">Senha</label>
                        <input 
                            className=" placeholder:text-slate-300 mt-1 p-2 text-slate-500 border border-slate-200 outline-0 rounded w-full " 
                            type="password" 
                            placeholder="Entre com sua senha"  
                        />
                    </div>

                    <button className="w-full h-11 rounded text-white bg-yellow-400">LOGAR</button>

                    <p className="text-gray-500">Esqueceu sua senha? <a href="#" className="text-yellow-500">Resetar senha</a></p>
                </div>
            </div>
        </div>
    );
  }