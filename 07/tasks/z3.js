//НАСЛІДУВАННЯ

//наслідування класів
class Worker extends Phone {
    constructor (name,surname,number,weight,model) {
        super(number,weight,model)//властивості для наслідування з класу Phone
        this.name = name;
        this.surname = surname;
    }
}//також ще наслідування методів