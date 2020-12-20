
const booknames = ['dune', 'lord of the flies', 'the grapes of wrath', 'leaves of grass', 'the sun and her flowers', 'to kill a mockingbird'];

function searchController(req, res) {
    var search = req.body.Search;
    var results = searchResults(search);
    res.render('searchresults', { results });
}


function searchResults(keyword) {
    var results = [];
    var keywordLowerCase = keyword.toLowerCase();
    for (var i = 0; i < booknames.length; i++)
        if ((booknames[i]).includes(keywordLowerCase))
            results.push(booknames[i]);
    return results;
}


module.exports = searchController;