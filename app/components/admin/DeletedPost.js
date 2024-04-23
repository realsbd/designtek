import CloseButton from "./CloseButton";

const DeletedPost = ({setShowDeletePost}) => {
  const handleCloseDelete = () => {
    setShowDeletePost(false)
    setScroll(false);
    setFlex(false);
  };

  return (
    <div
      className={`profile-edit w-[90%]relative lg:max-w-[1118px] ml-auto bg-white transition-transform duration-300 transform ${
        slideIn ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseButton onClose={handleCloseDelete} />
      DeletedPost
    </div>
  );
};

export default DeletedPost;
