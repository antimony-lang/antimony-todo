/* START builtins */

function _printf(msg) {
  // Message is casted to string to prevent crash
  process.stdout.write(msg.toString());
}

function _exit(code) {
  process.exit(code);
}

/* END builtins */
function Todo(args) {
this.name = args.name;
this.checked = args.checked;
}
function todo_new(name){
return new Todo({checked: false,name: name,});
}

function init(){
init_text_field();
init_submit_button();
}

function init_text_field(){
var text_field = document.getElementById("input_text");
}

function init_submit_button(){
var button = document.getElementById("submit_button");
button.addEventListener("click",on_submit);
}

function on_submit(){
var input_text = document.getElementById("input_text");
var text = input_text.value;
append_todo(todo_new(text));
input_text.value = "";
}

function append_todo(todo){
var container = document.getElementById("app");
var todo_element = document.createElement("div");
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
todo_element.appendChild(checkbox);
var text = document.createTextNode(todo.name);
todo_element.appendChild(text);
container.appendChild(todo_element);
}

function main(){
init();
}

function print(arg){
_printf(arg);
}

function println(msg){
print(msg + "\n");
}

function assert(condition){
if (condition === false){
println("Assertion failed");
exit(1);
};
}

function exit(code){
_exit(code);
}

function len(arr){
var c = 0;
while (arr[c]) {
c += 1;
}
;
return c;
}

function rev(arr){
var l = len(arr);
var new_arr = [];
var i = 0;
var j = l;
while (i < l) {
new_arr[i] = arr[j];
i = i - 1;
j = j - 1;
}
;
return new_arr;
}

main();