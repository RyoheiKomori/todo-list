import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグの生成
  const compleButton = document.createElement("button");
  compleButton.innerText = "完了";
  compleButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());
