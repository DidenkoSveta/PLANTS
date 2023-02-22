const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
   if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
   } else {
      selectSingle.setAttribute('data-state', 'active');
   }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
   selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
   });
}
//select contacts
function SherrillForma() {
   document.getElementById("SherrillForma").style.display = "block";
   document.getElementById("YonkersForma").style.display = "none";
   document.getElementById("CanandaiguaForma").style.display = "none"; 
   document.getElementById("NYForma").style.display = "none";
}

function YonkersForma() {
   document.getElementById("YonkersForma").style.display = "block";
   document.getElementById("SherrillForma").style.display = "none";
   document.getElementById("CanandaiguaForma").style.display = "none"; 
   document.getElementById("NYForma").style.display = "none";
}

function CanandaiguaForma() {
   document.getElementById("CanandaiguaForma").style.display = "block";
   document.getElementById("YonkersForma").style.display = "none";
   document.getElementById("SherrillForma").style.display = "none";
   document.getElementById("NYForma").style.display = "none";
}

function NYForma() {
   document.getElementById("NYForma").style.display = "block";
   document.getElementById("YonkersForma").style.display = "none";
   document.getElementById("SherrillForma").style.display = "none";
   document.getElementById("CanandaiguaForma").style.display = "none"; 
}

//accordion Prices

function sectionStandart() {
   document.getElementById("panel-standart").style.display = "block";
   document.getElementById("panel-procare").style.display = "none";
   document.getElementById("panel-basis").style.display = "none"; 
}

function sectionProCare() {
     document.getElementById("panel-procare").style.display = "block";
   document.getElementById("panel-standart").style.display = "none";
   document.getElementById("panel-basis").style.display = "none"; 
}

function sectionBasis() {
     document.getElementById("panel-basis").style.display = "block";
     document.getElementById("panel-procare").style.display = "none";
   document.getElementById("panel-standart").style.display = "none"; 
}
;
