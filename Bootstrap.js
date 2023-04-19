let clickCount, slideIndex
const hiddenSection = document.getElementById("hidden-section")
const formDiv = document.getElementById("form-div")
clickCount = slideIndex = 0

//Function Calls for Resize Menu

    

    hiddenSection.addEventListener('click', function(event) {
        if (!formDiv.contains(event.target)) {
            closeHiddenSection()
        }
    })

//Function Initialization Section
    function closeHiddenSection() {
        hiddenSection.style.display = "none"
    }
    function openHiddenSection() {
        hiddenSection.style.display = "block"
    }


