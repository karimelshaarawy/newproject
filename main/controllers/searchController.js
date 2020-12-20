
const booknames = ['dune', 'lord of the flies', 'the grapes of wrath', 'leaves of grass', 'the sun and her flowers', 'to kill a mockingbird'];

function searchController(req, res) {
    var search = req.body.Search;
    var results = searchResults(search);
    console.log(results);
    res.render('searchresults');
}


function searchResults(key) {
    var results = [];
    var key2 = key.toLowerCase();
    for (var i = 0; i < booknames.length; i++)
        if ((booknames[i]).includes(key2))
            results.push(booknames[i]);
    return results;
}


module.exports = searchController;