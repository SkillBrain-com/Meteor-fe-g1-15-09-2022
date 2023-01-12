function Modal({label, handleOnClose, children}){
    return (
        <div
            className="bg-black bg-opacity-50 w-screen h-screen absolute z-10 inset-0 flex justify-center items-center"
            onClick={handleOnClose}
        >
            <div className="bg-white rounded drop-shadow-lg w-96">
                <div className="bg-orange-500 rounded-t p-4 flex justify-between">
                    <div/>
                    <p className="text-xl">{label}</p>
                    <button
                        className={[
                            "text-md p-2 rounded-full h-8 w-8 flex justify-center items-center text-gray-800",
                            "hover:bg-gray-100/50",
                            "active:bg-gray-100/70",
                        ].join(" ")}
                        onClick={handleOnClose}
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;