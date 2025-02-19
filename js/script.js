document.querySelectorAll('div').forEach(item => {
    item.onmouseover = () => {
        item.style.color = "red"
    }
    item.onmouseout = () =>{
        item.style.color = "black"
    }
})

function exportAsPng(){
    html2canvas(document.querySelector("body")).then(canvas => {
        canvas.toBlob(function(blob){
            let file = new Blob([blob], {type: "application/octet-stream"});
            let blobURL = URL.createObjectURL(file);
            window.location.href = blobURL;
        })
    });
}