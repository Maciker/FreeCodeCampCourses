const inputButton = document.getElementById("input-btn")
const deleteButton = document.getElementById("delete-btn")
const inputTextField = document.getElementById("input-el")
const renderList = document.getElementById("ul-el")

let myLeads = []
let listHtmlLeads = ""


inputButton.addEventListener("click", () => {
    getinputTextField()
    clearLeadsList()
    clearInputTextField()
    renderLeads()   
})

deleteButton.addEventListener("click", () => {
    clearMyLeads()
    clearLeadsList()
    clearInputTextField()
    renderLeads()
})

const getinputTextField = () => {
    myLeads.push(inputTextField.value)
}

const renderLeads = () => {
    renderList.innerHTML = setListHtmlLeads()
}

const setListHtmlLeads = () => {
    myLeads.map((lead) => {
        listHtmlLeads += `
            <li>
                <a target='_blank' href='${lead}'>
                    ${lead}</a>
            </li>`
    })
    
    return listHtmlLeads
}

const clearInputTextField = () => {
    inputTextField.value = ""
}

const clearLeadsList = () => {
    listHtmlLeads = ""
}

const clearMyLeads = () => {
    myLeads = []
}