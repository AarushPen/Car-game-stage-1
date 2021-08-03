class Form{
    constructor(){
        this.input = createInput("")
        this.button = createButton("ENTER")
        this.greeting = createElement("H1")
        this.reset = createButton("RESET")
    }
    display(){
        this.input.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2+150,displayHeight/2)
        this.reset.position(displayWidth-100,displayHeight/2-350)
    }


}