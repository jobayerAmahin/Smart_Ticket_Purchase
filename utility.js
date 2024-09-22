//
let collectedSeat=[];
let totalPrice=0;

function addSeat(event){
    if(collectedSeat.length>2){
        document.getElementById('couponInput').removeAttribute('disabled')
        document.getElementById('couponButton').removeAttribute('disabled')
        const couponCode=parseFloat(document.getElementById('couponInput').value)
        document.getElementById('couponButton').addEventListener('click',function(){
            if(couponCode===1426){
                console.log("Done")
            }
            else{
                console.log('Not Matched')
            }
        })
    }
    if(collectedSeat.length>3){
        document.getElementById('couponInput').removeAttribute('disabled')
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


    let nOfSeats=parseFloat(document.getElementById('nOfSeats').innerText)
    nOfSeats+=1;
  
    document.getElementById('nOfSeats').style.color='lime'
    document.getElementById('nOfSeats').style.fontSize='20px'
    document.getElementById('nOfSeats').style.fontWeight='bold'
    document.getElementById('nOfSeats').innerText=nOfSeats;

    let availableSeats=parseFloat(document.getElementById('availableSeats').innerText)
    availableSeats-=1;
  
    document.getElementById('availableSeats').style.color='lime'
    document.getElementById('availableSeats').style.fontSize='20px'
    document.getElementById('availableSeats').style.fontWeight='bold'
    document.getElementById('availableSeats').innerText=availableSeats;

    totalPrice+=550;
    document.getElementById('totalList').classList.remove('hidden')
    document.getElementById('totalValue').innerText=totalPrice;
}