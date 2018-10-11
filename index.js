
var recipes = {

  chocolate: "two bars",
  sugar: "five cups",
  honey: "seven teaspoons"
}

//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function updateObjectWithKeyAndValue(obj, key, value){
 return Object.assign({}, obj, {[key]: value})
  //return Object;
}

//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
//first assign to new Object as a clone
//then can safely delete from new object
Object.assign({}, object, {key});
delete Object[key];
return Object;

}



function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
