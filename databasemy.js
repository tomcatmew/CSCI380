function shortDB_delete()
{
    var db = firebase.firestore();
    db.collection('shortDB').where('short_id','>',"s0").get()
      .then(function(querySnapshot) {
            // Once we get the results, begin a batch
            var batch = db.batch();
            querySnapshot.forEach(function(doc) {
                batch.delete(doc.ref);
            });
            return batch.commit();
      });
}
