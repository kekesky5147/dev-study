const build = new Promise (function(resolve,reject)  {
    setTimeout(()=>resolve(`완료!`))
});

    build.then (
        result => console.log(result),
        fail=> console.log(fail)
    )
