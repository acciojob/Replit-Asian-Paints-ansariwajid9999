const change_button = document.getElementById("change_button")
const Reset = document.getElementById("Reset")

change_button.onclick = () => {
    const block_id = document.getElementById("block_id").value
    const color_id = document.getElementById("color_id").value

    reset()

    if(block_id >= "1" && block_id <= "9" && color_id){
        const selectedBox = document.getElementById(block_id)
        selectedBox.style.backgroundColor = color_id
    }
}

Reset.onclick = () => {
    reset()
}

function reset(){
    const gridItems = document.querySelectorAll(".grid-item")

    for(let item of gridItems){
        item.style.backgroundColor = 'transparent'
    }
}