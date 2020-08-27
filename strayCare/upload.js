var type = "";
var rf;

function up() {
    if (type != "") {
        var inj = document.getElementById('prob').value;
        if (inj != "") {
            var addr = document.getElementById('adr').value;
            if (addr != "") {
                var rf = document.getElementById('imp').files;
                if (rf[0] != null) {
                    var typ = rf[0].type.split('/')[0];
                    if (typ == "image") {
                        var pn = document.getElementById('pn').value;
                        if (pn != "") {


                            var db = firebase.database();
                            var store = firebase.storage();
                            var indexr = db.ref('index');
                            indexr.once("value", function(da) {
                                var indo = da.val();
                                var newin = indo + 1;
                                var imgref = store.ref('/' + newin);
                                imgref.put(rf[0]);
                                var storef = store.ref('/');
                                storef.child('/' + newin).getDownloadURL().then(function(url) {


                                    db.ref('/' + newin + '/').update({
                                        'name': document.getElementById('name').innerHTML,
                                        'type': type,
                                        'injury': inj,
                                        'loc': addr,
                                        'link': url,
                                        'phone': pn,
                                        'email': document.getElementById('uid').innerHTML

                                    })
                                    db.ref('/').update({
                                        'index': newin
                                    })
                                    alert("Successfully posted!")
                                    document.getElementById('t1').style.display = "none";
                                    document.getElementById('t2').style.display = "none";
                                    document.getElementById('t3').style.display = "none";
                                    type = "";
                                    document.getElementById('prob').value = "";
                                    document.getElementById('imp').files = null;
                                    rf = null;
                                    document.getElementById('adr').value = "";
                                    document.getElementById('pn').value = "";
                                }).catch(function(error) {
                                    console.log(error);
                                });

                            })

                        } else {
                            alert("please fill out all the fields.");
                        }
                    } else {
                        alert("please upload a valid file type.");
                    }
                } else {
                    alert("please upload an image.");
                }
            } else {
                alert("please fill out all the fields.");
            }
        }
    } else {
        alert("please fill out all the fields.");
    }

}