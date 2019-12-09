class  Pilot {
   constructor( name ){
    this.name = name
    this.validate
    alert("new pilot")
    }
    
    validate () {
        this.validator = new NameValidator(this.name)
    }

    hi(){
        this.alert("hello!")
    }
}
