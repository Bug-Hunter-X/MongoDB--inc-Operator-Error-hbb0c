```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 10 } });
```