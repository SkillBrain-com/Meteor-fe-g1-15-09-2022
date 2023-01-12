function ProfileModal({profile, handleOnClose}) {
    const {name, phone, email, address} = profile;
    return (
        <div
            className="bg-black bg-opacity-50 w-screen h-screen absolute z-10 inset-0 flex justify-center items-center"
            onClick={handleOnClose}
        >
            <div className="bg-white rounded drop-shadow-lg w-96">
                <div className="bg-orange-500 rounded-t p-4 flex justify-between">
                    <div/>
                    <p className="text-xl">Profilul meu</p>
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
                <div className="p-4 flex flex-col gap-2">
                    <p className="text-md">{name}</p>
                    <p className="text-md">Telefon: {phone}</p>
                    <p className="text-md">Email: {email}</p>
                    <p className="text-md">Adresa: {address}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;