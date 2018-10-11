
var recipes = {

  chocolate: "two bars",
  sugar: "five cups",
  honey: "seven teaspoons"
}
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function updateObjectWithKeyAndValue(obj, prop2, 2) {
  Object.assign({}, obj, {[prop2]: 2})
  return Object;
}
