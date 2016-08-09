var klatki =  [[0,0,125,125],[254,0,125,125],[127,0,125,125],[381,0,125,125],[127,127,125,125],[0,127,125,125],[254,381,125,125],[381,381,125,125],[0,508,125,125],[127,508,125,125],[254,508,125,125],[381,508,125,125],[0,635,125,125],[381,254,125,125],[0,381,125,125],[127,381,125,125],[0,762,125,125],[0,889,125,125],[127,635,125,125],[254,127,125,125],[381,127,125,125],[0,254,125,125],[127,254,125,125],[254,254,125,125],[254,635,125,125],[381,635,125,125],[127,762,125,125],[127,889,125,125],[254,762,125,125]];

var pozycje = new Array();

var num:number = 0;
var maxL:number = 0;
var miejsceOka;
var opuznienie = 0;
var ileczekamy = 20;
var czekanie = 0;

class strona1{
    constructor()
    {
        maxL = klatki.length;
        num = 0;
    miejsceOka = $(".oko");
        
            for(var i = 0;i<maxL;i++)
            {
                var czlo1 = klatki[i][0];
                    if(czlo1>0)
                    {
                        czlo1 = -czlo1;
                    }
                
                var czlo2 = klatki[i][1];
                    if(czlo2>0)
                    {
                        czlo2 = -czlo2;
                    }
var wiersz:string = czlo1 + "px " + czlo2 + "px";
    pozycje.push(wiersz);
            }
        poruszokiem();
        
        
   
    }
    
    



}

function poruszokiem()
    {
   
    $(miejsceOka).css("background-position",pozycje[num]);
    
        if(num<maxL)
        {
            num++;
        }
else{
    num = 0;
}
    
        if(czekanie == ileczekamy)
        {
            
    opuznienie = Math.random() * 2000 + 500;
    
            czekanie = 0;
            ileczekamy = Math.round(Math.random() * 24) + 4;
        }
else{
     opuznienie = 0;
    czekanie++;
}
    setTimeout(function(){poruszokiem();},50 + opuznienie);
    }
