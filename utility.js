//
let collectedSeat=[];
let totalPrice=0;

function addSeat(event){
    if(collectedSeat.length>3){
        alert('Maximum 4 seats can be selected')
        event.style.backgroundColor='default';
        event.style.color='default';
        return
    }
    
    event.style.backgroundColor='lime';
    event.style.color='white';

    const seatNo=event.innerText;
    if(collectedSeat.includes(seatNo)){
        alert('Seat is already selected');
        return;
    }
    collectedSeat.push(seatNo);

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

    totalPrice+=550;
    const bottomSec=document.createElement('div');
    bottomSec.classList.add('flex')
    bottomSec.classList.add('justify-end')
    bottomSec.innerHTML=`
    <hr>
    <p>Total Price</p>
    <p>${totalPrice}</p>
    `
    document.getElementById('totalList').appendChild(bottomSec)

}