export class SelectedCourses{
    courseName : string = "";
    courseDescription : string = "";
    courseImageLocation : string = "";

    courses = [
        { id : 0, name : "Java Programming", available : true, imageLocation : "assets/java.png", description : "This is java course", reference : "java"},
        { id : 1, name : "Python Programming", available : true, imageLocation : "assets/python.png", description : "This is python course", reference : "python" },
        { id : 2, name : "Java Script Programming", available : true, imageLocation : "assets/js.png", description : "This is java script course", reference : "js"},
        { id : 2, name : "Data Structures in java ", available : true, imageLocation : "assets/java.png", description : "This is java script course", reference : "java"},
        { id : 2, name : "Data Structures in Python ", available : true, imageLocation : "assets/python.png", description : "This is java script course", reference : "python"}
      ]
}