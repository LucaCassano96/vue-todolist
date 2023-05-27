

/* Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no */


const { createApp } = Vue;

createApp({

    data(){
         return{
            activelement: 0,
            newTask: "",
            error: false,
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

    },
    methods : {
        removeTask(index){
          this.toDo.splice(index, 1);
        },

        AddTask(){
            if (this.newTask !== "" && this.newTask.length >= 3) {
                const newItem = {
                    task : this.newTask,
                    done : false
                }

                this.toDo.unshift(newItem);
                this.newTask = "";
                this.error = false;
            }
            else{
                this.error = true;
            }
            

        },

         doneOrUndone(idx){
            if (this.toDo[idx].done === false) {
                this.toDo[idx].done = true;
            }
            else{
                this.toDo[idx].done = false;
            }
         }
    },

    

}).mount("#app")



