//  ARRAY OF ALPHABITS
var alphabits=['A','B','C','D','E','F','G','H','I','J','K',
'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//  ARRAY OF PHOTOS
var photos=['photos/a.gif','photos/b.jpg'
,'photos/c.gif','photos/d.jpg',
'photos/e.jpg','photos/f.gif','photos/g.gif','photos/h.gif',
'photos/i.gif','photos/j.gif','photos/k.gif','photos/l.png',
'photos/m.gif','photos/n.jpg','photos/o.jpg','photos/p.jpg',
'photos/q.gif','photos/r.gif','photos/s.gif','photos/t.gif',
'photos/u.jpg','photos/v.jpg','photos/w.jpg','photos/x.gif',
'photos/y.jpg','photos/z.jpg'];

// EVENT LOAD
window.addEventListener("load",function(){
    if(localStorage.getItem('loadkey') !== null){
        var loadj = JSON.parse(localStorage.getItem('loadkey'));
        loadj.key.push([new Date().toLocaleString() , "THE PAGE LOADED"]);
        console.log(loadj);
        var loadjson = JSON.stringify(loadj);
        localStorage.setItem('loadkey',loadjson);
        console.log(loadjson);
    }
    else{
        var loadt ={
            'key' : []
        }
        loadt.key.push([new Date().toLocaleString() ,  "THE PAGE LOADED"]);
        var loadjson = JSON.stringify(loadt);
        localStorage.setItem('loadkey',loadjson);
        console.log(loadjson);    
    }
    this.setTimeout(function(){
        console.log("LOCALSTORAGE CLEARED");
        localStorage.clear();
    },5000);
}
);

// UN LOAD HANDLE
window.addEventListener('unload',function(){
    if(localStorage.getItem('unloadkey') !== null){
        var unloadj = JSON.parse(localStorage.getItem('unloadkey'));
        unloadj.key.push([new Date().toLocaleString() , "THE PAGE UNLOADED"]);
        var unloadjson = JSON.stringify(unloadj);
        localStorage.setItem('unloadkey',unloadjson);
    }
    else{
        var unloadt ={
            'key' : []
        }
        unloadt.key.push([new Date().toLocaleString() , "THE PAGE UNLOADED"]);
        var unloadjson = JSON.stringify(unloadt);
        localStorage.setItem('unloadkey',unloadjson);
    }
    }
);

//  RANDOM FUNCTION TO GENERATE THE TEXT OF THE BUTTONS
function getRndInteger() {
    return Math.floor(Math.random() * (25 -0+1) ) + 0;
}

//  SELECTORS
var num=document.getElementById('num');
var generate=document.getElementById('gener');
var buttons=document.getElementById('btns');
var imgs=document.getElementById('imgs');

//  EVENT OF GENERATION BUTTON
generate.addEventListener('click',function(e){
    // LOCALSTORAGE HANDLE OF GENERATE BUTTON
    if(localStorage.getItem('generate') !== null){
        var genj = JSON.parse(localStorage.getItem('generate'));
        genj.key.push([new Date().toLocaleString() , document.getElementById('num').value]);
        console.log(genj);
        var genjson = JSON.stringify(genj);
        localStorage.setItem('generate',genjson);
        console.log(genjson);
    }
    else{
        var gent ={
            'key' : []
        }
        gent.key.push([new Date().toLocaleString() ,  document.getElementById('num').value]);
        var genjson = JSON.stringify(gent);
        localStorage.setItem('generate',genjson);
        console.log(genjson);
    }

    // CREATE BUTTONS
    buttons.innerHTML="";
    imgs.innerHTML="";
    var len = num.value;
    for(var i=0;i<len;i++){
        var newbtn=document.createElement('button');
        var index=getRndInteger();
        var text=document.createTextNode(alphabits[index]);
        newbtn.appendChild(text);
        newbtn.setAttribute('style','margin:10px 5px;padding:10;width:60px;height:30px;');
        buttons.appendChild(newbtn);
        newbtn.value=photos[index];

        //  EVENT ON BUTTONS GENERATED RANDOMLY
        newbtn.addEventListener('click',function(ev){
            imgs.innerHTML="";
            var image=document.createElement('img');
            imgs.appendChild(image);
            image.setAttribute('src',ev.target.value);

            // LOCALSTORAGE HANDLE OF BUTTONS
            if(localStorage.getItem('char') !== null){
                var btnj = JSON.parse(localStorage.getItem('char'));
                btnj.char.push([new Date().toLocaleString() , ev.target.value]);
                console.log(btnj);
                var btnjson = JSON.stringify(btnj);
                localStorage.setItem('char',btnjson);
                console.log(btnjson);
            }
            else{
                var btnt ={
                    'char' : []
                }
                btnt.char.push([new Date().toLocaleString() ,  ev.target.value]);
                var btnjson = JSON.stringify(btnt);
                localStorage.setItem('char',btnjson);
                console.log(btnjson);
            }
        });
    }
});
