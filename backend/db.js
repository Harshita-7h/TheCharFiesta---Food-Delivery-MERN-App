import mongoose from 'mongoose';

const { connect, connection } = mongoose;

const mongoURI = 'mongodb+srv://thecharfiesta:Harshita77@cluster0.kt5vm.mongodb.net/thecharfiestamern?retryWrites=true&w=majority&appName=Cluster0';

export default function (callback) {
    // Connect to MongoDB
    connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) {
            console.log("---" + err);
            return;
        }

        console.log("Connected to MongoDB");

        try {
            // Fetch foodItems collection
            const foodCollection = connection.db.collection('foodItems');
            const foodData = await foodCollection.find({}).toArray(); // Use native MongoDB's toArray() here
           
            // Fetch foodCategory collection
            const categoryCollection = connection.db.collection('foodCategory');
            const categoryData = await categoryCollection.find({}).toArray(); // Use native MongoDB's toArray() here

            // Callback with food data and category data
            //console.log(foodData,categoryData)
            callback(err, foodData, categoryData);

        } catch (error) {
            console.log('Error fetching data:', error);
            callback(error, null, null);
        }
    });
};
