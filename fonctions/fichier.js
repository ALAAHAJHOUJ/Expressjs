const Filtrer=(Users)=>{
let tab=[];
tab=Users.filter((ele,key)=>{
    return ele.name.includes("s");
})

return tab;
}

const factorielle=(nb)=>{
if(nb==1||nb==0) return 1;
else return nb*factorielle(nb-1);
}

const puissance=(nb,puiss)=>{
if(puiss==0) return 1;
else if(puiss==1) return nb;
else return nb*puissance(nb,puiss-1);
}

module.exports ={Filtrer,factorielle,puissance};