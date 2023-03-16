

// var p1=document.getElementById("logo-text");
// // var p1=document.querySelector("car-logo-text");

// var mas=p1.innerHTML.split("");
// mas[12]="<font color=green>"+mas[1]+"</font>";
// p1.innerHTML=mas.join("");


function change (id, logo-text) {

    var yazi = $('#'+id).text();
    var adet = yazi.split(' ');

    $('#'+id).html('');

    for (i=0,v=adet.length;i<v;i++) {

        if(adet[i]==text) {
            $('#'+id).append("<span style=\"color:#F00\">"+ adet[i]+"<span> ")
        } else {
            $('#'+id).append(adet[i]+" ");
        }
    }

}