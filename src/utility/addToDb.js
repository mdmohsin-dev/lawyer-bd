const getLawyer = () => {
    const storedLawyerStr = localStorage.getItem("lawyer")
    if (storedLawyerStr) {
        const lawyer = JSON.parse(storedLawyerStr)
        return lawyer
    }
    else {
        return []
    }
}


const addLawyerToDb = (id) => {
    const storedLawyer = getLawyer()
    if (storedLawyer.includes(id)) {
        return
    }
    else {
        storedLawyer.push(id)
        const data = JSON.stringify(storedLawyer)
        localStorage.setItem('lawyer', data)
    }
}


export { getLawyer, addLawyerToDb }