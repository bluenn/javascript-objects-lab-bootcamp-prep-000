
var recipes = {

  chocolate: "two bars",
  sugar: "five cups",
  honey: "seven teaspoons"
}

//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function updateObjectWithKeyAndValue(object, key, value){
Object.assign({}, obj, {[key]: value})
  return Object;
}

//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2) {
  obj[prop2] = 2;
  return obj;
}
