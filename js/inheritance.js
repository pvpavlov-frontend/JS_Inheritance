"use strict"

// Реализовать иерархию:
// ПассажирскийТранспорт (PassengerTransport) =>ТранспортноеСредство (Vehicle) (3-4 свойства, 1-2 метода)
// ГрузовойТранспорт (FreightTransport) =>ТранспортноеСредство (Vehicle).


// Для базового класса Vehicle реализовать:
// - свойства:
// --- dimensions - габариты (объект с длиной , шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.

// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).

// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.

// Создать объекты всех классов иерархии, протестировать работу методов.

class Vehicle{
  constructor(dimension, brand, model, manufactureDate ){
    this.dimension = dimension;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  get getMaxSize() {
    let maxDimension = 0;
    for (var key in this.dimension) {
      maxDimension = Math.max(this.dimension[key], maxDimension);
    }

    return maxDimension
  }
  get getAge(){
    return new Date().getFullYear() - this.manufactureDate
  }
}

const car1 = new Vehicle({
  length: 4.4,
  width: 1.8 ,
  tall: 10.3 
},'Porshe', '911', 1990)
console.log('car1 ', car1);
console.log('car1.getMaxSize ', car1.getMaxSize);
console.log('car1.getAge :>> ', car1.getAge);

class PassengerTransport extends Vehicle {
  constructor(dimension, brand, model, manufactureDate, passengerLimit, passengerCount) {
    super(dimension, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit; //максимальное количество пассажирских мест
    this.passengerCount = passengerCount; //количество занятых пассажирских мест
  }
  set passengerCount(value) {
    if( value === "number"){
      throw ("Количество мест должно быть числом ")
    }
    if(value > this.passengerLimit){
      throw ("Достигнут придел добавления пассажиров ")
    }
    this._passengerCount = value;
  }
  get passengerCount() {
    return this._passengerCount;
  }
  get addPassenger(){
    if(this.passengerCount < this.passengerLimit){
      this.passengerCount +=1;
      return true;
    }else{
      return false;
    }
  }
}

try {
  const car2 = new PassengerTransport({
    length: 3,
    width: 1.2 ,
    tall: 1 
  },'Porshe', 'Turbo', 2000, 2, 1)
  console.log('car2 ', car2);
  console.log('car2.getAge ', car2.getAge);
  console.log('car2 :>> ', car2.addPassenger);
  console.log('car2 :>> ', car2.addPassenger);
  
} catch (error) {
  console.log('error :>> ', error);
}

class FreightTransport extends Vehicle{
  constructor(dimension, brand, model, manufactureDate, capacity,  ){
    super(dimension, brand, model, manufactureDate);
    this.capacity = capacity;// грузоподемность
  }

  checkLoadingPossibility(weight){
    if( typeof weight !== 'number'){
      throw ("Количество мест должно быть числом ")
    }
    if(weight > this.capacity){
      return false;
    }
    return true
  }
}

try {
  const car3 = new FreightTransport({},'Man', '488', 2020, 3500)

  console.log('car3 ', car3);
  console.log('car3.getAge ', car3.getAge);
  console.log('car3 :>> ', car3.checkLoadingPossibility(3500));
  
} catch (error) {
    console.log('error :>> ', error);
}

