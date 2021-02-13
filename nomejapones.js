//
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var az;
az = txt.length;
console.log("Número de caracteres alfa aceitos:" + az);
console.log(txt);

function caps() {
    
    var caps = document.getElementById("idNome").value;
    caps = caps.toUpperCase();
    document.getElementById("idNome").value = caps;
  }


function valida_az(){
	var filter_az = /^([A-Z]|\s)+$/ ;
	if(!filter_az.test(document.getElementById("idNome").value)){
	document.getElementById("idNome").value="";
	// document.getElementById("idNome").value = "Somente a-z";
	document.getElementById("idNome").style.borderColor = "#ff0000";
	document.getElementById("idNome").style.outline = "#ff0000";
	document.getElementById("idNome").focus();
	document.getElementById("idNome").onkeydown = function (){
	document.getElementById("idNome").style.borderColor = "#999999";
    document.getElementById("idNome").style.outline = null;}
    
	}
}




function converter() {

        var tecla, maiuscula, nomePessoa, caracteres, idc;
        var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var japones = ["ka","tu","mi","te","ku","lu","ji","ri","ki","zu","me","ta","rin","to","mo","no","ke","shi","ari","chi","do","ru","na","mei","fu","ra"];
        var letra, letraj, palavraj;
        palavraj = "";
        var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
            a = "ka";
            b = "tu";
            c = "mi";
            d = "te";
            e = "ku";
            f = "lu";
            g = "ji";
            h = "ri";
            i = "ki";
            j = "zu";
            k = "me";
            l = "ta";
            m = "rin";
            n = "to";
            o = "mo";
            p = "no";
            q = "ke";
            r = "shi";
            s = "ari";
            t = "chi";
            u = "do";
            v = "ru";
            x = "na";
            w = "mei";
            y = "fu";
            z = "ra";


        var alfabetojapones = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,w,y,z];

        nomePessoa = document.getElementById("idNome").value;
        //console.log(nomePessoa);

        caracteres = nomePessoa.length;
        //console.log("Número de caracteres do nome: " + caracteres);

        for (idc = 0; idc < caracteres; idc++) {
            //console.log(idc);
            //tecla = nomePessoa.slice(idc, 1);
            tecla = nomePessoa.substr(idc, 1);
            // console.log(tecla);

            switch (tecla) {
                case "A":
                    letra = tecla;
                    letraj = a;
                    // console.log(letraj);
                    break;
                case "B":
                    letra = tecla;
                    letraj = b;
                    // console.log(letraj);
                    break;
                case "C":
                    letra = tecla;
                    letraj = c;
                    // console.log(letraj);
                    break;
                case "D":
                    letra = tecla;
                    letraj = d;
                    // console.log(letraj);
                    break;
                case "E":
                    letra = tecla;
                    letraj = e;
                    // console.log(letraj);
                    break;
                case "F":
                    letra = tecla;
                    letraj = f;
                    // console.log(letraj);
                    break;
                case "G":
                    letra = tecla;
                    letraj = g;
                    // console.log(letraj);
                    break;
                case "H":
                    letra = tecla;
                    letraj = h;
                    // console.log(letraj);
                    break;
                case "I":
                    letra = tecla;
                    letraj = i;
                    // console.log(letraj);
                    break;
                case "J":
                    letra = tecla;
                    letraj = j;
                    // console.log(letraj);
                    break;
                case "K":
                    letra = tecla;
                    letraj = k;
                    // console.log(letraj);
                    break;
                case "L":
                    letra = tecla;
                    letraj = l;
                    // console.log(letraj);
                    break;
                case "M":
                    letra = tecla;
                    letraj = m;
                    // console.log(letraj);
                    break;
                case "N":
                    letra = tecla;
                    letraj = n;
                    // console.log(letraj);
                    break;
                case "O":
                    letra = tecla;
                    letraj = o;
                    // console.log(letraj);
                    break;
                case "P":
                    letra = tecla;
                    letraj = p;
                    // console.log(letraj);
                    break;
                case "Q":
                    letra = tecla;
                    letraj = q;
                    // console.log(letraj);
                    break;
                case "R":
                    letra = tecla;
                    letraj = r;
                    // console.log(letraj);
                    break;
                case "S":
                    letra = tecla;
                    letraj = s;
                    // console.log(letraj);
                    break;
                case "T":
                    letra = tecla;
                    letraj = t;
                    // console.log(letraj);
                    break;
                case "U":
                    letra = tecla;
                    letraj = u;
                    // console.log(letraj);
                    break;
                case "V":
                    letra = tecla;
                    letraj = v;
                    // console.log(letraj);
                    break;
                case "X":
                    letra = tecla;
                    letraj = x;
                    // console.log(letraj);
                    break;
                case "W":
                    letra = tecla;
                    letraj = w;
                    // console.log(letraj);
                    break;
                case "Y":
                    letra = tecla;
                    letraj = y;
                    // console.log(letraj);
                    break;
                case "Z":
                    letra = tecla;
                    letraj = z;
                    // console.log(letraj);
            }

            
            palavraj = palavraj + letraj;
            // console.log(palavraj);

           
        }

        palavraj = palavraj.toUpperCase();

        document.write = palavraj;

        document.getElementById("divNomeJ").innerHTML = palavraj;


    

       
    /*
        while (az < -1) {
            if (nome )

            i++;
        }
    */
}






/*
  while (alfabeto.indexOf("idNome") < 26 ) {
                
    
    
}

*/
