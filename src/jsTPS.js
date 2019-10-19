class jsTPS{
    constructor(){
        this.transactions  = [];
        this.mostRecentTransaction = -1;
        this.performingDo = false;
        this.performingUndo = false;
    }

    isPerformingDo(){
        return this.performingDo;
    }

    isPerformingUndo(){
        return this.performingUndo;
    }

    doTransaction(){
        if (this.hasTransactionToRedo()){
            
            this.performingDo = true;
            let transaction = this.transactions[this.mostRecentTransaction + 1];
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }

    addTransaction(transaction){
        if((this.mostRecentTransaction < 0) || (this.mostRecentTransaction < (this.transactions.length -1))){
            for (let i = this.transactions.length-1 ; i > this.mostRecentTransaction; i--){
                this.transactions.pop()
            }
        }
        this.transactions.push(transaction);
        this.doTransaction();
    }

    peekUndo(){
        if (this.hasTransactionToUndo()){
            return this.transactions[this.mostRecentTransaction];
        }else{
            return null;
        }
    }

    peekDo(){
        if (this.hasTransactionToRedo()){
            return this.transactions[this.mostRecentTransaction+1];
        }else{
            return null;
        }
    }

    undoTransaction(){
        if(this.hasTransactionToUndo()){
            this.performingUndo = true;
            let transaction = this.transactions[this.mostRecentTransaction];
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }

    clearAllTransactions(){
        for(let i = 0; i <= this.transactions.length + 1; i++){
            this.transactions.pop()
        }
        this.mostRecentTransaction = -1;
    }

    getSize(){
        return this.transactions.length;
    }

    getRedoSize(){
        return this.getSize() - this.mostRecentTransaction - 1;
    }

    getUndoSize(){
        return this.mostRecentTransaction + 1;
    }

    hasTransactionToUndo(){
        return this.mostRecentTransaction >= 0;
    }

    hasTransactionToRedo(){
        return this.mostRecentTransaction < (this.transactions.length -1);
    }

    toString(){
        let text = "--Number of Transactions: " + this.transactions.length + "\n";
        text += "--Current Index on Stack: " + this.mostRecentTransaction + "\n";
        text += "--Current Transaction Stack:\n";
        for (let i = 0; i <= this.mostRecentTransaction; i++) {
            let jT = this.transactions[i];
            text += "----" + jT.toString() + "\n";
        }
        return text;
    }

}

export default new jsTPS()