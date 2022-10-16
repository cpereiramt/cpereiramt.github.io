export {handlePaginationClick}

const handlePaginationClick = () => {
    const navContainer = document.getElementsByClassName('pagination');
    const buttonsList = Array.from(navContainer[0].children)
    buttonsList.map(button => {
       button.addEventListener("click", () => {
        console.log("clique na navegação !")
       })
    })
  }