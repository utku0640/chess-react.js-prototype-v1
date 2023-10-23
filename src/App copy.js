import whitePawns from "./chess/beyaz_piyon.png";
import blackPawns from "./chess/siyah_piyon.png";
import whiteQueen from "./chess/beyaz_vezir.png";
import blackQueen from "./chess/siyah_vezir.png";
import whiteRook from "./chess/beyaz_kale.png";
import blackRook from "./chess/siyah_kale.png";
import whiteBishop from "./chess/beyaz_fil.png";
import blackBishop from "./chess/siyah_fil.png";
import whiteKnight from "./chess/beyaz_at.png";
import blackKnight from "./chess/siyah_at.png";
import whiteKing from "./chess/beyaz_şah.png";
import blackKing from "./chess/siyah_şah.png";

import { useEffect, useRef, useState } from "react";
function App() {
  const vertical = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const boardRef = useRef(null);
  const [chessBoard, setChessBoard] = useState(null);
  const [pieces, setPieces] = useState(null);
  const [lastSquare, setLastSquare] = useState(null);
  const [movingPawns, setMovingPawns] = useState(null);
  const [attackingPawns, setAttackingPawns] = useState(null);
  const [movingRooks, setMovingRooks] = useState(null);
  const [movingBishop, setMovingBishop] = useState(null);
  const [removingChildOfBlackPawns, setRemovingChildOfBlackPawns] =
    useState(null);
  // setup for using in the attackForBishops function
  const [firstMoveForBishop, setFirstMoveForBishop] = useState();
  const [secondMoveForBishop, setSecondMoveForBishop] = useState();
  const [thirdMoveForBishop, setThirdMoveForBishop] = useState();
  const [fourthMoveForBishop, setFourthMoveForBishop] = useState();
  const [isTrueWhiteRook1ThatDidNotMove, setIsTrueWhiteRook1ThatDidNotMove] =
    useState(true);
  const [isTrueWhiteRook2ThatDidNotMove, setIsTrueWhiteRook2ThatDidNotMove] =
    useState(true);
  const [isTrueWhiteKingThatDidNotMove, setIsTrueWhiteKingThatDidNotMove] =
    useState(true);
  const [
    stateFirstElementThatWillBeDeathByWhiteBishop,
    setStateFirstElementThatWillBeDeathByWhiteBishop,
  ] = useState(null);

  const [
    removingChildOfBlackSideByWhiteBishop,
    setRemovingChildOfBlackSideByWhiteBishop,
  ] = useState(null);

  // setup for using in the attackForRooks function
  const [firstMoveForWhiteRook, setFirstMoveForWhiteRook] = useState();
  const [secondMoveForWhiteRook, setSecondMoveForWhiteRook] = useState();
  const [thirdMoveForWhiteRook, setThirdMoveForWhiteRook] = useState();
  const [fourthMoveForWhiteRook, setFourthMoveForWhiteRook] = useState();

  const [
    stateFirstElementThatWillBeDeathByWhiteRook,
    setStateFirstElementThatWillBeDeathByWhiteRook,
  ] = useState(null);

  const [
    removingChildOfBlackSideByWhiteRook,
    setRemovingChildOfBlackSideByWhiteRook,
  ] = useState(null);
  // setup for using in the attackForQueen function
  const [firstMoveForQueen, setFirstMoveForQueen] = useState();
  const [secondMoveForQueen, setSecondMoveForQueen] = useState();
  const [thirdMoveForQueen, setThirdMoveForQueen] = useState();
  const [fourthMoveForQueen, setFourthMoveForQueen] = useState();
  const [fifthMoveForQueen, setFifthMoveForQueen] = useState();
  const [sixthMoveForQueen, setSixthMoveForQueen] = useState();
  const [seventhMoveForQueen, setSeventhMoveForQueen] = useState();
  const [eighthMoveForQueen, setEightMoveForQueen] = useState();

  const [movingQueen, setMovingQueen] = useState([]);
  const [movingQueenCrossMove, setMovingQueenCrossMove] = useState([]);
  const [movingQueenFlatMove, setMovingQueenFlatMove] = useState([]);

  const [attackingQueen, setAttackingQueen] = useState(null);

  const [
    removingChildOfBlackSideByWhiteQueen,
    setRemovingChildOfBlackSideByWhiteQueen,
  ] = useState(null);

  const [movingKnight, setMovingKnight] = useState(null);
  const [attackingKnight, setAttackingKnight] = useState(null);
  const [
    removingChildOfBlackSideByWhiteKnight,
    setRemovingChildOfBlackSideByWhiteKnight,
  ] = useState(null);

  const [movingKing, setMovingKing] = useState();
  const [attackingKing, setAttackingKing] = useState();
  const [
    removingChildOfBlackSideByWhiteKing,
    setRemovingChildOfBlackSideByWhiteKing,
  ] = useState(null);

  const [shortCastlingMoving, setShortCastlingMoving] = useState({
    kingMove: "",
    rookMove: Boolean,
  });
  const [longCastlingMoving, setLongCastlingMoving] = useState({
    kingMove2: "",
    rookMove2: Boolean,
  });

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
  const handleOnDragStart = (e) => {
    setPieces(e.target);
  };

  const moveForPawns = () => {
    if (pieces?.name === "whitePawns") {
      let whitePawnsMoveArray = [];
      if (pieces?.parentNode.id[0] === "2") {
        whitePawnsMoveArray.push(
          +pieces?.parentNode?.id[0] + 1 + pieces?.parentNode?.id[1],
          +pieces?.parentNode?.id[0] + 2 + pieces?.parentNode?.id[1]
        );
        setMovingPawns(whitePawnsMoveArray);
      } else {
        whitePawnsMoveArray.push(
          +pieces?.parentNode?.id[0] + 1 + pieces?.parentNode?.id[1]
        );
        setMovingPawns(whitePawnsMoveArray);
      }
    }

    if (pieces?.name === "blackPawns") {
      let blackPawnsMoveArray = [];
      // console.log(+pieces?.parentNode?.id[0]);
      if (pieces?.parentNode?.id[0] === "7") {
        blackPawnsMoveArray.push(
          +pieces?.parentNode?.id[0] - 1 + pieces?.parentNode?.id[1],
          +pieces?.parentNode?.id[0] - 2 + pieces?.parentNode?.id[1]
        );
        setMovingPawns(blackPawnsMoveArray);
      } else {
        blackPawnsMoveArray.push(
          +pieces?.parentNode?.id[0] - 1 + pieces?.parentNode?.id[1]
        );
        setMovingPawns(blackPawnsMoveArray);
      }
    }
  };
  const attackForPawns = () => {
    // console.log(pieces?.parentNode.id[0]);
    // console.log(pieces?.parentNode.id[1]);
    if (pieces?.name === "whitePawns") {
      setAttackingPawns([
        1 +
          +pieces?.parentNode?.id[0] +
          availableMoveForRookHorizontal[
            availableMoveForRookHorizontal.indexOf(pieces?.parentNode?.id[1]) -
              1
          ],
        1 +
          +pieces?.parentNode?.id[0] +
          availableMoveForRookHorizontal[
            availableMoveForRookHorizontal.indexOf(pieces?.parentNode?.id[1]) +
              1
          ],
      ]);
    }
  };
  const moveForRook = () => {
    let rookMoveArrayVerticalUp = [];
    let rookMoveArrayVerticalDown = [];
    let rookMoveArrayHorizontalRight = [];
    let rookMoveArrayHorizontalLeft = [];
    if (pieces?.name === "whiteRook1" || pieces?.name === "whiteRook2") {
      const indexOfFirst = availableMoveForRookVertical.indexOf(
        +pieces?.parentNode?.id[0]
      );
      const indexOfSecond = availableMoveForRookHorizontal.indexOf(
        pieces?.parentNode?.id[1]
      );
      // console.log(indexOfFirst);
      for (
        let i = indexOfFirst + 1;
        i < availableMoveForRookVertical.length;
        i++
      ) {
        rookMoveArrayVerticalUp.push(
          availableMoveForRookVertical[i] + pieces?.parentNode?.id[1]
        );
      }
      for (let i = indexOfFirst - 1; i >= 0; i--) {
        rookMoveArrayVerticalDown.push(
          availableMoveForRookVertical[i] + pieces?.parentNode?.id[1]
        );
      }
      for (
        let i = indexOfSecond + 1;
        i < availableMoveForRookHorizontal.length;
        i++
      ) {
        rookMoveArrayHorizontalRight.push(
          pieces?.parentNode?.id[0] + availableMoveForRookHorizontal[i]
        );
      }
      for (let i = indexOfSecond - 1; i >= 0; i--) {
        rookMoveArrayHorizontalLeft.push(
          pieces?.parentNode?.id[0] + availableMoveForRookHorizontal[i]
        );
      }
    }

    const parentNodeIDArray = [];
    for (let k = 0; k < boardRef.current.children.length; k++) {
      // console.log(boardRef.current.children[k]);
      if (boardRef.current.children[k].children[0]) {
        parentNodeIDArray.push(
          boardRef.current.children[k].children[0]?.parentNode.id
        );
      }
    }
    const firstElementThatInFrontOfTheRookVertically =
      rookMoveArrayVerticalUp.find((item) => parentNodeIDArray.includes(item));

    const indexOfCutting = rookMoveArrayVerticalUp.indexOf(
      firstElementThatInFrontOfTheRookVertically
    );

    const newRookMoveArrayVerticalUp = rookMoveArrayVerticalUp.slice(
      0,
      indexOfCutting === -1 ? rookMoveArrayVerticalUp.length : indexOfCutting
    );
    // console.log(newRookMoveArrayVerticalUp);
    const firstElementThatInFrontOfTheRookVertically2 =
      rookMoveArrayVerticalDown.find((item) =>
        parentNodeIDArray.includes(item)
      );
    const indexOfCutting2 = rookMoveArrayVerticalDown.indexOf(
      firstElementThatInFrontOfTheRookVertically2
    );

    const newRookMoveArrayVerticalDown = rookMoveArrayVerticalDown.slice(
      0,
      indexOfCutting2 === -1
        ? rookMoveArrayVerticalDown.length
        : indexOfCutting2
    );

    const firstElementThatInFrontOfTheRookVertically3 =
      rookMoveArrayHorizontalRight.find((item) =>
        parentNodeIDArray.includes(item)
      );

    const indexOfCutting3 = rookMoveArrayHorizontalRight.indexOf(
      firstElementThatInFrontOfTheRookVertically3
    );

    const newRookMoveArrayHorizontalRight = rookMoveArrayHorizontalRight.slice(
      0,
      indexOfCutting3 === -1
        ? rookMoveArrayHorizontalRight.length
        : indexOfCutting3
    );
    const firstElementThatInFrontOfTheRookVertically4 =
      rookMoveArrayHorizontalLeft.find((item) =>
        parentNodeIDArray.includes(item)
      );

    const indexOfCutting4 = rookMoveArrayHorizontalLeft.indexOf(
      firstElementThatInFrontOfTheRookVertically4
    );

    const newRookMoveArrayHorizontalLeft = rookMoveArrayHorizontalLeft.slice(
      0,
      indexOfCutting4 === -1
        ? rookMoveArrayHorizontalLeft.length
        : indexOfCutting4
    );
    setFirstMoveForWhiteRook(rookMoveArrayVerticalUp);
    setSecondMoveForWhiteRook(rookMoveArrayVerticalDown);
    setThirdMoveForWhiteRook(rookMoveArrayHorizontalRight);
    setFourthMoveForWhiteRook(rookMoveArrayHorizontalLeft);
    setMovingRooks([
      ...newRookMoveArrayVerticalUp,
      ...newRookMoveArrayVerticalDown,
      ...newRookMoveArrayHorizontalRight,
      ...newRookMoveArrayHorizontalLeft,
    ]);
  };
  const attackForRook = () => {
    let parentNodeIDArray = [];

    for (let i = 0; i < boardRef.current.children.length; i++) {
      parentNodeIDArray.push(
        boardRef.current.children[i].children[0]?.parentNode.id
      );
      if (boardRef.current.children[i].children[0]) {
        const firstElementThatWillBeDeath1 = firstMoveForWhiteRook?.find(
          (item) => parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath1);

        const firstElementThatWillBeDeath2 = secondMoveForWhiteRook?.find(
          (item) => parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath);

        const firstElementThatWillBeDeath3 = thirdMoveForWhiteRook?.find(
          (item) => parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath);
        const firstElementThatWillBeDeath4 = fourthMoveForWhiteRook?.find(
          (item) => parentNodeIDArray.includes(item)
        );
        setStateFirstElementThatWillBeDeathByWhiteRook([
          firstElementThatWillBeDeath1,
          firstElementThatWillBeDeath2,
          firstElementThatWillBeDeath3,
          firstElementThatWillBeDeath4,
        ]);
      }
    }
  };
  const moveForBishop = () => {
    if (pieces?.name === "whiteBishop" || pieces?.name === "blackBishop") {
      const indexOfFirst = availableMoveForRookVertical.indexOf(
        +pieces?.parentNode?.id[0]
      );
      const indexOfSecond = availableMoveForRookHorizontal.indexOf(
        pieces?.parentNode?.id[1]
      );
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
      const firstMoveForBishop = [
        a[1] + b[1],
        a[2] + b[2],
        a[3] + b[3],
        a[4] + b[4],
        a[5] + b[5],
        a[6] + b[6],
        a[7] + b[7],
      ];
      setFirstMoveForBishop(firstMoveForBishop);
      const secondMoveForBishop = [
        c[1] + d[1],
        c[2] + d[2],
        c[3] + d[3],
        c[4] + d[4],
        c[5] + d[5],
        c[6] + d[6],
        c[7] + d[7],
      ];
      setSecondMoveForBishop(secondMoveForBishop);
      const thirdMoveForBishop = [
        e[1] + f[1],
        e[2] + f[2],
        e[3] + f[3],
        e[4] + f[4],
        e[5] + f[5],
        e[6] + f[6],
        e[7] + f[7],
      ];
      setThirdMoveForBishop(thirdMoveForBishop);
      const fourthMoveForBishop = [
        g[1] + h[1],
        g[2] + h[2],
        g[3] + h[3],
        g[4] + h[4],
        g[5] + h[5],
        g[6] + h[6],
        g[7] + h[7],
      ];
      setFourthMoveForBishop(fourthMoveForBishop);
      let parentNodeIDArray = [];

      for (let i = 0; i < boardRef.current.children.length; i++) {
        parentNodeIDArray.push(
          boardRef.current.children[i].children[0]?.parentNode.id
        );

        if (boardRef.current.children[i].children[0]) {
          // 4.move
          const firstElementThatInFrontOfTheBishop = fourthMoveForBishop.find(
            (item) => parentNodeIDArray.includes(item)
          );

          const indexOfCutting = fourthMoveForBishop.indexOf(
            firstElementThatInFrontOfTheBishop
          );

          let newFourthMoveForBishop = fourthMoveForBishop.slice(
            0,
            indexOfCutting
          );
          //3.Move
          const firstElementThatInFrontOfTheBishop2 = thirdMoveForBishop.find(
            (item) => parentNodeIDArray.includes(item)
          );

          const indexOfCutting2 = thirdMoveForBishop.indexOf(
            firstElementThatInFrontOfTheBishop2
          );

          let newThirdMoveForBishop = thirdMoveForBishop.slice(
            0,
            indexOfCutting2
          );
          //2.Move

          const firstElementThatInFrontOfTheBishop3 = secondMoveForBishop.find(
            (item) => parentNodeIDArray.includes(item)
          );

          const indexOfCutting3 = secondMoveForBishop.indexOf(
            firstElementThatInFrontOfTheBishop3
          );

          let newSecondMoveForBishop = secondMoveForBishop.slice(
            0,
            indexOfCutting3
          );
          //1.Move
          const firstElementThatInFrontOfTheBishop4 = firstMoveForBishop.find(
            (item) => parentNodeIDArray.includes(item)
          );
          // console.log(firstElementThatInFrontOfTheBishop4);

          const indexOfCutting4 = firstMoveForBishop.indexOf(
            firstElementThatInFrontOfTheBishop4
          );

          let newFirstMoveForBishop = firstMoveForBishop.slice(
            0,
            indexOfCutting4
          );

          setMovingBishop([
            ...newFirstMoveForBishop,
            ...newSecondMoveForBishop,
            ...newThirdMoveForBishop,
            ...newFourthMoveForBishop,
          ]);
        }
      }
    }
  };
  const attackForBishop = () => {
    let parentNodeIDArray = [];

    for (let i = 0; i < boardRef.current.children.length; i++) {
      parentNodeIDArray.push(
        boardRef.current.children[i].children[0]?.parentNode.id
      );
      if (boardRef.current.children[i].children[0]) {
        const firstElementThatWillBeDeath1 = firstMoveForBishop?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        const firstElementThatWillBeDeath2 = secondMoveForBishop?.find((item) =>
          parentNodeIDArray.includes(item)
        );

        const firstElementThatWillBeDeath3 = thirdMoveForBishop?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        const firstElementThatWillBeDeath4 = fourthMoveForBishop?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        setStateFirstElementThatWillBeDeathByWhiteBishop([
          firstElementThatWillBeDeath1,
          firstElementThatWillBeDeath2,
          firstElementThatWillBeDeath3,
          firstElementThatWillBeDeath4,
        ]);
      }
    }
  };
  const moveForKnight = () => {
    if (pieces?.name === "whiteKnight") {
      const indexOfFirst = availableMoveForRookVertical.indexOf(
        +pieces?.parentNode?.id[0]
      );
      const indexOfSecond = availableMoveForRookHorizontal.indexOf(
        pieces?.parentNode?.id[1]
      );
      setMovingKnight([
        availableMoveForRookVertical[indexOfFirst + 1] +
          availableMoveForRookHorizontal[indexOfSecond - 2],
        availableMoveForRookVertical[indexOfFirst + 1] +
          availableMoveForRookHorizontal[indexOfSecond + 2],
        availableMoveForRookVertical[indexOfFirst - 1] +
          availableMoveForRookHorizontal[indexOfSecond - 2],
        availableMoveForRookVertical[indexOfFirst - 1] +
          availableMoveForRookHorizontal[indexOfSecond + 2],
        availableMoveForRookVertical[indexOfFirst + 2] +
          availableMoveForRookHorizontal[indexOfSecond - 1],
        availableMoveForRookVertical[indexOfFirst + 2] +
          availableMoveForRookHorizontal[indexOfSecond + 1],
        availableMoveForRookVertical[indexOfFirst - 2] +
          availableMoveForRookHorizontal[indexOfSecond + 1],
        availableMoveForRookVertical[indexOfFirst - 2] +
          availableMoveForRookHorizontal[indexOfSecond - 1],
      ]);
    }
  };
  const attackForKnight = () => {
    const parentNodeIDArray = [];
    for (let i = 0; i < boardRef.current.children.length; i++) {
      // console.log(boardRef.current.children[i].id);
      if (boardRef.current.children[i].children[0]) {
        parentNodeIDArray.push(boardRef.current.children[i].id);
      }
    }
    const attackKnight = movingKnight?.filter((item) =>
      parentNodeIDArray.includes(item)
    );
    setAttackingKnight(attackKnight);
  };
  const moveForQueen = () => {
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
      setFirstMoveForQueen(firstMoveForQueen);
      const secondMoveForQueen = [
        c[1] + d[1],
        c[2] + d[2],
        c[3] + d[3],
        c[4] + d[4],
        c[5] + d[5],
        c[6] + d[6],
        c[7] + d[7],
      ];
      setSecondMoveForQueen(secondMoveForQueen);
      const thirdMoveForQueen = [
        e[1] + f[1],
        e[2] + f[2],
        e[3] + f[3],
        e[4] + f[4],
        e[5] + f[5],
        e[6] + f[6],
        e[7] + f[7],
      ];
      setThirdMoveForQueen(thirdMoveForQueen);
      const fourthMoveForQueen = [
        g[1] + h[1],
        g[2] + h[2],
        g[3] + h[3],
        g[4] + h[4],
        g[5] + h[5],
        g[6] + h[6],
        g[7] + h[7],
      ];
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

          let newFourthMoveForQueen = fourthMoveForQueen.slice(
            0,
            indexOfCutting
          );
          //3.Move
          const firstElementThatInFrontOfTheQueen2 = thirdMoveForQueen.find(
            (item) => parentNodeIDArray.includes(item)
          );

          const indexOfCutting2 = thirdMoveForQueen.indexOf(
            firstElementThatInFrontOfTheQueen2
          );

          let newThirdMoveForQueen = thirdMoveForQueen.slice(
            0,
            indexOfCutting2
          );
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

          let newFirstMoveForQueen = firstMoveForQueen.slice(
            0,
            indexOfCutting4
          );
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
        queenMoveArrayVerticalUp.find((item) =>
          parentNodeIDArray.includes(item)
        );

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

      const newQueenMoveArrayHorizontalLeft =
        queenMoveArrayHorizontalLeft.slice(
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
    if (pieces?.name === "blackQueen") {
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
      setFirstMoveForQueen(firstMoveForQueen);
      const secondMoveForQueen = [
        c[1] + d[1],
        c[2] + d[2],
        c[3] + d[3],
        c[4] + d[4],
        c[5] + d[5],
        c[6] + d[6],
        c[7] + d[7],
      ];
      setSecondMoveForQueen(secondMoveForQueen);
      const thirdMoveForQueen = [
        e[1] + f[1],
        e[2] + f[2],
        e[3] + f[3],
        e[4] + f[4],
        e[5] + f[5],
        e[6] + f[6],
        e[7] + f[7],
      ];
      setThirdMoveForQueen(thirdMoveForQueen);
      const fourthMoveForQueen = [
        g[1] + h[1],
        g[2] + h[2],
        g[3] + h[3],
        g[4] + h[4],
        g[5] + h[5],
        g[6] + h[6],
        g[7] + h[7],
      ];
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

          let newFourthMoveForQueen = fourthMoveForQueen.slice(
            0,
            indexOfCutting
          );
          //3.Move
          const firstElementThatInFrontOfTheQueen2 = thirdMoveForQueen.find(
            (item) => parentNodeIDArray.includes(item)
          );

          const indexOfCutting2 = thirdMoveForQueen.indexOf(
            firstElementThatInFrontOfTheQueen2
          );

          let newThirdMoveForQueen = thirdMoveForQueen.slice(
            0,
            indexOfCutting2
          );
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

          let newFirstMoveForQueen = firstMoveForQueen.slice(
            0,
            indexOfCutting4
          );
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
        queenMoveArrayVerticalUp.find((item) =>
          parentNodeIDArray.includes(item)
        );

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

      const newQueenMoveArrayHorizontalLeft =
        queenMoveArrayHorizontalLeft.slice(
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
  const attackForQueen = () => {
    let parentNodeIDArray = [];
    for (let i = 0; i < boardRef.current.children.length; i++) {
      parentNodeIDArray.push(
        boardRef.current.children[i].children[0]?.parentNode.id
      );
      if (boardRef.current.children[i].children[0]) {
        const firstElementThatWillBeDeath1 = firstMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        const firstElementThatWillBeDeath2 = secondMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );

        const firstElementThatWillBeDeath3 = thirdMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        const firstElementThatWillBeDeath4 = fourthMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        // setStateFirstElementThatWillBeDeathByWhiteBishop([
        //   firstElementThatWillBeDeath1,
        //   firstElementThatWillBeDeath2,
        //   firstElementThatWillBeDeath3,
        //   firstElementThatWillBeDeath4,
        // ]);

        const firstElementThatWillBeDeath5 = fifthMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath1);

        const firstElementThatWillBeDeath6 = sixthMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath);

        const firstElementThatWillBeDeath7 = seventhMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        // console.log(firstElementThatWillBeDeath);
        const firstElementThatWillBeDeath8 = eighthMoveForQueen?.find((item) =>
          parentNodeIDArray.includes(item)
        );
        setAttackingQueen([
          firstElementThatWillBeDeath1,
          firstElementThatWillBeDeath2,
          firstElementThatWillBeDeath3,
          firstElementThatWillBeDeath4,
          firstElementThatWillBeDeath5,
          firstElementThatWillBeDeath6,
          firstElementThatWillBeDeath7,
          firstElementThatWillBeDeath8,
        ]);
      }
    }
  };
  const moveForKing = () => {
    if (pieces?.name === "whiteKing") {
      let indexOfFirstEnemyKing, indexOfSecondEnemyKing;
      for (let i = 0; i < boardRef.current.children.length; i++) {
        if (boardRef.current.children[i].children[0]?.name === "blackKing") {
          indexOfFirstEnemyKing = availableMoveForRookVertical.indexOf(
            +boardRef.current.children[i].children[0].parentNode.id[0]
          );
          indexOfSecondEnemyKing = availableMoveForRookHorizontal.indexOf(
            boardRef.current.children[i].children[0].parentNode.id[1]
          );
        }
      }
      const indexOfFirst = availableMoveForRookVertical.indexOf(
        +pieces?.parentNode?.id[0]
      );
      const indexOfSecond = availableMoveForRookHorizontal.indexOf(
        pieces?.parentNode?.id[1]
      );
      const kingMoveArray = [
        availableMoveForRookVertical[indexOfFirst + 1] +
          availableMoveForRookHorizontal[indexOfSecond - 1],
        availableMoveForRookVertical[indexOfFirst + 1] +
          availableMoveForRookHorizontal[indexOfSecond],
        availableMoveForRookVertical[indexOfFirst + 1] +
          availableMoveForRookHorizontal[indexOfSecond + 1],
        availableMoveForRookVertical[indexOfFirst] +
          availableMoveForRookHorizontal[indexOfSecond - 1],
        availableMoveForRookVertical[indexOfFirst] +
          availableMoveForRookHorizontal[indexOfSecond + 1],
        availableMoveForRookVertical[indexOfFirst - 1] +
          availableMoveForRookHorizontal[indexOfSecond - 1],
        availableMoveForRookVertical[indexOfFirst - 1] +
          availableMoveForRookHorizontal[indexOfSecond],
        availableMoveForRookVertical[indexOfFirst - 1] +
          availableMoveForRookHorizontal[indexOfSecond + 1],
      ];

      const enemyKingMoveArray = [
        availableMoveForRookVertical[indexOfFirstEnemyKing + 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing - 1],
        availableMoveForRookVertical[indexOfFirstEnemyKing + 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing],
        availableMoveForRookVertical[indexOfFirstEnemyKing + 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing + 1],
        availableMoveForRookVertical[indexOfFirstEnemyKing] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing - 1],
        availableMoveForRookVertical[indexOfFirstEnemyKing] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing + 1],
        availableMoveForRookVertical[indexOfFirstEnemyKing - 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing - 1],
        availableMoveForRookVertical[indexOfFirstEnemyKing - 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing],
        availableMoveForRookVertical[indexOfFirstEnemyKing - 1] +
          availableMoveForRookHorizontal[indexOfSecondEnemyKing + 1],
      ];

      const newKingMoveArray = kingMoveArray.filter(
        (item) => !enemyKingMoveArray.includes(item)
      );
      setMovingKing(newKingMoveArray);
    }
  };
  const attackForKing = () => {
    setAttackingKing(movingKing);
  };
  // console.log(boardRef.current.children[0]);
  const shortCastling = () => {
    let is_1F_Empty;
    let is_1G_Empty;
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (boardRef?.current.children[i]?.children[0]?.parentNode.id === "1f") {
        if (
          boardRef?.current.children[i]?.children[0]?.parentNode.children[0]
        ) {
          is_1F_Empty = true;
        }
      }

      if (boardRef?.current.children[i]?.children[0]?.parentNode.id === "1g") {
        if (
          boardRef?.current.children[i]?.children[0]?.parentNode.children[0]
        ) {
          is_1G_Empty = true;
        }
      }
    }

    if (
      !is_1F_Empty &&
      !is_1G_Empty &&
      isTrueWhiteRook1ThatDidNotMove &&
      isTrueWhiteKingThatDidNotMove &&
      pieces?.name === "whiteKing"
    ) {
      setShortCastlingMoving({
        rookMove: true,
        kingMove: "1g",
      });
    } else {
      setShortCastlingMoving(null);
    }
  };
  const longCastling = () => {
    let is_1B_Empty;
    let is_1C_Empty;
    let is_1D_Empty;
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (boardRef?.current.children[i]?.children[0]?.parentNode.id === "1b") {
        if (
          boardRef?.current.children[i]?.children[0]?.parentNode.children[0]
        ) {
          is_1B_Empty = true;
        }
      }

      if (boardRef?.current.children[i]?.children[0]?.parentNode.id === "1c") {
        if (
          boardRef?.current.children[i]?.children[0]?.parentNode.children[0]
        ) {
          is_1C_Empty = true;
        }
      }

      if (boardRef?.current.children[i]?.children[0]?.parentNode.id === "1d") {
        if (
          boardRef?.current.children[i]?.children[0]?.parentNode.children[0]
        ) {
          is_1D_Empty = true;
        }
      }
    }

    if (
      !is_1B_Empty &&
      !is_1C_Empty &&
      !is_1D_Empty &&
      isTrueWhiteRook2ThatDidNotMove &&
      isTrueWhiteKingThatDidNotMove &&
      pieces?.name === "whiteKing"
    ) {
      setLongCastlingMoving({
        rookMove2: true,
        kingMove2: "1c",
      });
    } else {
      setLongCastlingMoving(null);
    }
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.children[0]);
    // console.log(pieces.parentNode.id);
    // console.log(e.target);
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingPawns?.includes(e.target.id) &&
      pieces?.name === "whitePawns"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingPawns?.includes(e.target.id) &&
      pieces?.name === "blackPawns"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingRooks?.includes(e.target.id) &&
      pieces?.name === "whiteRook1"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingRooks?.includes(e.target.id) &&
      pieces?.name === "whiteRook2"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingBishop?.includes(e.target.id) &&
      pieces?.name === "whiteBishop"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingBishop?.includes(e.target.id) &&
      pieces?.name === "blackBishop"
    ) {
      setLastSquare(e.target);
    }

    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingKnight?.includes(e.target.id) &&
      pieces?.name === "whiteKnight"
    ) {
      setLastSquare(e.target);
    }

    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingQueen?.includes(e.target.id) &&
      pieces?.name === "whiteQueen"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingQueen?.includes(e.target.id) &&
      pieces?.name === "blackQueen"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      movingKing?.includes(e.target.id) &&
      pieces?.name === "whiteKing"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      shortCastlingMoving?.kingMove.includes(e.target.id) &&
      pieces?.name === "whiteKing"
    ) {
      setLastSquare(e.target);
    }
    if (e.target.children[0]) {
      setLastSquare(null);
    } else if (
      longCastlingMoving?.kingMove2.includes(e.target.id) &&
      pieces?.name === "whiteKing"
    ) {
      setLastSquare(e.target);
    }

    //Attack For White Pawns
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black"
      ) {
        if (attackingPawns?.includes(boardRef.current.children[i].id)) {
          if (e.target.id === boardRef.current.children[i].id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackPawns(e.target.children[0]);
          }
        }
      }
    }
    //Attack For White Bishops
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black"
      ) {
        if (
          stateFirstElementThatWillBeDeathByWhiteBishop?.includes(
            boardRef.current.children[i].id
          )
        ) {
          if (e.target.id === boardRef.current.children[i].id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackSideByWhiteBishop(e.target.children[0]);
          }
        }
      }
    }
    //Attack For White Rooks
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black" &&
        pieces?.name === "whiteRook1"
      ) {
        if (
          stateFirstElementThatWillBeDeathByWhiteRook.some(
            (item) => item == boardRef.current.children[i].id
          )
        ) {
          if (boardRef.current.children[i].id === e.target.id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackSideByWhiteRook(e.target.children[0]);
          }
        }
      }
    }
    //Attack For White Knight
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black"
      ) {
        if (attackingKnight?.includes(boardRef.current.children[i].id)) {
          if (e.target.id === boardRef.current.children[i].id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackSideByWhiteKnight(e.target.children[0]);
          }
        }
      }
    }
    //Attack For White Queen
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black"
      ) {
        if (attackingQueen?.includes(boardRef.current.children[i].id)) {
          if (e.target.id === boardRef.current.children[i].id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackSideByWhiteQueen(e.target.children[0]);
          }
        }
      }
    }
    //Attack For White King
    for (let i = 0; i < boardRef.current.children.length; i++) {
      if (
        boardRef.current.children[i].children[0]?.name.slice(0, 5) == "black"
      ) {
        if (attackingKing?.includes(boardRef.current.children[i].id)) {
          if (e.target.id === boardRef.current.children[i].id) {
            setLastSquare(e.target);
            setRemovingChildOfBlackSideByWhiteKing(e.target.children[0]);
          }
        }
      }
    }
  };
  const handleOnDragEnd = () => {
    // console.log(boardRef.current.children[62].children[0].name === "whiteKing");
    if (lastSquare === null) {
      setLastSquare((prev) => prev?.append(""));
      console.log(31);
    } else {
      setLastSquare((prev) => {
        prev?.append(pieces);
        if (pieces.name === "whiteRook1") {
          setIsTrueWhiteRook1ThatDidNotMove(false);
        }
        if (pieces.name === "whiteRook2") {
          setIsTrueWhiteRook2ThatDidNotMove(false);
        }
        if (pieces.name === "whiteKing") {
          setIsTrueWhiteKingThatDidNotMove(false);
        }
      });
    }
    if (
      shortCastlingMoving?.rookMove == true &&
      boardRef?.current.children[62].children[0]?.name === "whiteKing"
    ) {
      console.log(33331);
      boardRef.current.children[61].append(
        boardRef.current.children[63].children[0]
      );
    }

    if (
      longCastlingMoving?.rookMove2 == true &&
      boardRef?.current.children[58].children[0]?.name === "whiteKing"
    ) {
      console.log(33331);
      boardRef.current.children[59].append(
        boardRef.current.children[56].children[0]
      );
    }
    if (removingChildOfBlackPawns) {
      setLastSquare(lastSquare?.removeChild(removingChildOfBlackPawns));
      setRemovingChildOfBlackPawns(null);
    }
    if (removingChildOfBlackSideByWhiteBishop) {
      setLastSquare(
        lastSquare?.removeChild(removingChildOfBlackSideByWhiteBishop)
      );
      setRemovingChildOfBlackSideByWhiteBishop(null);
    }
    if (removingChildOfBlackSideByWhiteRook) {
      setLastSquare(
        lastSquare?.removeChild(removingChildOfBlackSideByWhiteRook)
      );
      setRemovingChildOfBlackSideByWhiteRook(null);
    }
    if (removingChildOfBlackSideByWhiteKnight) {
      setLastSquare(
        lastSquare?.removeChild(removingChildOfBlackSideByWhiteKnight)
      );
      setRemovingChildOfBlackSideByWhiteKnight(null);
    }
    if (removingChildOfBlackSideByWhiteQueen) {
      setLastSquare(
        lastSquare?.removeChild(removingChildOfBlackSideByWhiteQueen)
      );
      setRemovingChildOfBlackSideByWhiteQueen(null);
    }
    if (removingChildOfBlackSideByWhiteKing) {
      setLastSquare(
        lastSquare?.removeChild(removingChildOfBlackSideByWhiteKing)
      );
      setRemovingChildOfBlackSideByWhiteKing(null);
    }
  };
  // console.log(isTrueWhiteRook1ThatDidNotMove);
  // console.log(isTrueWhiteKingThatDidNotMove);
  const chessArr = [];

  for (let q = 0; q < 8; q++) {
    chessArr.push({
      image: blackPawns,
      x: 1,
      y: q,
      name: "blackPawns",
      kind: "black",
    });
  }
  for (let q = 0; q < 8; q++) {
    chessArr.push({
      image: whitePawns,
      x: 6,
      y: q,
      name: "whitePawns",
      kind: "white",
    });
  }
  chessArr.push({
    image: whiteQueen,
    x: 7,
    y: 3,
    name: "whiteQueen",
    kind: "white",
  });

  chessArr.push({
    image: blackQueen,
    x: 0,
    y: 3,
    name: "blackQueen",
    kind: "black",
  });

  chessArr.push({
    image: whiteKing,
    x: 7,
    y: 4,
    name: "whiteKing",
    kind: "white",
  });

  chessArr.push({
    image: blackKing,
    x: 0,
    y: 4,
    name: "blackKing",
    kind: "black",
  });

  chessArr.push({
    image: whiteBishop,
    x: 7,
    y: 5,
    name: "whiteBishop",
    kind: "white",
  });
  chessArr.push({
    image: whiteBishop,
    x: 7,
    y: 2,
    name: "whiteBishop",
    kind: "white",
  });

  chessArr.push({
    image: blackBishop,
    x: 0,
    y: 5,
    name: "blackBishop",
    kind: "black",
  });
  chessArr.push({
    image: blackBishop,
    x: 0,
    y: 2,
    name: "blackBishop",
    kind: "black",
  });

  chessArr.push({
    image: whiteRook,
    x: 7,
    y: 7,
    name: "whiteRook1",
    kind: "white",
  });
  chessArr.push({
    image: whiteRook,
    x: 7,
    y: 0,
    name: "whiteRook2",
    kind: "white",
  });

  chessArr.push({
    image: blackRook,
    x: 0,
    y: 7,
    name: "blackRook",
    kind: "black",
  });
  chessArr.push({
    image: blackRook,
    x: 0,
    y: 0,
    name: "blackRook",
    kind: "black",
  });

  chessArr.push({
    image: whiteKnight,
    x: 7,
    y: 1,
    name: "whiteKnight",
    kind: "white",
  });
  chessArr.push({
    image: whiteKnight,
    x: 7,
    y: 6,
    name: "whiteKnight",
    kind: "white",
  });

  chessArr.push({
    image: blackKnight,
    x: 0,
    y: 6,
    name: "blackKnight",
    kind: "black",
  });
  chessArr.push({
    image: blackKnight,
    x: 0,
    y: 1,
    name: "blackKnight",
    kind: "black",
  });

  const createBoard = () => {
    let squares = [];

    for (let i = 0; i < vertical.length; i++) {
      for (let k = 0; k < horizontal.length; k++) {
        let image;
        let name;
        let kind;
        chessArr.map((item, index) => {
          // console.log(index);
          if (item.x === i && item.y === k) {
            image = item.image;
            name = item.name;
            kind = item.kind;
          }
        });
        let num = i + k;
        // console.log(vertical[i], horizontal[k]);

        if (num % 2 === 0) {
          squares.push(
            <div className="white_square" id={vertical[i] + horizontal[k]}>
              [{vertical[i] + horizontal[k]}]
              {name ? (
                <img
                  src={image}
                  name={name}
                  kind={kind}
                  draggable={true}
                  onDragStart={handleOnDragStart}
                  onDragEnd={handleOnDragEnd}
                />
              ) : null}
            </div>
          );
        } else {
          squares.push(
            <div className="black_square" id={vertical[i] + horizontal[k]}>
              [{vertical[i] + horizontal[k]}]
              {name ? (
                <img
                  src={image}
                  name={name}
                  kind={kind}
                  draggable={true}
                  onDragStart={handleOnDragStart}
                  onDragEnd={handleOnDragEnd}
                />
              ) : null}
            </div>
          );
        }
        setChessBoard(squares);
      }
    }
  };
  // console.log(chessBoard);
  useEffect(() => {
    createBoard();
    moveForPawns();
    attackForPawns();
    moveForRook();
    attackForRook();
    moveForBishop();
    attackForBishop();
    moveForKnight();
    attackForKnight();
    moveForQueen();
    attackForQueen();
    moveForKing();
    attackForKing();
    shortCastling();
    longCastling();
  }, [lastSquare, pieces, removingChildOfBlackPawns]);
  return (
    <div className="app">
      <div className="board" onDragOver={handleOnDrop} ref={boardRef}>
        {chessBoard?.map((item, index) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default App;

//---------------------
