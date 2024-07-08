class laptop {
    constructor(brand) {
        this.lapname = brand;

    }
    present() {
        return'the laptop name is' + this.lapname;
    }
}
class medel extends laptop {
    constructor(brand,mod) {
        super(brand);
        this.model = mod;
        }
        show() {
            return this.present() + 'the model name is'+this.model;
        }
}
let lap1 = new model("dell");