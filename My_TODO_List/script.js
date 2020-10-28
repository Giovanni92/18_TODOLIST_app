
function Todolist(){

    // dichiariamo l'array dove andremo a mettere tutti i todos, che saranno oggetti
    const todos = [
        {
            id: 0,
            text : 'Andare dalla gofolina',
            completed: true
        },
        {
            id: 1,
            text : 'Andare a lavurer',
            completed: false
        },
        {
            id: 2,
            text : 'Fare il merendo',
            completed: true
        },
        {
            id: 3,
            text : 'fare una passeffata',
            completed: true
        },

    ];

    //se io metto una funzione qui all'interno sarà solo vista qui all'interno e dalle funzioni che ioritorno
    const renderTodos = () => {     //renderTodos la dichiaro come funzione anonima con le arrow functions
        alert('render todos');
    }

    // renderTodos();  //se chiamiamo la funzione all'interno dell'oggetto questa viene letta




    // ritorniamo un oggetto, dentro cui mettiamo delle proprieta che puntano a delle funzioni
    // per fare comunicare l'oggetto con il mondo esterno tramite la funzione

    //per RIASSUMERE, questo è il modo che abbiamo nella nostra app di esporci al mondo esterno(interface)
    //qualunque metodo di cui avremo bisogno per accedere ai param dell'oggetto lo esponiamo qua,
    //cosi da chiudere al mondo esterno la strutture della nostra app esponendo solo i metodi che ci servono
    return {
        getTodos : function() { //prop getTodos che punta  auna funzione anonima
            // alert('getTodos called')    //io avrò accesso a questa funzione una volta che todo list ritorna
            return todos;
        },
        //init ha visibilità su tutta la funzione
        init : function(){
           renderTodos();
        }
    }

}

// dobbiamo avere un metodo che ritorni qualcosa in modo da poter renderizzare i todo
const myTodo = Todolist();
// myTodo.getTodos();  //chiamo la funzione getTodos() invocandola (con le parentesi)
//                     //Ora getTodos fa riferimento alla funzione anonima che è nella proprietà
myTodo.init();
console.log(myTodo.getTodos());
console.log(myTodo);

