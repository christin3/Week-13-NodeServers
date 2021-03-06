
var friendsData = require('../data/friends.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.post('/api/friends', function (req, res) {
//This route will also be used to handle the compatibility logic
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();

        //console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);

        var sum = 0;
        for (var i = 0; i < friends.length; i++) {

            sum += parseInt(friends[i].choices);

        }
        console.log(sum);




    });
    app.get('/api/friends', function (req, res) {

        var chosen = req.params.friends;

        if (chosen) {
            console.log(chosen);

            for (var i = 0; i < friends.length; i++) {
                if (chosen === friends[i].routeName) {
                    res.json(friends[i]);
                    return;
                }
            }

            res.json(false);
        } else {
            res.json(friends);
        }



    });






    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don't worry about it!

    app.post('/api/clear', function () {
        // Empty out the arrays of data
        newFriend=[];


    });
};
