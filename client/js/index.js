

(async ()=>{

    //EXAMPLE OF THROTTLED REQUESTS
    let res = await fetch('/api/user/first-name')
    let firstName = await res.text()
    let res2 = await fetch('/api/user/last-name')
    let lastName = await res2.text()


    document.querySelector('h1').innerHTML = `Hello: ${firstName} ${lastName}!`
})()




/**
 *   
    fetch('/api/user')
    .then(res => {
        return res.Body.json()
    })
    .then(resAsJSON => {
        console.log(resAsJSON)
    })
 */



     // const [res, res2 ] = await Promise.all([fetch('/api/user/first-name'), fetch('/api/user/last-name')])
    // const [ firstName, lastName ] = await Promise.all([res.text(), res2.text()])