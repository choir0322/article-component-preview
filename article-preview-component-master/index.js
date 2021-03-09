let shareBtn = document.querySelector('.share');
let sharePopupContainer = document.querySelector('.sharePopupContainer');

shareBtn.addEventListener('mouseover', function(){
   shareBtn.style.backgroundColor = "hsl(212, 23%, 69%)"
   sharePopupContainer.style.visibility = "visible";
})
shareBtn.addEventListener('mouseout', function(){
   shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
   sharePopupContainer.style.visibility = "hidden";
})