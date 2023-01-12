import Modal from "../shared/Modal";

function ProfileModal({ profile, handleOnClose }) {
    const { name, phone, email, address } = profile;
    return (
        <Modal
            handleOnClose={handleOnClose}
            label="Profilul meu"
        >
            <div className="p-4 flex flex-col gap-2">
                <p className="text-md">{name}</p>
                <p className="text-md">Telefon: {phone}</p>
                <p className="text-md">Email: {email}</p>
                <p className="text-md">Adresa: {address}</p>
            </div>
        </Modal>
    );
}

export default ProfileModal;