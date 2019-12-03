let rowNum = document.getElementById('rowNum');
let colNum = document.getElementById('colNum');
let pTagNum = document.getElementById('pTagNum');
let goBtn = document.getElementById('goBtn');
let elementArea = document.getElementById('elementArea');

goBtn.addEventListener('click', function (e) {
  for (let r = 0; r < rowNum.value; r++) {
    let row = document.createElement('div');
    row.setAttribute('class', "row");
    for (let c = 0; c < colNum.value; c++) {
      let col = document.createElement('div');
      col.setAttribute('class', "col");
      for (let p = 0; p < pTagNum.value; p++) {
        let pTagNum = document.createElement('div');
        pTagNum.innerText = `Row${r} Col${c} Tag${p}`;

        col.appendChild(pTagNum);

      }
      row.appendChild(col);
    }
    elementArea.appendChild(row);
  }
});