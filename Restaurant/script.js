function searchTable(){

    let tablesearchfilter=document.getElementById("searchTable").value.toLowerCase();

    let tablelist=document.getElementsByClassName("tablelist");

    console.log(tablelist);
    
    for(let k=0; k<tablelist.length; k++){

        if(tablelist[k].textContent.toLowerCase().indexOf(tablesearchfilter)!=-1){

            tablelist[k].style.display='block';
        }
        else{

            tablelist[k].style.display='none';
        }
    }
}
