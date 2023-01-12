import { useState } from "react";
import ProfileModal from "./components/ProfileModal";
import OffersModal from "./components/OffersModal";
import PrimaryButton from "./shared/PrimaryButton";

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showOffersModal, setShowOffersModal] = useState(false);

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
    </div>
  )
}

export default App
