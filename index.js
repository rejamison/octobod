const makePwmDriver = require('adafruit-i2c-pwm-driver')// use this one in real use case
const sleep = require('sleep')

const pwm = makePwmDriver({address: 0x40, device: '/dev/i2c-1', debug: false})

// Configure min and max servo pulse lengths
const servo_min = 150 // Min pulse length out of 4096
const servo_max = 600 // Max pulse length out of 4096

pwm.setPWMFreq(50)

while(true) {
  pwm.setPWM(0, 0, servo_min);
  sleep.sleep(1);
  pwm.setPWM(0, 0, servo_max);
  sleep.sleep(1);
}
