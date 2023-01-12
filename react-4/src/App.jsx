import { useState, useEffect } from "react";
import ProfileModal from "./components/ProfileModal";
import OffersModal from "./components/OffersModal";
import PrimaryButton from "./shared/PrimaryButton";
import Modal from "./shared/Modal";

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showOffersModal, setShowOffersModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    handleWelcomeModalOpen();
  }, []);

  const profile = {
    name: "Cezar Mocanu",
    phone: "49236853",
    email: "cedfsdfs@yahoo.com",
    address: "Brasov Brasov Calea Molidului 19",
  };

  function handleProfileModalOpen() {
    setShowProfileModal(true);
  }

  function handleProfileModalClose() {
    setShowProfileModal(false);
  }

  function handleOfferModalOpen() {
    setShowOffersModal(true);
  }

  function handleOfferModalClose() {
    setShowOffersModal(false);
  }

  function handleWelcomeModalOpen() {
    setShowWelcomeModal(true);
  }

  function handleWelcomeModalClose() {
    setShowWelcomeModal(false);
  }

  return (
    <div>
      <div className="flex p-2 drop-">
        <div className="grow">
          <h1>METEOR</h1>
        </div>
        <div className="flex gap-2">
          <PrimaryButton
            label={"Profilul meu"}
            handleOnClick={handleProfileModalOpen}
          />
          <PrimaryButton
            label={"Oferte"}
            handleOnClick={handleOfferModalOpen}
          />
        </div>
        
      </div>
      {showProfileModal && (
        <ProfileModal
          profile={profile}
          handleOnClose={handleProfileModalClose}
        />
      )}
      {
        showOffersModal && (
          <OffersModal
            handleOnClose={handleOfferModalClose}
          />
        )
      }
      {
        showWelcomeModal && (
          <Modal
            label="Welcome"
            handleOnClose={handleWelcomeModalClose}
          >
            <div className="p-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis corrupti ipsa error commodi laudantium quidem. Expedita et nulla neque odio, ex quaerat quia aliquam, repellendus eum, quod aspernatur? Eaque?</p>
            </div>
          </Modal>
        )
      }
    </div>
  )
}

export default App
