const { addManyCars } = require('../models/detailsModel.js')
const name = ['Tesla Pretense', 'Ford Bronco', 'Nissan Thunder Punch', 'Kia Forte', 'Ford Focus', 'Kia Soul',
 "Toyota it'ill run", 'Toyota Yaris', 'Nissan Sentra', 'Ford Focus', 'Nissan Sentra', 'Hyundai Accent',
  'Kia Rio S', 'Chevrolet Cruze',]

  const price =  [12000, 9000, 13123, 43290, 432329, 23788, 43566, 6000, 1544, 12887]

  const engine = ['1.5L I-4 Cyl', '1.8L I-4 Cyl', '2.0L I-4 Cyl', '2.0L I-4 Cyl', '1.8L I-4 Cyl', '1.12L I-6 Cyl']
  const color = ['Pinot Nior', 'Blind Rage Black', 'My Hearts So Blue', 'covid graphic red', 'Galvanize Orange', 'Secure Masculinity Pink' ]
  const mpg = ['1.5L I-4 Cyl', '1.4L I-4 Cyl', '1.8L I-4 Cyl', '1.6L I-4 Cyl', '2.0L I-4 Cyl', '1.8L I-4 Cyl']
  const mileage = [1000, 45, 0, 78320, 454839, 5438924, 54378297,983242, 923489, 542890, 543289, 109, 4320, 5429]
  const feature = ['That thing your firend has', 'Parking sensors', 'Front dual zone A/C', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Emergency communication system', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels']
  let id = 1798100;
const getDetail = (detail) => {
    return detail[Math.floor(Math.random() * detail.length)]
}

('13000', 'Toyota Yaris', '1.5L I-4 Cyl', 'Pulse', '32 mpg City 40 mpg Hwy', '33,886', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels'),
('11239', 'Nissan Sentra', '1.8L I-4 Cyl', 'Fresh Powder', '29 mpg City 37 mpg Hwy', '39886', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Fully automatic headlights'),
('11289', 'Ford Focus', '2.0L I-4 Cyl', 'Ruby', '26 mpg City 36 mpg Hwy', '33199', 'Emergency communication system', 'Heated front seats', 'Remote keyless entry', 'Parking sensors', 'Heated steering wheel', 'Perimeter approach lights'),
('11369', 'Nissan Sentra', '1.8L I-4 Cyl', 'White', '29 mpg City 37 mpg Hwy', 39886, 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Fully automatic headlights'),
('11889', 'Hyundai Accent', '1.6L I-4 Cyl', 'Pearl', '28 mpg City 38 mpg Hwy', 32586, 'Wireless phone connectivity', 'Security system', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels'),
('13567', 'Kia Rio S', '1.6L I-4 Cyl', 'Silver', '28 mpg City 37 mpg Hwy', 10515, 'Emergency communication system', 'Parking sensors', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Wireless phone connectivity'),
('12449', 'Chevrolet Cruze', '1.4L I-4 Cyl', 'Black', '29 mpg City 40 mpg Hwy', 14162, 'Exterior parking camera rear', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Security system', 'Remote keyless entry', 'Alloy wheels'),
('14000', 'Kia Soul', '2.0L I-4 Cyl', 'Shadow', '25 mpg City 30 mpg Hwy', 39886, 'Automatic temperature control', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Rearwindow wiper'),
('12569', 'Ford Focus', '2.0L I-4 Cyl', 'Charcoal', '26 mpg City 36 mpg Hwy', 35286, 'Parking sensors', 'Front dual zone A/C', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Emergency communication system'),
('12609', 'Kia Forte', '2.0L I-4 Cyl', 'Red', '29 mpg City 38 mpg Hwy', 22389, 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels')


const fakeCar = () => {
    const car = {}
    car.name = getDetail(name)
    car.cost = getDetail(price)
    car.engine = getDetail(engine)
    car.color = getDetail(color)
    car.mpg = getDetail(mpg)
    car.mileage = getDetail(mileage)
    car.feature_one = getDetail(feature)
    car.feature_two = getDetail(feature)
    car.feature_three = getDetail(feature)
    car.feature_four = getDetail(feature)
    car.feature_five = getDetail(feature)
    car.feature_six = getDetail(feature)

    return car;
}



async function createCars (num) {
    const batchsize = 100000
    const numOfBatches = num/batchsize
    for(let i = 0; i< numOfBatches; i++){
        const cars = carBatch(batchsize)
        await addManyCars(cars)
        .then(results => console.log(results))
    }

// const cars = await carBatch(num)


}

const carBatch = (num) => {   
const cars = [] 
    for(let i = 0; i< num; i++){
    let newCar = fakeCar();
    newCar.id = id;
    cars.push(newCar)
    id++;
    }   
return cars

}
// *****************************
// create cars mongodb
// *****************************
let count = 0; 
while (count < 5) {
count ++
    createCars(2000000) 
    // createCars(2) 
}
 


module.exports = {fakeCar, carBatch}

