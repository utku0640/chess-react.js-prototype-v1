import { useEffect, useRef, useState } from "react";
// setup for using in the attackForQueen function

const MoveForWhiteQueen = ({
  pieces,
  setFirstMoveForQueen,
  setSecondMoveForQueen,
  setThirdMoveForQueen,
  setFourthMoveForQueen,
  setFifthMoveForQueen,
  setSixthMoveForQueen,
  setSeventhMoveForQueen,
  setEightMoveForQueen,
  setMovingQueen,
  setMovingQueenCrossMove,
  setMovingQueenFlatMove,
  movingQueenCrossMove,
  movingQueenFlatMove,
}) => {
  const boardRef = useRef(null);

  // const [firstMoveForQueen, setFirstMoveForQueen] = useState();
  // const [secondMoveForQueen, setSecondMoveForQueen] = useState();
  // const [thirdMoveForQueen, setThirdMoveForQueen] = useState();
  // const [fourthMoveForQueen, setFourthMoveForQueen] = useState();
  // const [fifthMoveForQueen, setFifthMoveForQueen] = useState();
  // const [sixthMoveForQueen, setSixthMoveForQueen] = useState();
  // const [seventhMoveForQueen, setSeventhMoveForQueen] = useState();
  // const [eighthMoveForQueen, setEightMoveForQueen] = useState();

  // const [movingQueen, setMovingQueen] = useState([]);
  // const [movingQueenCrossMove, setMovingQueenCrossMove] = useState([]);
  // const [movingQueenFlatMove, setMovingQueenFlatMove] = useState([]);

  // const [attackingQueen, setAttackingQueen] = useState(null);

  const [
    removingChildOfBlackSideByWhiteQueen,
    setRemovingChildOfBlackSideByWhiteQueen,
  ] = useState(null);
  const availableMoveForRookVertical = [1, 2, 3, 4, 5, 6, 7, 8];
  const availableMoveForRookHorizontal = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
  ];
  if (pieces?.name === "whiteQueen") {
    const indexOfFirst = availableMoveForRookVertical.indexOf(
      +pieces?.parentNode?.id[0]
    );
    const indexOfSecond = availableMoveForRookHorizontal.indexOf(
      pieces?.parentNode?.id[1]
    );
    //-----------straight Part-------//
    //-----------straight Part-------//
    //-----------straight Part-------//
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];
    for (
      let i = indexOfFirst;
      i <= availableMoveForRookVertical.length - 1;
      i++
    ) {
      a.push(availableMoveForRookVertical[i]);
    }
    for (
      let i = indexOfSecond;
      i <= availableMoveForRookHorizontal.length - 1;
      i++
    ) {
      b.push(availableMoveForRookHorizontal[i]);
    }

    for (let i = indexOfFirst; i >= 0; i--) {
      c.push(+availableMoveForRookVertical[i]);
    }
    for (
      let i = indexOfSecond;
      i <= availableMoveForRookHorizontal.length - 1;
      i++
    ) {
      d.push(availableMoveForRookHorizontal[i]);
    }

    for (let i = indexOfFirst; i >= 0; i--) {
      e.push(+availableMoveForRookVertical[i]);
    }
    for (let i = indexOfSecond; i >= 0; i--) {
      f.push(availableMoveForRookHorizontal[i]);
    }

    for (
      let i = indexOfFirst;
      i <= availableMoveForRookVertical.length - 1;
      i++
    ) {
      g.push(+availableMoveForRookVertical[i]);
    }
    for (let i = indexOfSecond; i >= 0; i--) {
      h.push(availableMoveForRookHorizontal[i]);
    }
    const firstMoveForQueen = [
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5],
      a[6] + b[6],
      a[7] + b[7],
    ];
    const secondMoveForQueen = [
      c[1] + d[1],
      c[2] + d[2],
      c[3] + d[3],
      c[4] + d[4],
      c[5] + d[5],
      c[6] + d[6],
      c[7] + d[7],
    ];
    const thirdMoveForQueen = [
      e[1] + f[1],
      e[2] + f[2],
      e[3] + f[3],
      e[4] + f[4],
      e[5] + f[5],
      e[6] + f[6],
      e[7] + f[7],
    ];
    const fourthMoveForQueen = [
      g[1] + h[1],
      g[2] + h[2],
      g[3] + h[3],
      g[4] + h[4],
      g[5] + h[5],
      g[6] + h[6],
      g[7] + h[7],
    ];
    setFirstMoveForQueen(firstMoveForQueen);
    setSecondMoveForQueen(secondMoveForQueen);
    setThirdMoveForQueen(thirdMoveForQueen);
    setFourthMoveForQueen(fourthMoveForQueen);
    let parentNodeIDArray = [];

    for (let i = 0; i < boardRef.current.children.length; i++) {
      parentNodeIDArray.push(
        boardRef.current.children[i].children[0]?.parentNode.id
      );

      if (boardRef.current.children[i].children[0]) {
        // 4.move
        const firstElementThatInFrontOfTheQueen = fourthMoveForQueen.find(
          (item) => parentNodeIDArray.includes(item)
        );

        const indexOfCutting = fourthMoveForQueen.indexOf(
          firstElementThatInFrontOfTheQueen
        );

        let newFourthMoveForQueen = fourthMoveForQueen.slice(0, indexOfCutting);
        //3.Move
        const firstElementThatInFrontOfTheQueen2 = thirdMoveForQueen.find(
          (item) => parentNodeIDArray.includes(item)
        );

        const indexOfCutting2 = thirdMoveForQueen.indexOf(
          firstElementThatInFrontOfTheQueen2
        );

        let newThirdMoveForQueen = thirdMoveForQueen.slice(0, indexOfCutting2);
        //2.Move

        const firstElementThatInFrontOfTheQueen3 = secondMoveForQueen.find(
          (item) => parentNodeIDArray.includes(item)
        );

        const indexOfCutting3 = secondMoveForQueen.indexOf(
          firstElementThatInFrontOfTheQueen3
        );

        let newSecondMoveForQueen = secondMoveForQueen.slice(
          0,
          indexOfCutting3
        );
        //1.Move
        const firstElementThatInFrontOfTheQueen4 = firstMoveForQueen.find(
          (item) => parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatInFrontOfTheBishop4);

        const indexOfCutting4 = firstMoveForQueen.indexOf(
          firstElementThatInFrontOfTheQueen4
        );

        let newFirstMoveForQueen = firstMoveForQueen.slice(0, indexOfCutting4);
        setMovingQueenCrossMove([
          ...newFirstMoveForQueen,
          ...newSecondMoveForQueen,
          ...newThirdMoveForQueen,
          ...newFourthMoveForQueen,
        ]);
      }
    }
    //------cross part-------//
    //------cross part-------//
    //------cross part-------//

    let queenMoveArrayVerticalUp = [];
    let queenMoveArrayVerticalDown = [];
    let queenMoveArrayHorizontalRight = [];
    let queenMoveArrayHorizontalLeft = [];
    for (
      let i = indexOfFirst + 1;
      i < availableMoveForRookVertical.length;
      i++
    ) {
      queenMoveArrayVerticalUp.push(
        availableMoveForRookVertical[i] + pieces?.parentNode?.id[1]
      );
    }
    for (let i = indexOfFirst - 1; i >= 0; i--) {
      queenMoveArrayVerticalDown.push(
        availableMoveForRookVertical[i] + pieces?.parentNode?.id[1]
      );
    }
    for (
      let i = indexOfSecond + 1;
      i < availableMoveForRookHorizontal.length;
      i++
    ) {
      queenMoveArrayHorizontalRight.push(
        pieces?.parentNode?.id[0] + availableMoveForRookHorizontal[i]
      );
    }
    for (let i = indexOfSecond - 1; i >= 0; i--) {
      queenMoveArrayHorizontalLeft.push(
        pieces?.parentNode?.id[0] + availableMoveForRookHorizontal[i]
      );
    }

    for (let k = 0; k < boardRef.current.children.length; k++) {
      // console.log(boardRef.current.children[k]);
      if (boardRef.current.children[k].children[0]) {
        parentNodeIDArray.push(
          boardRef.current.children[k].children[0]?.parentNode.id
        );
      }
    }
    const firstElementThatInFrontOfTheQueenVertically =
      queenMoveArrayVerticalUp.find((item) => parentNodeIDArray.includes(item));

    const indexOfCutting = queenMoveArrayVerticalUp.indexOf(
      firstElementThatInFrontOfTheQueenVertically
    );

    const newQueenMoveArrayVerticalUp = queenMoveArrayVerticalUp.slice(
      0,
      indexOfCutting === -1 ? queenMoveArrayVerticalUp.length : indexOfCutting
    );
    // console.log(newRookMoveArrayVerticalUp);
    const firstElementThatInFrontOfTheQueenVertically2 =
      queenMoveArrayVerticalDown.find((item) =>
        parentNodeIDArray.includes(item)
      );
    const indexOfCutting2 = queenMoveArrayVerticalDown.indexOf(
      firstElementThatInFrontOfTheQueenVertically2
    );

    const newQueenMoveArrayVerticalDown = queenMoveArrayVerticalDown.slice(
      0,
      indexOfCutting2 === -1
        ? queenMoveArrayVerticalDown.length
        : indexOfCutting2
    );

    const firstElementThatInFrontOfTheQueenVertically3 =
      queenMoveArrayHorizontalRight.find((item) =>
        parentNodeIDArray.includes(item)
      );

    const indexOfCutting3 = queenMoveArrayHorizontalRight.indexOf(
      firstElementThatInFrontOfTheQueenVertically3
    );

    const newQueenMoveArrayHorizontalRight =
      queenMoveArrayHorizontalRight.slice(
        0,
        indexOfCutting3 === -1
          ? queenMoveArrayHorizontalRight.length
          : indexOfCutting3
      );
    const firstElementThatInFrontOfTheQueenVertically4 =
      queenMoveArrayHorizontalLeft.find((item) =>
        parentNodeIDArray.includes(item)
      );

    const indexOfCutting4 = queenMoveArrayHorizontalLeft.indexOf(
      firstElementThatInFrontOfTheQueenVertically4
    );

    const newQueenMoveArrayHorizontalLeft = queenMoveArrayHorizontalLeft.slice(
      0,
      indexOfCutting4 === -1
        ? queenMoveArrayHorizontalLeft.length
        : indexOfCutting4
    );

    setFifthMoveForQueen(queenMoveArrayVerticalUp);
    setSixthMoveForQueen(queenMoveArrayVerticalDown);
    setSeventhMoveForQueen(queenMoveArrayHorizontalRight);
    setEightMoveForQueen(queenMoveArrayHorizontalLeft);
    setMovingQueenFlatMove([
      ...newQueenMoveArrayVerticalUp,
      ...newQueenMoveArrayVerticalDown,
      ...newQueenMoveArrayHorizontalRight,
      ...newQueenMoveArrayHorizontalLeft,
    ]);
  }

  const moveEverWhereForQueen = [
    ...movingQueenCrossMove,
    ...movingQueenFlatMove,
  ];
  setMovingQueen(moveEverWhereForQueen);
};
export default MoveForWhiteQueen;
