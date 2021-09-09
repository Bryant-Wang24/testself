const data = {
  person1:{name:'kobe',age:41},
  person2:{name:'jordon',age: 60},
  person3:{name:'curry',age: 34},
}
result = Object.keys(data).reduce((acc,value)=>{
  const obj = data[value]
   obj.num = value
    acc.push(obj)
  console.log(value)
  console.log(obj)
  return acc
},[])
console.log('结果',result)