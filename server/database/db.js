import mongoose from 'mongoose'



const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.fvmhbyw.mongodb.net/crudApplication`
     try {
       await mongoose.connect(URL);
       console.log('Database Connected Successfully')
     } catch (error) {
        console.log('Error while connecting with the database',error)
     }
}

export default Connection