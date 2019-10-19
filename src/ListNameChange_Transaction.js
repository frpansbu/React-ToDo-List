class ListNameChange_Transaction extends jsTPS_Transaction{
    constructor(initName, newName){
        super();
        this.name = initName;
        this.newName = newName;
    }
    doTransaction(){
        this.name = this.newName;
    }
    undoTransaction(){
        this.newName = this.name;
    }
    toString(){
        return "New List Name: " + this.newName()
    }
}