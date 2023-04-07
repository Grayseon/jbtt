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
    }, ()=>{
        prompt("name a different word to replace \"this\"", (a)=>{
            replace("this", {
                fileContents: true,
                fileNames: true,
                directoryNames: true,
                exactString: true
            }, a)
        })
    })

})