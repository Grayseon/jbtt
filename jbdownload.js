variable("id", {
    fileContents: true,
    fileNames: true,
    directoryNames: true,
    exactString: false
}, ()=>{
    variable("name", {
        fileContents: true,
        fileNames: true,
        directoryNames: true,
        exactString: false
    })
})