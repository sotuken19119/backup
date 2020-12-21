export const Revealed = (arr, x, y, newNonMinesCount, newReveal) => {
  console.log(arr[x][y]);
  // xは行　yは列
  if (arr[x][y].Revealed) {
    // console.log(arr[x][y])
    return ;
  }

  let flipped = [];
  flipped.push(arr[x][y]); 
  let i = 0;
  while (flipped.length !== 0) {
    let single = flipped.pop();

　　 // マスに値が入っていようがなかろうが、見えるようにする
    if (!single.Revealed) {
      newNonMinesCount--; // 爆弾以外の見えていないマス目の合計
      single.Revealed = true;
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
      !arr[single.x - 1][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y-1;
    }

    // 押したマスの右下のマス
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y+1;
    }

    // 押したマスの左下のマス
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y-1;
    }

    // 押したマスの右上のマス
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y+1;
    }

    // 押したマスの上のマス
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y]);
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y;
    }

    // 押したマスの下のマス
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y;
    }

    // 押したマスの左のマス
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
      newReveal[i++]=single.x;
      newReveal[i++]=single.y-1;
    }

    // 押したマスの右のマス
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
      newReveal[i++]=single.x;
      newReveal[i++]=single.y+1;
    }

    // 0のマスの周りの8マスを全部見えるようにする
    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].Revealed// 左上のマスが見えていない
    ) {
      //　左上のマス
      arr[single.x - 1][single.y - 1].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y-1;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].Revealed) {
      // 左のマス
      arr[single.x][single.y - 1].Revealed = true; // 上のマスを見えるようにする
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x;
      newReveal[i++]=single.y-1;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].Revealed
    ) {
      //　左下のマス
      arr[single.x + 1][single.y - 1].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y-1;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].Revealed) {
      //　上のマス
      arr[single.x - 1][single.y].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].Revealed) {
      // 下のマス
      arr[single.x + 1][single.y].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].Revealed
    ) {
      // 右上のマス
      arr[single.x - 1][single.y + 1].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x-1;
      newReveal[i++]=single.y+1;
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].Revealed) {
      // 右のマス
      arr[single.x][single.y + 1].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x;
      newReveal[i++]=single.y+1;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].Revealed
    ) {
      // 右下のマス
      arr[single.x + 1][single.y + 1].Revealed = true;
      newNonMinesCount--;　// 爆弾以外の見えていないマス目の合計
      newReveal[i++]=single.x+1;
      newReveal[i++]=single.y+1;
    }
  }

  return { arr, newNonMinesCount, newReveal };
};
