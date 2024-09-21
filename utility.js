//
function addSeat(event){
    event.style.backgroundColor='lime';
    event.style.color='white';
    const seatNo=event.innerText;
    document.getElementById('noSeatLine').classList.add('hidden');
    const newline=document.createElement('div');
    newline.classList.add('flex')
    newline.classList.add('justify-between')
    newline.innerHTML=`
    <p>${seatNo}</p>
    <p>Economy</p>
    <p>550</p>
    `
    document.getElementById('priceList').appendChild(newline)

    let avilableNo=parseFloat(document.getElementById('availableNo').innerText)
    avilableNo-=1;
    document.getElementById('availableNo').innerText=avilableNo;

    let selectNo=parseFloat(document.getElementById('selectNo').innerText)
    selectNo+=1;
    document.getElementById('selectNo').innerText=selectNo;

}