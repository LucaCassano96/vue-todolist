

/* Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no */


const { createApp } = Vue;

createApp({

    data(){
         return{
            activelement: 0,
                
                toDo: [
                    {
                        task: "comprare il latte",
                        done: true,
                    },
                    {
                        task: "comprare il pane",
                        done: true,
                    }, 
                    {
                        task: "andare in palestra",
                        done: false,
                    }, 
                    {
                        task: "suonare la chitarra",
                        done: false,
                    }, 
                    {   task: "riparare il rubinetto",
                        done: false,
                    }
                ]
             

         }

    }

}).mount("#app")



