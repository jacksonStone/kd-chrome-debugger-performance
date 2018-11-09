
const express = require('express')
const router = express.Router()


function getUserDetails(name){
    return new Promise(function(resolve) { 
        setTimeout(()=>resolve(name), 500)
    });
}

router.get('/user/first-name', async (_, res) => {
	const user = await getUserDetails('Joe');
 	res.send(user);
 	res.end();
})

router.get('/user/last-name', async (_, res) => {
	const user = await getUserDetails('Shmoe');
 	res.send(user);
 	res.end();
})

module.exports = router


// res.set('Cache-Control', 'public, max-age=31557600');