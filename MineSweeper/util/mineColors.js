export const mineColor = () => {
    // ランダムに爆弾の色を決めている
    let colors = ["orange", "darkgreen", "cyan", "violet", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
  };