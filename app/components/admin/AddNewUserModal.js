import CloseButton from "./CloseButton";

const AddNewUserModal = ({
  setUserModal,
  setScroll,
  setShowUserCreate,
  setFlex,
  flex,
}) => {
  const handleCloseModal = () => {
    setUserModal(false);
  };

  const handleOpenUserCreate = () => {
    setShowUserCreate(true); // Show UserCreate component
    setScroll(true);
    setFlex(false);
  };

  return (
    <div className="">
      <div className="w-[648px] h-[405px] flex justify-center items-center rounded-2xl relative overflow-hidden bg-white">
        <CloseButton onClose={handleCloseModal} />
        <div>
          <h1 className="text-2xl font-medium mb-5">Add new user</h1>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <input type="radio" name="role" id="administrator" />
              <label htmlFor="administrator">Add as Administrator</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="radio" name="role" id="editor" />
              <label htmlFor="editor">Add as Editor</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="radio" name="role" id="contributor" />
              <label htmlFor="contributor">Add as Contributor</label>
            </div>

            <button
              onClick={handleOpenUserCreate}
              className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUserModal;
