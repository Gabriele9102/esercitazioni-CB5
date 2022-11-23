
//--------------------------------------------Funzioni del nostro programma--------------------------------------
function sum(a,b){
    return  parseFloat(a) + parseFloat(b);
}

function sub(a,b){
    return  parseInt(a) - parseInt(b);
}

function mult(a,b){
    return  parseInt(a) * parseInt(b);
}

function div(a,b){
    return  parseInt(a) / parseInt(b);
}





//----------------------------------------------------GET & POST-----------------------------------------------------
const GET = async (URL) => {
	const response = await fetch(URL);
	return await response.json()
}

const POST = async (URL, body) => {
	return await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})
}

export{ sum , sub, mult, div}
