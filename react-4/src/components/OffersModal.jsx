import Modal from "../shared/Modal";

function OffersModal({ handleOnClose }) {
    return (
        <Modal
            handleOnClose={handleOnClose}
            label="Oferte"
        >
            <div className="p-4 flex flex-col gap-2">
                <p className="text-md">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae delectus in quidem dicta nemo, atque commodi fugit, hic soluta repellendus, aliquid incidunt velit illum aperiam neque quod alias. Aliquid, quidem!
                </p>
            </div>
        </Modal>
    );
}

export default OffersModal;