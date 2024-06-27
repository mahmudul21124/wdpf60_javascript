class formValidation{
    constructor(name, contact, remarks, sex, courses, location){
        this.name = name;
        this.contact = contact;
        this.remark = remarks;
        this.sex = sex;
        this.course = courses;
        this.location = location;
    }

    vali(){
        let wina = window.open("", "abc", "width=400px, height= 600px");
        let output = "<h3>Students Information</h3>";
        output += "Name: " + this.name + "<br>";
        output += "Contact: " + this.contact + "<br>";
        output += "Remarks: " + this.remark + "<br>";
        output += "Sex: " + this.sex + "<br>";
        output += "Course: " + this.course + "<br>";
        output += "Location: " + this.location + "<br>";

        wina.document.write(output);
    }
}