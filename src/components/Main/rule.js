export function Rule(field, winSet) {
  var nyertes;

  //first win ?
  if (field[0][0] === "O" && field[1][0] === "O" && field[2][0] === "O") {
    nyertes = "first";
  } else if (
    field[0][0] === "O" &&
    field[0][1] === "O" &&
    field[0][2] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[0][0] === "O" &&
    field[1][1] === "O" &&
    field[2][2] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[0][2] === "O" &&
    field[1][1] === "O" &&
    field[2][0] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[1][0] === "O" &&
    field[1][1] === "O" &&
    field[1][2] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[2][0] === "O" &&
    field[2][1] === "O" &&
    field[2][2] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[0][1] === "O" &&
    field[1][1] === "O" &&
    field[2][1] === "O"
  ) {
    nyertes = "first";
  } else if (
    field[0][2] === "O" &&
    field[1][2] === "O" &&
    field[2][2] === "O"
  ) {
    nyertes = "first";
  } else {
    if (field[0][0] === "X" && field[1][0] === "X" && field[2][0] === "X") {
      nyertes = "second";
    } else if (
      field[0][0] === "X" &&
      field[0][1] === "X" &&
      field[0][2] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[0][0] === "X" &&
      field[1][1] === "X" &&
      field[2][2] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[0][2] === "X" &&
      field[1][1] === "X" &&
      field[2][0] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[1][0] === "X" &&
      field[1][1] === "X" &&
      field[1][2] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[2][0] === "X" &&
      field[2][1] === "X" &&
      field[2][2] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[0][1] === "X" &&
      field[1][1] === "X" &&
      field[2][1] === "X"
    ) {
      nyertes = "second";
    } else if (
      field[0][2] === "X" &&
      field[1][2] === "X" &&
      field[2][2] === "X"
    ) {
      nyertes = "second";
    }
  }
  //second win ?

  if (nyertes === "first") {
    return winSet("first");
  } else if (nyertes === "second") {
    return winSet("second");
  }
}
