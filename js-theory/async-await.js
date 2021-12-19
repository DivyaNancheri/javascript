function step1(value, error) {
	return new Promise((resolve, reject) => {
		if (!error) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}

function step2(val, err){
	return new Promise((resolve,reject) =>{
		if(!error){
			resolve(val+20)
		}
		else
			reject('err')
	});
}
async function res(){
	let res2=await step1(10,false)
}
async function result() {
	let result1 = await step1(10, false);
	// console.log("in   ",result1);
	return result1;
}
async function result2() {
	let result = await Promise.resolve(5);
	return result;
}
console.log("final=",result());
result().then((result) => console.log(result)).catch((error) => console.log(error));
