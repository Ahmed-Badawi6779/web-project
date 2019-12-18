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


var $arr = [];
//  RANDOM FUNCTION TO GENERATE THE TEXT OF THE BUTTONS
function getRndInteger() {
    return Math.floor(Math.random() * (25 -0+1) ) + 0;
}


//  SELECTORS
var num=document.getElementById('num');
var generate=document.getElementById('gener');
var local=document.getElementById('local');
var buttons=document.getElementById('btns');
var imgs=document.getElementById('imgs');



function key(keyname,keytarget,pressdate=new Date()){
    this.keyname=keyname;
    this.keytarget=keytarget;
    this.pressdate=pressdate;
}


//  EVENT OF GENERATION BUTTON
generate.addEventListener('click',function(e){

    //  LOCALSTORAGE HANDLE OF GENERATE BUTTON
    if(localStorage.getItem('generate') !== null){
        var genj = JSON.parse(localStorage.getItem('generate'));
        var gentemp=new key(e.type,e.target.textContent,new Date());
        genj.key.push(gentemp);
        console.log(genj);
        for(var i=0;i<genj.key.length;i++){
            $arr.push(genj.key[i]);
        }
        var genjson = JSON.stringify(genj);
        localStorage.setItem('generate',genjson);
        console.log(genjson);

    }
    else{
        var gent ={
            'key' : []
        }
        var gentemp=new key(e.type,e.target.textContent,new Date());
        gent.key.push(gentemp);
        for(var i=0;i<gent.key.length;i++){
            $arr.push(gent.key[i]);
        }
        var genjson = JSON.stringify(gent);
        localStorage.setItem('generate',genjson);
        console.log(genjson);
    }


    //  CREATE BUTTONS
    buttons.innerHTML="";
    imgs.innerHTML="";
    var len = num.value;
    if(len>26 ||len==0)
    alert("ENTER NUMBER BETWEEN 1 AND 26")
    else{
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
            var count=0;
            //  LOCALSTORAGE HANDLE OF BUTTONS
            if(localStorage.getItem('char') !== null){
                
                var btnj = JSON.parse(localStorage.getItem('char'));
                var chartemp=new key(ev.type,ev.target.textContent,new Date());
                btnj.char.push(chartemp);
                console.log(btnj);
                for(var i=0;i<btnj.char.length;i++){
                    $arr.push(btnj.char[i]);
                }
                var btnjson = JSON.stringify(btnj);
                localStorage.setItem('char',btnjson);
                console.log(btnjson);
        
            }
            else{
                var btnt ={
                    'char' : []
                }
                var chartemp=new key(ev.type,ev.target.textContent,new Date());
                btnt.char.push(chartemp);
                for(var i=0;i<btnt.char.length;i++){
                    $arr.push(btnt.char[i]);
                }
                var btnjson = JSON.stringify(btnt);
                localStorage.setItem('char',btnjson);
                console.log(btnjson);
                
            }
        });
     } }

});


// LOAD EVENT HANDLER

window.addEventListener("load",function(e){

    if(localStorage.getItem('loadkey') !== null){
        var loadj = JSON.parse(localStorage.getItem('loadkey'));
        var loadtemp=new key(e.type,"the page loaded",new Date());
        loadj.key.push(loadtemp );
        console.log(loadj);
        for(var i=0;i<loadj.key.length;i++){
            $arr.push(loadj.key[i]);
        }
        var loadjson = JSON.stringify(loadj);
        localStorage.setItem('loadkey',loadjson);
        console.log(loadjson);
      
    }
    else{
        var loadt ={
            'key' : []
        }
        var loadtemp=new key(e.type,"the page loaded",new Date());
        loadt.key.push(loadtemp);
        for(var i=0;i<loadt.key.length;i++){
            $arr.push(loadt.key[i]);
        }
        var loadjson = JSON.stringify(loadt);
        localStorage.setItem('loadkey',loadjson);
        console.log(loadjson);
        
    }}

);


//  UN LOAD HANDLE
window.addEventListener('unload',function(e){

    if(localStorage.getItem('unloadkey') !== null){
        var unloadj = JSON.parse(localStorage.getItem('unloadkey'));
        var unloadtemp=new key(e.type,"the page unloaded",new Date());
        loadj.key.push(unloadtemp );
        for(var i=0;i<unloadj.key.length;i++){
            $arr.push(unloadj.key[i]);
        }
        var unloadjson = JSON.stringify(unloadj);
        localStorage.setItem('unloadkey',unloadjson);


    }
    else{
        var unloadt ={
            'key' : []
        }
        var unloadtemp=new key(e.type,"the page unloaded",new Date());
        unloadj.key.push(unloadtemp );
        for(var i=0;i<unloadj.key.length;i++){
            $arr.push(unloadj.key[i]);
        }
        var unloadjson = JSON.stringify(unloadt);
        localStorage.setItem('unloadkey',unloadjson);
    }
    }

);

window.setInterval(function(){
    $.ajax({
        "type": "POST",
        "url":  "js/main.php",
        "data": {"events":$arr},
        "success": function(response){
            console.log(response);
            localStorage.clear();
            $arr = [];
        }
 });
}, 5000);

 //Show Stored Data From Server
 $("#local").click(function(){
     document.getElementById("resp").innerHTML="";
    $.ajax({
        "type": "GET",
        "url":  "js/main.php",
        "data": {"events":""},
        "success": function(response){
            if(response){
            $("#resp").append(response);
            }
        }
    });
 });