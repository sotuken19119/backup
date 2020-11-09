export const revealed = (arr, x, y, newNonMinesCount) => {
  console.log(arr[x][y]);
  // xは行　yは列
  if (arr[x][y].revealed) {
    // console.log(arr[x][y])
    return arr;
  }
  
　// react 動画54:41

  // Stack of all the cells which we
  // would like to reveal/flip
  let flipped = [];
  flipped.push(arr[x][y]); 
  while (flipped.length !== 0) {
    let single = flipped.pop();

　　 // マスに値が入っていようがなかろうが、見えるようにする
    if (!single.revealed) {
      newNonMinesCount--; // 爆弾以外の見えていないマス目の合計
      single.revealed = true;
    }
　　// マスの値が入っているときループ処理をぬける
    if (single.value !== 0) {
      break;
    }
　// 次に調べるマスを決める処理
    //　押したマスの左上のマス
    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    // 押したマスの右下のマス
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    // 押したマスの左下のマス
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    // 押したマスの右上のマス
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    // 押したマスの上のマス
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    // 押したマスの下のマス
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    // 押したマスの左のマス
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    // 押したマスの右のマス
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    // 0のマスの周りの8マスを全部見えるようにする
    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].revealed　// 左上のマスが見えていない
    ) {
      //　左上のマス
      arr[single.x - 1][single.y - 1].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
      // 左のマス
      arr[single.x][single.y - 1].revealed = true; // 上のマスを見えるようにする
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      //　左下のマス
      arr[single.x + 1][single.y - 1].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
      //　上のマス
      arr[single.x - 1][single.y].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].revealed) {
      // 下のマス
      arr[single.x + 1][single.y].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      // 右上のマス
      arr[single.x - 1][single.y + 1].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].revealed) {
      // 右のマス
      arr[single.x][single.y + 1].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      // 右下のマス
      arr[single.x + 1][single.y + 1].revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
    }
  }

  return { arr, newNonMinesCount };
};
