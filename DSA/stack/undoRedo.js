// class UndoRedoStack{
//     constructor(){
//         this.stack=[]
//         this.undoStack=[]
//     }

//     doOperation(operation){
//         this.stack.push(operation)
//     }

//     undo(){
//         if(this.stack.length>0){
//             const operation=this.stack.pop()
//             this.undoStack.push(operation)
//             console.log('undid operation')
//         }else{
//             console.log('nothing to undo');
//         }
//     }

//     redo(){
//         if(this.undoStack.length>0){
//             const operation=this.undoStack.pop()
//             this.stack.push(operation)
//             console.log('redid operation');
//         }else{
//             console.log('nothing to redo');
//         }
//     }

//     display() {
//         console.log('Operations:', this.stack);
//         console.log('Undone operations:', this.undoStack);
//       }
      
// }

// const undoRedoStack = new UndoRedoStack();
//       undoRedoStack.doOperation('Add item 1');
//       undoRedoStack.doOperation('Add item 2');
//       undoRedoStack.doOperation('Add item 3');
//       undoRedoStack.display();
//       undoRedoStack.undo()
//       undoRedoStack.display();
//       undoRedoStack.redo()
//       undoRedoStack.display()























class undoRedo{
    constructor(){
        this.stack=[]
        this.undoStack=[]
    }

    doOperation(operation){
        this.stack.push(operation)
    }

    undo(){
        if(this.stack.length>0){
            this.undoStack.push(this.stack.pop())
            console.log('undid operation');
        }else{
            console.log('nothing to undo');
        }
    }

    redo(){
        if(this.undoStack.length>0){
            this.stack.push(this.undoStack.pop())
            console.log('redid operation');
        }
        else{
            console.log('nothing to redo');
        }
    }

    display(){
        console.log('operation:',this.stack);
    }
}

const unre=new undoRedo()
unre.doOperation('item 1')
unre.doOperation('item 1w')
unre.doOperation('item 1ww')
unre.doOperation('item 1www')
unre.display()
unre.undo()
unre.display()
unre.undo()
unre.display()
unre.redo()
unre.display()
unre.redo()
unre.display()