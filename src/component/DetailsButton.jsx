//詳細ボタン機能
export default function DetailsButton() {
  const detailsButton = document.getElementById("detailsButton");
  detailsButton.onclick = function () {
    console.log("詳細ボタンです");
  };
  return <div id="detailsButton">
  </div>
}
