//modules hors fichier (dependences de projet)
const Filtrer=require('./fonctions/fichier')
const express=require('express');
const cors =require('cors')
const app=express();
const Users=[{key:"1",name:"hajhouj"},{key:"2",name:"boutayna"},{key:"3",name:"safaa"},{key:"4",name:"saad"}];


//pour l'autorization
app.use(cors());

//middelwaires pour le parse automatique
app.use(express.text());
app.use(express.json());


//endpoint pour recuperer les utilisateurs
app.get("/Users/",async(req,res)=>{
        if(Users.length==0) res.json("aucun Utilisateur existant")
        else res.send(Users);
})



//endpoint pour ajouter un utilsateur
app.post("/Users",(req,res)=>{
        console.log(req.body);
        Users.push(req.body);
        res.send(Users);
})



//endpoint pour supprimer un utilisateur

app.delete("/delete/",(req,res)=>{
    //supprimer le dernier utilisateur dans la liste
    Users.pop();


    //afficher dans le serveur
    console.log(Users);

    //envoyer au client
    res.send(Users);

})


//endpoint de test (juste pour tester) traitement asynchrone
app.get('/exemple/',async(req,res)=>{



            const task1=()=>{
                return new Promise((res,rej)=>{
                    setTimeout(() => {
                        res("clean the kitchen")
                    }, 2000);
                })
            }



            const task2=()=>{
                return new Promise((res,rej)=>{
                    setTimeout(() => {
                        res('clean My room')
                    }, 3000);
                })
            }



            const task3=()=>{
                return new Promise((res,rej)=>{
                    setTimeout(() => {
                        res('playing football')
                    }, 2000);
                })
            }


            let a=await task1();
            console.log(a);
            let b=await task2();
            console.log(b);
            let c=await task3();
            console.log(c);
            console.log("finishing");
            res.json({name:"safaa",baby:"yes"})
            
            })



            app.get("/filtrer/",(req,res)=>{
            console.log(req.body)
            const Filtrer1=Filtrer(Users);
            console.log(Filtrer(Users))

            res.send(Filtrer1);

})



//endpoint pour recuperer la factorielle d'un entier naturel
app.get("/factorielle",(req,res)=>{
console.log(req.body);
console.log(typeof (req.body))
res.send(Filtrer.factorielle(+req.body))
})


//endpoint pour recuperer lapuissance d'un entier naturel
app.get("/puissance/",(req,res)=>{
const resultat=Filtrer.puissance(req.body.nombre,req.body.puissance)
res.send(resultat);
})


app.listen("3000",()=>{
    console.log("hey hey hey");
    
})

