const ResetButton = (props) => {
  const { fieldReset, setFieldReset } = props.resetObj;
  const { whichPlayer, setWhichPlayer } = props.whichPlayerObj;
  const handleClick = () => {
    setFieldReset(!fieldReset);

    setWhichPlayer("first");
  };

  return (
    <div
      className="grid rounded-lg text-slate-800 text-lg font-bold bg-red-800 w-24 h-8 m-10 text-center items-center hover:bg-red-600 active:bg-red-400 select-none cursor-pointer"
      onClick={handleClick}
    >
      <p>RESET</p>
    </div>
  );
};
export default ResetButton;
