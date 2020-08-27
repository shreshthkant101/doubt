var dbms = firebase.database();
var storag = firebase.storage();
var typelist = [];
var injurylist = [];
var imagelinklist = [];
var loclist = [];
var phnlist = [];
var emlist = [];

function getdat() {

    var count = 0;

    var thingscountref = dbms.ref('/index');
    thingscountref.once('value', function(datl) {
        count = datl.val();
        console.log(count)
    })

    for (var i = 0; i <= count; i++) {
        dbms.ref(i + '/injury').once('value', function(snapshot) {
            injurylist.push(snapshot.val());
            console.log("done");
            console.log(injurylist);
        });

    }

}


function er(er) {
    console.log(er);
}