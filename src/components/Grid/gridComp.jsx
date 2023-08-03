import { useState, useEffect } from "react";
import { Rule } from "../Main/rule";

const GridComp = (props) => {
  const { whichPlayer, setWhichPlayer } = props.whichPlayerObj;
  const { clickedFields, setClickedFields } = props.clickedFieldsObj;
  const { winner, setWinner } = props.winnerObj;

  const playerChange = () => {
    whichPlayer === "first"
      ? setWhichPlayer("second")
      : setWhichPlayer("first");
  };

  const [letter, setLetter] = useState("O");

  const letterChange = () => {
    setLetter((prevLetter) => (prevLetter === "O" ? "X" : "O"));
  };

  const elementHandle = (rowIndex, columnIndex) => {
    const updatedFields = [...clickedFields];
    updatedFields[rowIndex][columnIndex] = letter;
    setClickedFields(updatedFields);
  };

  useEffect(() => {
    console.log("clickedFields:", clickedFields);
  }, [clickedFields]);

  useEffect(() => {
    console.log("player:", whichPlayer);
  }, [whichPlayer]);

  useEffect(() => {
    console.log("gyöztes ", winner, "player");
  }, [winner]);

  useEffect(() => {
    alert("The winner is the:", winner, "player");
  }, [winner]);

  return (
    <>
      {clickedFields.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row justify-center items-center select-none"
        >
          {row.map((element, columnIndex) => (
            <div
              key={columnIndex}
              className={` w-20 md:w-60 h-20 md:h-60 bg-slate-700/50 border border-gray-400/20 cursor-pointer flex justify-center items-center text-3xl md:text-[6rem] font-bold text-white ${
                element !== "" && "pointer-events-none"
              }`}
              onClick={() => {
                letterChange();
                elementHandle(rowIndex, columnIndex);
                playerChange();
                Rule(clickedFields, setWinner);
              }}
            >
              {element}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default GridComp;
