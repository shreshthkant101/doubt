class Package {
    constructor(name, type, inj, purl, adrr, phn, em) {
        var container = document.createElement('div');
        document.getElementById('contine').appendChild(container);
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.background = "linear-gradient(to bottom right, gold,goldenrod)";
        container.style.width = "350px";
        container.style.height = "500px";
        container.style.margin = "30px";
        container.style.borderRadius = "10px";
        container.style.boxShadow = "0px 0px 10px grey";
        container.style.display = "inline-block";

        var hdim = document.createElement('div');
        container.appendChild(hdim);
        hdim.style.width = "inherit";
        hdim.style.height = "150px";
        hdim.style.background = "url(" + purl + ")";
        hdim.style.backgroundAttachment = "scroll";
        hdim.style.backgroundSize = "cover";
        hdim.style.backgroundPosition = "center";
        hdim.style.backgroundRepeat = "no-repeat";
        hdim.style.borderTopLeftRadius = "10px";
        hdim.style.borderTopRightRadius = "10px";
        hdim.style.cursor = "pointer";

        var dets = document.createElement('div');
        container.appendChild(dets);
        dets.style.height = "350px";
        dets.style.width = "inherit";
        dets.style.borderBottomLeftRadius = "10px";
        dets.style.borderBottomRightRadius = "10px";
        dets.style.background = "none";



        var nam = document.createElement('h1');
        nam.innerText = "Posted by: " + name;
        dets.appendChild(nam);
        nam.style.textAlign = "center";
        nam.style.marginTop = "25px";
        nam.style.position = "relative";
        nam.style.fontSize = "22px";
        nam.style.marginBottom = "15px";

        var ty = document.createElement('h1');
        ty.innerText = "Type: " + type;
        dets.appendChild(ty);
        ty.style.textAlign = "center";
        ty.style.marginTop = "8px";
        ty.style.position = "relative";
        ty.style.fontSize = "22px";

        var inpl = document.createElement('h1');
        inpl.innerText = "injury to the stray: " + inj;
        dets.appendChild(inpl);
        inpl.style.textAlign = "center";
        inpl.style.marginTop = "8px";
        inpl.style.position = "relative";
        inpl.style.fontSize = "22px";

        var lok = document.createElement('h1');
        lok.innerText = "location of the stray: " + adrr;
        dets.appendChild(lok);
        lok.style.textAlign = "center";
        lok.style.marginTop = "8px";
        lok.style.position = "relative";
        lok.style.fontSize = "22px";

        var eml = document.createElement('h1');
        eml.innerText = "Email address of " + name + ": " + em;
        dets.appendChild(eml);
        eml.style.textAlign = "center";
        eml.style.marginTop = "8px";
        eml.style.position = "relative";
        eml.style.fontSize = "22px";

        var pnh = document.createElement('h1');
        pnh.innerText = "Phone number of " + name + " for more details: \n " + phn;
        dets.appendChild(pnh);
        pnh.style.textAlign = "center";
        pnh.style.marginTop = "8px";
        pnh.style.position = "relative";
        pnh.style.fontSize = "22px";



        hdim.onmouseover = function() {
            hdim.style.opacity = "0.8";
            hdim.style.transition = "0.5s";
        }
        hdim.onmouseout = function() {
            hdim.style.opacity = "1";
            hdim.style.transition = "0.5s";
        }
        hdim.onclick = function se() {
            window.location.href = purl;
        }


    }
}