let tablecontainer = document.querySelector(".tablecontainer")

window.addEventListener("keydown", (e) => {

    tablecontainer.innerHTML = `
<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? e.code : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
</table> `;

})