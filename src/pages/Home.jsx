
export function Home() {
    return (
        <div className="overflow-hidden h-full w-full  ">
            
            {/* Cabeçalho */}

            <header className="p-8 flex w-full justify-between items-center">

                {/* Botão Voltar */}
                <button 
                    className="ml-3 p-2 rounded text-white px-5"
                >
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z" fill="#C4C4C4" />
                    </svg>
                </button>

                {/*    */}

                <div className="relative w-full max-w-sm flex items-center space-x-4 mr-12">

                    {/* Barra de Pesquisa */}
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            className="w-full h-11 px-4 py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Pesquisar..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-gray-400"
                            >
                                <g clip-path="url(#clip0_17_45)">
                                    <path
                                        d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_45">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Botão de Notificação */}
                    <button className="p-2 rounded text-gray-500 hover:bg-gray-100">
                        <svg width="23" height="26" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_40)">
                                <path d="M8.5003 18.75C9.17044 18.75 9.71459 18.1883 9.71459 17.4988H10.9289C10.9289 18.8781 9.83905 20 8.5003 20C7.16155 20 6.07173 18.8781 6.07173 17.4988H7.28602C7.28602 18.1883 7.83017 18.75 8.5003 18.75ZM0.555079 13.0785C1.61606 12.0387 2.42735 10.9504 2.42735 7.26172C2.42735 4.15273 4.83278 1.61719 7.89316 1.31055V0.625C7.89316 0.279687 8.16486 0 8.5003 0C8.83575 0 9.10745 0.279687 9.10745 0.625V1.31094C12.1678 1.61758 14.5733 4.15273 14.5733 7.26172C14.5733 10.95 15.3849 12.0387 16.4459 13.0785C16.976 13.598 17.1434 14.3836 16.8728 15.0797C16.5966 15.7906 15.9317 16.25 15.1789 16.25H1.82173C1.06887 16.25 0.404051 15.7902 0.1278 15.0793C-0.142757 14.3832 0.0249653 13.598 0.555079 13.0785ZM1.82173 15H15.1789C15.7189 15 15.9887 14.3566 15.6084 13.984C14.2856 12.6875 13.359 11.2363 13.359 7.26211C13.359 4.63008 11.1858 2.5 8.5003 2.5C5.81521 2.5 3.64164 4.62969 3.64164 7.26172C3.64164 11.2207 2.72296 12.6797 1.39218 13.9836C1.01044 14.3582 1.28403 15 1.82173 15Z" fill="#C4C4C4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="17" height="20" fill="white" transform="matrix(-1 0 0 1 17 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </header>

            {/*    */}

            <main className="flex justify-around p-8 ">

                {/* Card 1 */}

                <div className="text-right p-6 w-80 h-48 rounded-lg bg-sky-100">
                    <div className="text-left h-24">
                        <svg className="mb-4" width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.912 11.4289L26.037 5.06989C24.7013 4.64313 23.2995 4.64313 21.9638 5.06989L2.08875 11.4289C0.8205 11.8349 0 12.9423 0 14.25C0 15.5577 0.8205 16.6651 2.088 17.0711L4.31625 17.7836C4.06875 18.2422 3.88575 18.7358 3.7665 19.2531C2.96475 19.6375 2.4 20.4339 2.4 21.375C2.4 22.3198 2.96775 23.1206 3.77475 23.5029L2.421 31.805C2.30025 32.5464 2.71425 33.25 3.2715 33.25H6.32775C6.885 33.25 7.29975 32.5464 7.17825 31.805L5.82525 23.5029C6.63225 23.1206 7.2 22.3198 7.2 21.375C7.2 20.5883 6.78825 19.9248 6.19275 19.4921C6.3045 19.1462 6.47775 18.8345 6.6855 18.5413L10.6958 19.8246L9.6 28.5C9.6 31.1236 16.047 33.25 24 33.25C31.953 33.25 38.4 31.1236 38.4 28.5L37.3043 19.8246L45.912 17.0703C47.1795 16.6651 48 15.5577 48 14.25C48 12.9423 47.1795 11.8349 45.912 11.4289ZM35.961 28.3412C35.154 29.1821 31.053 30.875 24 30.875C16.947 30.875 12.846 29.1821 12.039 28.3412L13.0208 20.5682L21.9638 23.4294C22.1588 23.4917 23.8928 24.1144 26.037 23.4294L34.98 20.5682L35.961 28.3412ZM45.171 14.8126L25.296 21.1716C24.4478 21.4433 23.5523 21.4433 22.704 21.1716L9.52875 16.956L24.2205 14.2292C24.8723 14.109 25.3013 13.4885 25.179 12.8436C25.0575 12.1979 24.417 11.7755 23.7795 11.8958L8.496 14.7309C7.566 14.9031 6.73275 15.2987 6.015 15.8316L2.82825 14.8118C2.2395 14.6226 2.26875 13.8663 2.82825 13.6874L22.7033 7.32836C23.8358 6.96617 24.7913 7.16731 25.2952 7.32836L45.1703 13.6874C45.7245 13.8648 45.7635 14.6226 45.171 14.8126Z" fill="#74C1ED" />
                        </svg>
                        <p> Estudantes </p>
                    </div>
                    <span className="text-4xl"> <strong> puta que pariu</strong> </span>

                </div>

                {/* Card 2 */}

                <div className="text-right p-6 w-80 h-48 rounded-lg bg-pink-100">
                    <div className="text-left h-24">
                        <svg className="mb-4" width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_55)">
                                <path d="M3.5 0H24.5C26.433 0 28 1.46904 28 3.28125V35L14 27.3438L0 35V3.28125C0 1.46904 1.56698 0 3.5 0ZM2.33333 31.1915L14 24.8113L25.6667 31.1915V3.28125C25.6667 2.67818 25.1433 2.1875 24.5 2.1875H3.5C2.85673 2.1875 2.33333 2.67818 2.33333 3.28125V31.1915Z" fill="#EE95C5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_55">
                                    <rect width="28" height="35" fill="white" transform="matrix(-1 0 0 1 28 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p> Cursos </p>
                    </div>
                    <span className="text-4xl"> <strong> 12 </strong> </span>

                </div>

                {/* Card 3 */}

                <div className="text-right p-6 w-80 h-48 rounded-lg bg-yellow-100">
                    <div className="text-left h-24">
                        <svg className="mb-4" width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6484 19.5859L15.0234 18.0078C14.0781 17.7422 13.4141 16.8828 13.4141 15.9219C13.4141 14.7266 14.4141 13.75 15.6406 13.75H19.1562C20.0312 13.75 20.8672 14.0312 21.5469 14.5391C21.7969 14.7266 22.1406 14.6953 22.3594 14.4766L23.2422 13.5781C23.5078 13.3125 23.4766 12.875 23.1797 12.6406C22.0391 11.7344 20.6328 11.2422 19.1484 11.2422H18.75V8.11719C18.75 7.77344 18.4688 7.49219 18.125 7.49219H16.875C16.5312 7.49219 16.25 7.77344 16.25 8.11719V11.2422H15.6406C13.0391 11.2422 10.9141 13.3359 10.9141 15.9141C10.9141 17.9922 12.3281 19.8359 14.3438 20.4062L19.9688 21.9844C20.9141 22.25 21.5781 23.1094 21.5781 24.0703C21.5781 25.2656 20.5781 26.2422 19.3516 26.2422H15.8359C14.9609 26.2422 14.125 25.9609 13.4453 25.4531C13.1953 25.2656 12.8516 25.2969 12.6328 25.5156L11.75 26.4141C11.4844 26.6797 11.5156 27.1172 11.8125 27.3516C12.9531 28.2578 14.3594 28.75 15.8438 28.75H16.25V31.875C16.25 32.2188 16.5312 32.5 16.875 32.5H18.125C18.4688 32.5 18.75 32.2188 18.75 31.875V28.75H19.3594C21.9609 28.75 24.0859 26.6562 24.0859 24.0781C24.0781 22 22.6719 20.1562 20.6484 19.5859ZM31.25 2.5H3.75C1.67969 2.5 0 4.17969 0 6.25V33.75C0 35.8203 1.67969 37.5 3.75 37.5H31.25C33.3203 37.5 35 35.8203 35 33.75V6.25C35 4.17969 33.3203 2.5 31.25 2.5ZM32.5 33.75C32.5 34.4375 31.9375 35 31.25 35H3.75C3.0625 35 2.5 34.4375 2.5 33.75V6.25C2.5 5.5625 3.0625 5 3.75 5H31.25C31.9375 5 32.5 5.5625 32.5 6.25V33.75Z" fill="#F6C762" />
                        </svg>
                        <p> Pagamentos </p>
                    </div>
                    <span className="text-4xl"> <strong> </strong> </span>

                </div>

                {/* Card 4 */}

                <div className="text-right p-6 w-80 h-48 rounded-lg bg-amber-600">
                    <div className="text-left h-24">
                        <svg className="mb-4" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2.125C21.1039 2.125 24.4375 5.45859 24.4375 9.5625C24.4375 13.6664 21.1039 17 17 17C12.8961 17 9.5625 13.6664 9.5625 9.5625C9.5625 5.45859 12.8961 2.125 17 2.125ZM25.5 23.375C29.0129 23.375 31.875 26.2371 31.875 29.75V31.875H2.125V29.75C2.125 26.2371 4.98711 23.375 8.5 23.375C14.1445 23.375 12.9691 24.4375 17 24.4375C21.0441 24.4375 19.8488 23.375 25.5 23.375ZM17 0C11.7207 0 7.4375 4.2832 7.4375 9.5625C7.4375 14.8418 11.7207 19.125 17 19.125C22.2793 19.125 26.5625 14.8418 26.5625 9.5625C26.5625 4.2832 22.2793 0 17 0ZM25.5 21.25C19.3641 21.25 20.7852 22.3125 17 22.3125C13.2281 22.3125 14.6293 21.25 8.5 21.25C3.80508 21.25 0 25.0551 0 29.75V31.875C0 33.0504 0.949609 34 2.125 34H31.875C33.0504 34 34 33.0504 34 31.875V29.75C34 25.0551 30.1949 21.25 25.5 21.25Z" fill="white" />
                        </svg>
                        <p> Usuários </p>
                    </div>
                    <span className="text-4xl"> <strong> 3 </strong> </span>

                </div>


            </main>
        </div>
    );
}