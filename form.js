class Form{
    constructor(){
        //this.input=createElement('h2');
        //this.button=createButton('Play');
           //     this.input=createInput('NAME');

    }
    display(){
        
        if(gameState===0){
        var input=createElement('h2');
        input=createInput('Name');
        var button=createButton("Play");
        input.position(displayWidth/2,displayHeight/2);
        button.position(displayWidth/2,displayHeight/2+100);
        data=input.value();
        button.mousePressed(()=>{
            input.hide();
            button.hide();
            gameState=1;
            var greeting=createInput("hello"+data);
            greeting.position(displayWidth/2,displayHeight/2+100);
           
            console.log(gameState);
        })
    }
}
    
} 