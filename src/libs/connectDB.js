const mongoose= require('mongoose')

function connectDB() {	
	mongoose.connect(
	    process.env.MONGODB_URI,
	).then(()=>{
		console.log('db connection established')})
		.catch(e=>{
			console.log(`db connection failed : ${e.message}`)})
		}
		
module.exports=connectDB
