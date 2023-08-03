import GridComp from "../Grid/gridComp";
import { useState, useEffect } from "react";
import ResetButton from "../Buttons/resetButtonComp";

const MainComp = () => {
  const [whichPlayer, setWhichPlayer] = useState("first");
  const [fieldReset, setFieldReset] = useState(false);
  const [clickedFields, setClickedFields] = useState([]);
  const [winner, setWinner] = useState("");

  const winnerObj = {
    winner,
    setWinner,
  };

  const clickedFieldsObj = {
    clickedFields,
    setClickedFields,
  };

  const whichPlayerObj = {
    whichPlayer,
    setWhichPlayer,
  };

  const resetObj = {
    fieldReset,
    setFieldReset,
  };

  useEffect(() => {
    setClickedFields([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }, [fieldReset]);

  return (
    <>
      <div className="grid justify-items-center">
        <GridComp
          whichPlayerObj={whichPlayerObj}
          clickedFieldsObj={clickedFieldsObj}
          winnerObj={winnerObj}
        />
        <ResetButton resetObj={resetObj} whichPlayerObj={whichPlayerObj} />
      </div>
    </>
  );
};

export default MainComp;
