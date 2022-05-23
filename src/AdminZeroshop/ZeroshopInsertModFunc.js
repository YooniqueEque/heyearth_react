function GoPopUp(){
    let pop = window.open("http://localhost:8080/jusoPopup","pop","width=570,height=420,scrollbars=yes, resizable=yes");
    //let roadFullAddr = window.location.href = "http://localhost:8080/jusoPopup";
}

function ZeroshopBack(){
    window.location.href = "http://localhost:3000/adminzeroshop"
}

function ZeroshopInsertEnd(){

}

function ZeroshopModEnd(){

}

export {GoPopUp, ZeroshopBack, ZeroshopInsertEnd, ZeroshopModEnd}