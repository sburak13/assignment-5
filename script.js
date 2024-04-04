fetch("https://randomuser.me/api/?results=5").then((userData) => {
    return userData.json();
}).then((userObjectData) => {
    const userResultsArray = userObjectData.results;
    let tableData = ""
    userResultsArray.map((values)=>{
        tableData += `<tr><td>${values.name["first"]}</td><td>${values.location["city"]}</td></tr>`
    })
    document.getElementById("table_body").innerHTML = tableData
})