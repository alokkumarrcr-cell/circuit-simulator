const parts = [
  { id: "esp32-wroom", category: "boards", name: "ESP32-WROOM-32", label: "ESP32", desc: "Wi-Fi/BLE MCU, 3.3V logic", color: "#0b766e", pins: ["3V3", "RST", "GPIO4", "GPIO5", "GPIO6", "GPIO7", "GPIO15", "GPIO16", "GPIO17", "GPIO18", "GPIO8", "GPIO3", "GPIO46", "GPIO9", "GPIO10", "GPIO11", "GPIO12", "GPIO13", "GPIO14", "5V", "GND", "GND", "GPIO21", "GPIO47", "GPIO48", "GPIO45", "GPIO0", "GPIO35", "GPIO36", "GPIO37", "GPIO38", "GPIO39", "GPIO40", "GPIO42", "GPIO2", "GPIO1", "RX", "TX", "GND"] },
  { id: "esp32-wroom-32-devkit", category: "boards", name: "ESP32-WROOM-32 DevKit", label: "WROOM", desc: "Classic ESP32 WROOM 32 development board", color: "#0a6761", pins: ["3V3", "EN", "GPIO36", "GPIO39", "GPIO34", "GPIO35", "GPIO32", "GPIO33", "GPIO25", "GPIO26", "GPIO27", "GPIO14", "GPIO12", "GND", "GPIO13", "VIN", "GPIO23", "GPIO22", "TX0", "RX0", "GPIO21", "GND", "GPIO19", "GPIO18", "GPIO5", "GPIO17", "GPIO16", "GPIO4", "GPIO0", "GPIO2", "GPIO15", "GND"] },
  { id: "arduino-uno", category: "boards", name: "Arduino Uno R3", label: "UNO", desc: "ATmega328P dev board", color: "#1c83a7", pins: ["5V", "3V3", "GND", "A0", "D2", "D3", "D9", "D13"] },
  { id: "arduino-mega", category: "boards", name: "Arduino Mega 2560", label: "MEGA", desc: "High-pin-count Arduino", color: "#176e98", pins: ["5V", "3V3", "GND", "SDA", "SCL", "RX1", "TX1", "D44 PWM"] },
  { id: "arduino-nano", category: "boards", name: "Arduino Nano", label: "NANO", desc: "Compact Arduino board", color: "#2368a2", pins: ["5V", "GND", "A4 SDA", "A5 SCL", "D2", "D3", "D9"] },
  { id: "arduino-leonardo", category: "boards", name: "Arduino Leonardo", label: "LEO", desc: "USB HID capable Arduino", color: "#207797", pins: ["5V", "3V3", "GND", "SDA", "SCL", "D2", "D3", "D13"] },
  { id: "arduino-pro-mini", category: "boards", name: "Arduino Pro Mini", label: "PRO", desc: "Small 3.3V or 5V board", color: "#2e78a3", pins: ["RAW", "VCC", "GND", "A4 SDA", "A5 SCL", "D2", "D9"] },
  { id: "raspberry-pi-5", category: "boards", name: "Raspberry Pi 5", label: "RPI5", desc: "Linux SBC with 40-pin GPIO", color: "#b5123d", pins: ["5V", "3V3", "GND", "GPIO2 SDA", "GPIO3 SCL", "GPIO14 TXD", "GPIO15 RXD"] },
  { id: "raspberry-pi-4", category: "boards", name: "Raspberry Pi 4 Model B", label: "RPI4", desc: "40-pin Linux SBC", color: "#a91038", pins: ["5V", "3V3", "GND", "GPIO2 SDA", "GPIO3 SCL", "GPIO14 TXD", "GPIO15 RXD"] },
  { id: "raspberry-pi-3", category: "boards", name: "Raspberry Pi 3 B+", label: "RPI3", desc: "Wi-Fi Linux SBC", color: "#a11942", pins: ["5V", "3V3", "GND", "GPIO2 SDA", "GPIO3 SCL", "GPIO14 TXD", "GPIO15 RXD"] },
  { id: "raspberry-pi-zero", category: "boards", name: "Raspberry Pi Zero 2 W", label: "ZERO", desc: "Tiny Wi-Fi Linux SBC", color: "#8c1b3e", pins: ["5V", "3V3", "GND", "GPIO2 SDA", "GPIO3 SCL", "GPIO14 TXD", "GPIO15 RXD"] },
  { id: "raspberry-pi-pico", category: "boards", name: "Raspberry Pi Pico", label: "PICO", desc: "RP2040 microcontroller", color: "#7c1f42", pins: ["VBUS", "3V3", "GND", "GP0", "GP1", "GP4 SDA", "GP5 SCL"] },
  { id: "esp32-s3", category: "boards", name: "ESP32-S3 DevKit", label: "S3", desc: "USB, Wi-Fi/BLE, AI-friendly MCU", color: "#0d655f", pins: ["3V3", "GND", "GPIO8 SDA", "GPIO9 SCL", "GPIO17 TX", "GPIO18 RX"] },
  { id: "esp32-c3", category: "boards", name: "ESP32-C3 DevKit", label: "C3", desc: "RISC-V Wi-Fi/BLE MCU", color: "#13726b", pins: ["3V3", "GND", "GPIO4 SDA", "GPIO5 SCL", "GPIO20 RX", "GPIO21 TX"] },
  { id: "esp32-c6", category: "boards", name: "ESP32-C6 DevKit", label: "C6", desc: "Wi-Fi 6, BLE, Thread/Zigbee", color: "#166963", pins: ["3V3", "GND", "GPIO6 SDA", "GPIO7 SCL", "GPIO16 RX", "GPIO17 TX"] },
  { id: "esp32-cam", category: "boards", name: "ESP32-CAM", label: "CAM", desc: "ESP32 with camera module", color: "#205f58", pins: ["5V", "3V3", "GND", "U0R", "U0T", "GPIO0", "GPIO4"] },
  { id: "esp8266-nodemcu", category: "boards", name: "NodeMCU ESP8266", label: "8266", desc: "Wi-Fi microcontroller board", color: "#245e75", pins: ["3V3", "GND", "D1 SCL", "D2 SDA", "D5 SCK", "D6 MISO", "D7 MOSI", "D8 CS", "A0", "VIN"] },
  { id: "stm32-bluepill", category: "boards", name: "STM32 Blue Pill", label: "STM32", desc: "ARM Cortex-M3 development board", color: "#315f9d", pins: ["3V3", "5V", "GND", "PA9 TX", "PA10 RX", "PB6 SCL", "PB7 SDA", "PA0", "PA1"] },
  { id: "max30102", category: "sensors", name: "MAX30102", label: "HR", desc: "Pulse oximeter and heart rate", color: "#c94338", pins: ["VIN", "GND", "SDA", "SCL", "INT"] },
  { id: "max86150", category: "sensors", name: "MAX86150", label: "ECG", desc: "PPG and ECG biosensor", color: "#bd3c55", pins: ["VIN", "GND", "SDA", "SCL", "INT"] },
  { id: "mpu6050", category: "sensors", name: "MPU6050", label: "IMU", desc: "6-axis gyro accelerometer", color: "#7656bf", pins: ["VCC", "GND", "SDA", "SCL", "INT"] },
  { id: "neo6m", category: "sensors", name: "NEO-6M GPS", label: "GPS", desc: "UART GPS module", color: "#3a7a3d", pins: ["VCC", "GND", "TX", "RX", "PPS"] },
  { id: "dht22", category: "sensors", name: "DHT22", label: "T/RH", desc: "Temperature humidity", color: "#d07b25", pins: ["VCC", "DATA", "NC", "GND"] },
  { id: "ultrasonic", category: "sensors", name: "HC-SR04", label: "SONAR", desc: "Ultrasonic distance", color: "#2f8ca3", pins: ["VCC", "TRIG", "ECHO", "GND"] },
  { id: "bmp280", category: "sensors", name: "BMP280", label: "BARO", desc: "Pressure and temperature", color: "#2d7f8f", pins: ["VIN", "GND", "SDA", "SCL"] },
  { id: "mq2", category: "sensors", name: "MQ-2 Gas Sensor", label: "GAS", desc: "Smoke and LPG sensing", color: "#9d5b2f", pins: ["VCC", "GND", "AO", "DO"] },
  { id: "pir", category: "sensors", name: "PIR Motion Sensor", label: "PIR", desc: "Passive infrared motion", color: "#497a36", pins: ["VCC", "OUT", "GND"] },
  { id: "ldr", category: "sensors", name: "LDR Light Sensor", label: "LDR", desc: "Photoresistor divider", color: "#b58b24", pins: ["VCC", "OUT", "GND"] },
  { id: "soil", category: "sensors", name: "Soil Moisture Sensor", label: "SOIL", desc: "Analog moisture probe", color: "#7f6a35", pins: ["VCC", "GND", "AO", "DO"] },
  { id: "oled", category: "sensors", name: "OLED 0.96 Display", label: "OLED", desc: "I2C status display", color: "#303b8f", pins: ["VCC", "GND", "SDA", "SCL"] },
  { id: "bme280", category: "sensors", name: "BME280", label: "ENV", desc: "Temperature, humidity, pressure", color: "#277f86", pins: ["VIN", "GND", "SDA", "SCL"] },
  { id: "ds18b20", category: "sensors", name: "DS18B20", label: "TEMP", desc: "1-Wire temperature probe", color: "#406f93", pins: ["VCC", "DATA", "GND"] },
  { id: "mlx90614", category: "sensors", name: "MLX90614 IR Temp", label: "IR", desc: "Contactless temperature sensor", color: "#9b3f6b", pins: ["VIN", "GND", "SDA", "SCL"] },
  { id: "ad8232", category: "sensors", name: "AD8232 ECG", label: "ECG", desc: "Heart ECG front-end module", color: "#ba3848", pins: ["3.3V", "GND", "OUTPUT", "LO+", "LO-"] },
  { id: "loadcell-hx711", category: "sensors", name: "HX711 Load Cell", label: "LOAD", desc: "Weight sensor amplifier", color: "#5967a8", pins: ["VCC", "GND", "DT", "SCK", "E+", "E-"] },
  { id: "rfid-rc522", category: "sensors", name: "RFID RC522", label: "RFID", desc: "13.56 MHz SPI RFID reader", color: "#3f64a7", pins: ["3V3", "GND", "SDA", "SCK", "MOSI", "MISO", "RST"] },
  { id: "relay-sensor", category: "sensors", name: "Relay Module", label: "RELAY", desc: "Isolated digital switch module", color: "#2a7b5d", pins: ["VCC", "GND", "IN", "COM", "NO", "NC"] },
  { id: "tp4056", category: "power", name: "TP4056 Charger", label: "LiPo", desc: "1-cell Li-Po charge module", color: "#2a7cba", pins: ["IN+", "IN-", "B+", "B-", "OUT+", "OUT-"] },
  { id: "lipo", category: "power", name: "Li-Po Battery", label: "3.7V", desc: "Rechargeable cell", color: "#4e5963", pins: ["+", "-"] },
  { id: "breadboard", category: "power", name: "Breadboard", label: "BB", desc: "Solderless prototyping", color: "#8c9398", pins: ["+", "-", "A", "B", "C", "D"] },
  { id: "buck-converter", category: "power", name: "LM2596 Buck Converter", label: "BUCK", desc: "Adjustable step-down power", color: "#3474a8", pins: ["IN+", "IN-", "OUT+", "OUT-"] },
  { id: "boost-converter", category: "power", name: "MT3608 Boost Converter", label: "BOOST", desc: "Adjustable step-up power", color: "#426cab", pins: ["IN+", "IN-", "OUT+", "OUT-"] },
  { id: "solar-panel", category: "power", name: "Solar Panel", label: "SOLAR", desc: "Small photovoltaic source", color: "#273d5e", pins: ["+", "-"] },
  { id: "power-switch", category: "power", name: "Slide Power Switch", label: "SW", desc: "Inline power switch", color: "#424b52", pins: ["IN", "OUT"] },
  { id: "sos-button", category: "basic", name: "SOS Button", label: "SOS", desc: "Momentary emergency input", color: "#d22d28", pins: ["IN", "GND"] },
  { id: "buzzer", category: "basic", name: "Buzzer", label: "BZ", desc: "Piezo buzzer output", color: "#111f2b", pins: ["+", "-"] },
  { id: "vibration", category: "basic", name: "Vibration Motor", label: "M", desc: "Use transistor driver", color: "#696f75", pins: ["+", "-"] },
  { id: "npn", category: "basic", name: "NPN Transistor", label: "NPN", desc: "Motor or buzzer driver", color: "#29333c", pins: ["C", "B", "E"] },
  { id: "led", category: "basic", name: "LED", label: "LED", desc: "Indicator diode", color: "#e3a11b", pins: ["A", "K"] },
  { id: "resistor", category: "basic", name: "Resistor", label: "R", desc: "Current limiter or pull-up", color: "#8b6237", pins: ["1", "2"] },
  { id: "capacitor", category: "basic", name: "Capacitor", label: "CAP", desc: "Decoupling or timing capacitor", color: "#566d92", pins: ["+", "-"] },
  { id: "diode", category: "basic", name: "Diode", label: "D", desc: "Flyback or polarity diode", color: "#41464c", pins: ["A", "K"] },
  { id: "mosfet", category: "basic", name: "N-MOSFET", label: "FET", desc: "Logic-level load switch", color: "#26353a", pins: ["D", "G", "S"] },
  { id: "servo", category: "basic", name: "Servo Motor", label: "SERVO", desc: "PWM position actuator", color: "#5d6580", pins: ["VCC", "GND", "PWM"] },
  { id: "dc-motor", category: "basic", name: "DC Motor", label: "DCM", desc: "Brushed motor load", color: "#6b6f75", pins: ["+", "-"] },
  { id: "stepper", category: "basic", name: "Stepper Motor", label: "STEP", desc: "4-wire stepper actuator", color: "#6f6375", pins: ["A+", "A-", "B+", "B-"] },
  { id: "motor-driver", category: "basic", name: "L298N Motor Driver", label: "L298N", desc: "Dual H-bridge motor driver", color: "#a84235", pins: ["12V", "GND", "5V", "IN1", "IN2", "IN3", "IN4", "OUT1", "OUT2"] },
  { id: "jumper", category: "basic", name: "Jumper Wires", label: "WIRE", desc: "Male-to-male wiring", color: "#3581d8", pins: ["A", "B"] }
];

const presets = {
  esp32Health: `// ESP32-WROOM-32 wearable safety prototype
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  pinMode(25, OUTPUT); // Buzzer through transistor if needed
  pinMode(26, OUTPUT); // Vibration motor transistor base
  pinMode(27, INPUT_PULLUP); // SOS Button
}

void loop() {
  MAX30102.readHeartRate();
  MPU6050.readAcceleration();
  GPS.readLocation();

  if (digitalRead(27) == LOW) {
    Serial.print("SOS pressed, sending GPS alert");
    digitalWrite(25, HIGH); // Buzzer
    digitalWrite(26, HIGH); // Motor
  } else {
    digitalWrite(25, LOW);
    digitalWrite(26, LOW);
  }
}`,
  arduinoBlink: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH); // LED on
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}`,
  raspberryPython: `# Raspberry Pi GPIO-style pseudo simulation
from time import sleep

while True:
    MAX30102.read()
    MPU6050.read()
    GPS.read()
    if SOS.is_pressed():
        Buzzer.on()
        Motor.on()
        print("Emergency alert with live location")
    sleep(1)`,
  iotWeather: `// ESP32-WROOM-32 IoT environment monitor
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  pinMode(2, OUTPUT);    // Status LED
  pinMode(25, OUTPUT);   // Buzzer alert
}

void loop() {
  BME280.readTemperature();
  BME280.readHumidity();
  BMP280.readPressure();
  OLED.print("Weather online");

  if (temperature > 38) {
    digitalWrite(2, HIGH);
    digitalWrite(25, HIGH);
    Serial.print("High temperature alert");
  }
}`,
  robotDriver: `// ESP32 robot driver simulation
void setup() {
  Serial.begin(115200);
  pinMode(32, OUTPUT); // L298N IN1
  pinMode(33, OUTPUT); // L298N IN2
  pinMode(25, OUTPUT); // Servo PWM
  pinMode(26, OUTPUT); // Buzzer
}

void loop() {
  HC_SR04.readDistance();
  MPU6050.readAcceleration();
  Servo.write(90);
  Motor.forward();
  digitalWrite(32, HIGH);
  digitalWrite(33, LOW);
  Serial.print("Robot running");
}`,
  blank: ""
};

const board = document.querySelector("#circuitBoard");
const wireLayer = document.querySelector("#wireLayer");
const partsList = document.querySelector("#partsList");
const inspector = document.querySelector("#inspector");
const signals = document.querySelector("#signals");
const serialMonitor = document.querySelector("#serialMonitor");
const selectedPart = document.querySelector("#selectedPart");
const simState = document.querySelector("#simState");
const designCount = document.querySelector("#designCount");
const wireCount = document.querySelector("#wireCount");
const codeEditor = document.querySelector("#codeEditor");
const codePreset = document.querySelector("#codePreset");
const partSearch = document.querySelector("#partSearch");
const compileState = document.querySelector("#compileState");
const detectedBoard = document.querySelector("#detectedBoard");
const detectedHooks = document.querySelector("#detectedHooks");
const detectedPins = document.querySelector("#detectedPins");
const codeConsole = document.querySelector("#codeConsole");

let activeCategory = "boards";
let activeTool = "select";
let placed = [];
let selectedId = null;
let wireStart = null;
let runTimer = null;
let manualWires = [];
let previewWire = null;

function renderParts() {
  const query = partSearch.value.trim().toLowerCase();
  partsList.innerHTML = "";
  parts
    .filter(part => query || part.category === activeCategory)
    .filter(part => !query || `${part.name} ${part.desc}`.toLowerCase().includes(query))
    .forEach(part => {
      const btn = document.createElement("button");
      btn.className = "part";
      btn.innerHTML = `<span class="part-icon" style="background:${part.color}">${part.label}</span><span>${part.name}<small>${part.desc}</small></span>`;
      btn.addEventListener("click", () => addComponent(part));
      partsList.appendChild(btn);
    });
}

function addComponent(part, x, y) {
  const count = placed.filter(item => item.id === part.id).length + 1;
  const item = {
    ...part,
    instanceId: `${part.id}-${Date.now()}-${count}`,
    x: x ?? 80 + (placed.length % 5) * 170,
    y: y ?? 70 + Math.floor(placed.length / 5) * 145,
    value: "Idle"
  };
  placed.push(item);
  drawComponent(item);
  selectComponent(item.instanceId);
  updateDesignCount();
  drawReferenceWires();
}

function drawComponent(item) {
  const el = document.createElement("div");
  el.className = "component";
  el.dataset.instanceId = item.instanceId;
  el.dataset.id = item.id;
  el.dataset.kind = item.category;
  el.style.left = `${item.x}px`;
  el.style.top = `${item.y}px`;
  el.innerHTML = `
    <div class="component-head" style="background:${item.color}">${item.name}</div>
    <div class="component-body">
      ${componentVisual(item)}
      ${item.id === "esp32-wroom" ? "" : `<div class="pins">${item.pins.map(pin => pinMarkup(item, pin)).join("")}</div>`}
    </div>
  `;
  el.addEventListener("pointerdown", event => beginDrag(event, item.instanceId));
  el.addEventListener("click", event => {
    event.stopPropagation();
    if (activeTool === "wire") handleWireClick(item.instanceId);
    selectComponent(item.instanceId);
  });
  board.appendChild(el);
}

function componentVisual(item) {
  if (item.id === "esp32-wroom") {
    return esp32RealisticVisual(item);
  }
  if (item.category === "boards") {
    return `<div class="visual-board" style="background:linear-gradient(180deg, ${item.color}, #102927)"><span class="module-chip"></span><span class="antenna"></span><span class="board-silk">${item.label}</span></div>`;
  }
  if (item.category === "sensors") {
    return `<div class="visual-sensor" style="background:linear-gradient(180deg, ${item.color}, #22304f)"></div>`;
  }
  if (item.category === "power") {
    return `<div class="visual-power" style="background:linear-gradient(180deg, ${item.color}, #24323d)"></div>`;
  }
  return `<div class="visual-basic" style="--warn:${item.color}"></div>`;
}

function pinMarkup(item, pin) {
  return `<button class="pin" data-pin="${pin}" title="${item.name} ${pin}" aria-label="${item.name} ${pin}"></button>`;
}

function esp32RealisticVisual(item) {
  const leftPins = item.pins.slice(0, 20);
  const rightPins = item.pins.slice(20);
  return `
    <div class="esp32-real">
      <div class="esp32-antenna"></div>
      <div class="esp32-module">
        <strong>ESPRESSIF</strong>
        <span>ESP32-S3-WROOM-1</span>
        <small>FCC ID: 2AC7Z-ESPS3WROOM1</small>
      </div>
      <div class="esp32-chip main"></div>
      <div class="esp32-chip small"></div>
      <div class="esp32-led"></div>
      <div class="esp32-button boot"><span>BOOT</span></div>
      <div class="esp32-button reset"><span>RESET</span></div>
      <div class="esp32-usb uart"><span>UART</span></div>
      <div class="esp32-usb usb"><span>USB</span></div>
      <div class="esp32-pins left">${leftPins.map(pin => `<label><span>${pinLabel(pin)}</span>${pinMarkup(item, pin)}</label>`).join("")}</div>
      <div class="esp32-pins right">${rightPins.map(pin => `<label>${pinMarkup(item, pin)}<span>${pinLabel(pin)}</span></label>`).join("")}</div>
    </div>`;
}

function pinLabel(pin) {
  return pin.replace("GPIO", "");
}

function beginDrag(event, instanceId) {
  if (event.target.closest(".pin")) {
    startLiveWire(event, instanceId, event.target.closest(".pin").dataset.pin);
    return;
  }
  if (activeTool !== "select") return;
  const item = placed.find(part => part.instanceId === instanceId);
  selectComponent(instanceId);
  const startX = event.clientX;
  const startY = event.clientY;
  const originX = item.x;
  const originY = item.y;
  event.currentTarget.setPointerCapture(event.pointerId);
  const move = moveEvent => {
    item.x = Math.max(0, Math.min(990, originX + moveEvent.clientX - startX));
    item.y = Math.max(0, Math.min(660, originY + moveEvent.clientY - startY));
    const el = board.querySelector(`[data-instance-id="${instanceId}"]`);
    el.style.left = `${item.x}px`;
    el.style.top = `${item.y}px`;
    drawReferenceWires();
  };
  const up = () => {
    event.currentTarget.removeEventListener("pointermove", move);
    event.currentTarget.removeEventListener("pointerup", up);
  };
  event.currentTarget.addEventListener("pointermove", move);
  event.currentTarget.addEventListener("pointerup", up);
}

function selectComponent(instanceId) {
  selectedId = instanceId;
  document.querySelectorAll(".component").forEach(el => el.classList.toggle("selected", el.dataset.instanceId === instanceId));
  const item = placed.find(part => part.instanceId === instanceId);
  selectedPart.textContent = item ? item.name : "No part selected";
  renderInspector(item);
}

function renderInspector(item) {
  if (!item) {
    inspector.innerHTML = "<p>Select a component to view pins, supply notes, and live values.</p>";
    return;
  }
  const supply = item.pins.some(pin => /3V3|VCC|VIN|5V|VBUS|OUT/.test(pin)) ? "Check voltage level before connecting." : "Passive or GPIO connected part.";
  const connected = manualWires
    .filter(wire => wire.from.instanceId === item.instanceId || wire.to.instanceId === item.instanceId)
    .map(wire => {
      const isFrom = wire.from.instanceId === item.instanceId;
      const local = isFrom ? wire.from : wire.to;
      const remote = isFrom ? wire.to : wire.from;
      const remotePart = placed.find(part => part.instanceId === remote.instanceId);
      return `${local.pin} -> ${remotePart?.name || "Unknown"} ${remote.pin}`;
    });
  inspector.innerHTML = `
    <p><strong>${item.name}</strong></p>
    <p>${item.desc}</p>
    <p><strong>State:</strong> ${item.value}</p>
    <p><strong>Note:</strong> ${supply}</p>
    <p><strong>Connections:</strong> ${connected.length ? connected.join(", ") : "None"}</p>
    <div>${item.pins.map(pin => `<div class="pin-row"><span>${pin}</span><span>${guessPinRole(pin)}</span></div>`).join("")}</div>
  `;
}

function guessPinRole(pin) {
  if (/GND|-|E$/.test(pin)) return "Ground";
  if (/3V3|5V|VCC|VIN|VBUS|OUT\+|B\+|\+/.test(pin)) return "Power";
  if (/SDA|SCL/.test(pin)) return "I2C";
  if (/TX|RX/.test(pin)) return "UART";
  if (/GPIO|D\d|GP\d|A\d|DATA|TRIG|ECHO|INT/.test(pin)) return "Signal";
  return "Node";
}

function handleWireClick(instanceId) {
  if (!wireStart) {
    wireStart = instanceId;
    simState.textContent = "Choose wire endpoint";
    return;
  }
  if (wireStart !== instanceId) {
    const start = placed.find(part => part.instanceId === wireStart);
    const end = placed.find(part => part.instanceId === instanceId);
    manualWires.push({ from: { instanceId: wireStart, pin: "body" }, to: { instanceId, pin: "body" }, color: nextWireColor() });
    updateWireCount();
    serialMonitor.textContent += `\nWire: ${start.name} connected to ${end.name}`;
  }
  wireStart = null;
  simState.textContent = "Wire placed";
  drawReferenceWires();
}

function drawReferenceWires() {
  wireLayer.innerHTML = "";
  manualWires.forEach(wire => drawWire(wire.from, wire.to, wire.color || "#2d6fd3", 4, 0, true));
  if (previewWire) wireLayer.appendChild(previewWire);
}

function drawWire(fromRef, toRef, color, width, offset = 0, animated = false) {
  const fromPoint = getConnectionPoint(fromRef);
  const toPoint = getConnectionPoint(toRef);
  if (!fromPoint || !toPoint) return;
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const x1 = fromPoint.x;
  const y1 = fromPoint.y;
  const x2 = toPoint.x;
  const y2 = toPoint.y;
  const mid = (x1 + x2) / 2;
  line.setAttribute("d", `M ${x1} ${y1} C ${mid} ${y1 + offset * 4}, ${mid} ${y2 - offset * 4}, ${x2} ${y2}`);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("opacity", "0.82");
  if (animated) line.classList.add("live-wire");
  wireLayer.appendChild(line);
}

function getConnectionPoint(ref) {
  const item = placed.find(part => part.instanceId === ref.instanceId);
  if (!item) return null;
  const boardRect = board.getBoundingClientRect();
  const pin = board.querySelector(`[data-instance-id="${ref.instanceId}"] .pin[data-pin="${cssEscape(ref.pin)}"]`);
  if (pin) {
    const rect = pin.getBoundingClientRect();
    return { x: rect.left - boardRect.left + rect.width / 2, y: rect.top - boardRect.top + rect.height / 2 };
  }
  return { x: item.x + 120, y: item.y + 58 };
}

function cssEscape(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function startLiveWire(event, instanceId, pin) {
  event.stopPropagation();
  event.preventDefault();
  wireStart = { instanceId, pin };
  const start = getConnectionPoint(wireStart);
  previewWire = document.createElementNS("http://www.w3.org/2000/svg", "path");
  previewWire.classList.add("preview-wire");
  previewWire.setAttribute("stroke", nextWireColor());
  previewWire.setAttribute("stroke-width", "4");
  previewWire.setAttribute("fill", "none");
  previewWire.setAttribute("stroke-linecap", "round");
  wireLayer.appendChild(previewWire);
  simState.textContent = `Wiring ${pin}`;

  const move = moveEvent => {
    const point = pointerToBoard(moveEvent);
    const mid = (start.x + point.x) / 2;
    previewWire.setAttribute("d", `M ${start.x} ${start.y} C ${mid} ${start.y}, ${mid} ${point.y}, ${point.x} ${point.y}`);
  };
  const up = upEvent => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    const targetPin = document.elementFromPoint(upEvent.clientX, upEvent.clientY)?.closest(".pin");
    const targetComponent = targetPin?.closest(".component");
    if (targetPin && targetComponent && targetComponent.dataset.instanceId !== instanceId) {
      const wire = {
        from: wireStart,
        to: { instanceId: targetComponent.dataset.instanceId, pin: targetPin.dataset.pin },
        color: previewWire.getAttribute("stroke")
      };
      manualWires.push(wire);
      updateWireCount();
      const a = placed.find(part => part.instanceId === wire.from.instanceId);
      const b = placed.find(part => part.instanceId === wire.to.instanceId);
      serialMonitor.textContent += `\nWire: ${a.name} ${wire.from.pin} -> ${b.name} ${wire.to.pin}`;
      simState.textContent = "Live wire connected";
    } else {
      simState.textContent = "Wire cancelled";
    }
    previewWire.remove();
    previewWire = null;
    wireStart = null;
    drawReferenceWires();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
  move(event);
}

function pointerToBoard(event) {
  const rect = board.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function nextWireColor() {
  const colors = ["#2d6fd3", "#d13f33", "#16945f", "#d7892e", "#7b4bc2", "#202a30"];
  return colors[manualWires.length % colors.length];
}

function runSimulation() {
  clearInterval(runTimer);
  const code = codeEditor.value;
  const analysis = analyzeCode(code);
  renderCodeDiagnostics(analysis);
  const has = token => new RegExp(token, "i").test(code);
  let tick = 0;
  simState.textContent = "Running";
  document.querySelectorAll(".component").forEach(el => el.classList.add("running"));
  runTimer = setInterval(() => {
    tick += 1;
    placed.forEach(part => {
      if (part.id === "max30102" || part.id === "max86150") part.value = has("MAX30102|MAX86150|heart|pulse") ? `${72 + tick % 7} bpm, SpO2 ${97 + tick % 2}%` : "Idle";
      else if (part.id === "mpu6050") part.value = has("MPU6050|accel|gyro") ? `ax ${(0.12 * tick).toFixed(2)}g, tilt ${tick % 38}°` : "Idle";
      else if (part.id === "neo6m") part.value = has("GPS|NEO|location") ? `12.971${tick % 9}, 77.594${tick % 8}` : "No fix";
      else if (part.id === "sos-button") part.value = has("SOS|digitalRead|is_pressed") ? (tick % 4 === 0 ? "Pressed" : "Released") : "Released";
      else if (part.id === "buzzer") part.value = has("Buzzer|buzzer|digitalWrite\\(25|tone") ? (tick % 2 ? "Beeping" : "Silent") : "Silent";
      else if (part.id === "vibration") part.value = has("Motor|motor|digitalWrite\\(26|vibration") ? (tick % 2 ? "Vibrating" : "Off") : "Off";
      else if (part.id === "led") part.value = has("LED|digitalWrite|pinMode") ? (tick % 2 ? "On" : "Off") : "Off";
      else if (part.id === "bme280" || part.id === "bmp280") part.value = has("BME280|BMP280|temperature|pressure|humidity") ? `${27 + tick % 4} C, ${58 + tick % 6}% RH` : "Idle";
      else if (part.id === "oled") part.value = has("OLED|display|print") ? "Showing status text" : "Blank";
      else if (part.id === "servo") part.value = has("Servo|servo|PWM|write") ? `${70 + tick % 40} deg` : "Holding";
      else if (part.id === "motor-driver" || part.id === "dc-motor" || part.id === "stepper") part.value = has("Motor|motor|L298N|forward|digitalWrite") ? (tick % 2 ? "Driving" : "Coasting") : "Off";
      else if (part.id === "rfid-rc522") part.value = has("RFID|RC522|SPI") ? "Card UID detected" : "Waiting";
      else if (part.id === "relay-sensor") part.value = has("Relay|relay|digitalWrite") ? (tick % 2 ? "Closed" : "Open") : "Open";
      else if (part.category === "power") part.value = "Supplying stable power";
      else part.value = has(part.label) || has(part.name.split(" ")[0]) ? "Active" : "Ready";
    });
    renderSignals();
    if (selectedId) renderInspector(placed.find(part => part.instanceId === selectedId));
    serialMonitor.textContent = buildSerial(tick);
  }, 750);
}

function analyzeCode(code) {
  const hooks = [
    "ESP32", "ESP32-WROOM-32", "MAX30102", "MAX86150", "MPU6050", "NEO-6M", "GPS",
    "BME280", "BMP280", "OLED", "DHT22", "HC_SR04", "RFID", "RC522", "Relay",
    "Servo", "Motor", "Buzzer", "LED", "SOS", "TP4056", "Serial.print", "digitalWrite",
    "analogRead", "pinMode", "Wire.begin"
  ].filter(hook => new RegExp(hook.replace("-", "\\-").replace(".", "\\."), "i").test(code));
  const pins = Array.from(new Set((code.match(/\b(?:GPIO)?\d{1,2}\b/g) || []).map(pin => pin.replace(/^GPIO/i, "GPIO"))));
  const board = /raspberry|gpiozero|python/i.test(code)
    ? "Raspberry Pi"
    : /arduino|ATmega|void setup/i.test(code) && !/ESP32|WROOM/i.test(code)
      ? "Arduino"
      : /ESP32|WROOM|Wire\.begin\(21/i.test(code)
        ? "ESP32-WROOM-32"
        : "Pseudo MCU";
  const errors = [];
  if (!/setup|while|loop|void|def|pinMode|digitalWrite|Serial|print/i.test(code.trim())) {
    errors.push("No recognizable firmware structure or simulation calls found.");
  }
  if (/MAX30102|MPU6050|BME280|BMP280|OLED/i.test(code) && !/Wire\.begin|I2C|SDA|SCL/i.test(code)) {
    errors.push("I2C device detected. Add Wire.begin(SDA, SCL) or connect SDA/SCL wires.");
  }
  if (/Motor|vibration|L298N/i.test(code) && !/transistor|MOSFET|L298N|driver|IN1/i.test(code)) {
    errors.push("Motor output detected. Use a transistor, MOSFET, or motor driver in the circuit.");
  }
  return { hooks, pins, board, errors };
}

function renderCodeDiagnostics(analysis) {
  compileState.textContent = analysis.errors.length ? "Warnings" : "Compiled";
  detectedBoard.textContent = analysis.board;
  detectedHooks.textContent = `${analysis.hooks.length} hooks`;
  detectedPins.textContent = `${analysis.pins.length} pins`;
  const lines = [
    `Board: ${analysis.board}`,
    `Hooks: ${analysis.hooks.length ? analysis.hooks.join(", ") : "none"}`,
    `Pins: ${analysis.pins.length ? analysis.pins.join(", ") : "none"}`,
    analysis.errors.length ? `Warnings:\n- ${analysis.errors.join("\n- ")}` : "No blocking code issues detected."
  ];
  codeConsole.textContent = lines.join("\n");
}

function renderSignals() {
  signals.innerHTML = placed.length
    ? placed.map(part => `<div class="signal-row"><b>${part.label}</b><span>${part.value}</span></div>`).join("")
    : "<p>Add parts to see live values.</p>";
}

function updateDesignCount() {
  designCount.textContent = `${placed.length} part${placed.length === 1 ? "" : "s"}`;
}

function updateWireCount() {
  wireCount.textContent = `${manualWires.length} wire${manualWires.length === 1 ? "" : "s"}`;
}

function clearWorkspace() {
  clearInterval(runTimer);
  placed = [];
  manualWires = [];
  selectedId = null;
  board.innerHTML = "";
  wireLayer.innerHTML = "";
  serialMonitor.textContent = "Ready.";
  simState.textContent = "Idle";
  selectedPart.textContent = "No part selected";
  renderSignals();
  renderInspector(null);
  updateDesignCount();
  updateWireCount();
}

function buildSerial(tick) {
  const lines = [`[${tick}] simulation tick`, `Live wires: ${manualWires.length}`, "I2C bus scan: 0x57 MAX30102, 0x68 MPU6050"];
  if (placed.some(part => part.id === "neo6m")) lines.push("GPS: fix=3D sats=8 hdop=1.1");
  if (placed.some(part => part.id === "sos-button") && tick % 4 === 0) lines.push("SOS pressed: buzzer and vibration motor enabled");
  if (/Serial\.print|print\(/i.test(codeEditor.value)) lines.push("Serial output detected from code page");
  if (/BME280|BMP280|temperature/i.test(codeEditor.value)) lines.push("ENV: temp=29C humidity=62% pressure=1008hPa");
  if (/RFID|RC522/i.test(codeEditor.value)) lines.push("RFID: simulated tag present");
  if (/Motor|L298N|Servo/i.test(codeEditor.value)) lines.push("ACTUATOR: driver pins active");
  return lines.join("\n");
}

function seedReferenceCircuit() {
  const layout = [
    ["esp32-wroom", 70, 54], ["max30102", 380, 55], ["mpu6050", 575, 60], ["neo6m", 770, 65],
    ["sos-button", 380, 235], ["buzzer", 575, 235], ["npn", 770, 237], ["vibration", 935, 237],
    ["tp4056", 380, 420], ["lipo", 575, 425], ["resistor", 770, 425], ["led", 930, 425], ["jumper", 930, 570]
  ];
  layout.forEach(([id, x, y]) => addComponent(parts.find(part => part.id === id), x, y));
  addSeedWire("esp32-wroom", "3V3", "max30102", "VIN");
  addSeedWire("esp32-wroom", "GND", "max30102", "GND");
  addSeedWire("esp32-wroom", "GPIO21", "max30102", "SDA");
  addSeedWire("esp32-wroom", "GPIO47", "max30102", "SCL");
  addSeedWire("esp32-wroom", "3V3", "mpu6050", "VCC");
  addSeedWire("esp32-wroom", "GND", "mpu6050", "GND");
  addSeedWire("esp32-wroom", "GPIO21", "mpu6050", "SDA");
  addSeedWire("esp32-wroom", "GPIO47", "mpu6050", "SCL");
  addSeedWire("esp32-wroom", "5V", "neo6m", "VCC");
  addSeedWire("esp32-wroom", "GND", "neo6m", "GND");
  addSeedWire("esp32-wroom", "RX", "neo6m", "TX");
  addSeedWire("esp32-wroom", "TX", "neo6m", "RX");
  addSeedWire("esp32-wroom", "GPIO38", "sos-button", "IN");
  addSeedWire("esp32-wroom", "GPIO35", "buzzer", "+");
  addSeedWire("esp32-wroom", "GPIO36", "npn", "B");
  addSeedWire("npn", "C", "vibration", "-");
  addSeedWire("tp4056", "B+", "lipo", "+");
  addSeedWire("tp4056", "B-", "lipo", "-");
  addSeedWire("esp32-wroom", "GPIO48", "led", "A");
  selectComponent(placed[0].instanceId);
  renderSignals();
  updateWireCount();
  drawReferenceWires();
}

function addSeedWire(fromId, fromPin, toId, toPin) {
  const from = placed.find(part => part.id === fromId);
  const to = placed.find(part => part.id === toId);
  if (!from || !to) return;
  manualWires.push({
    from: { instanceId: from.instanceId, pin: fromPin },
    to: { instanceId: to.instanceId, pin: toPin },
    color: nextWireColor()
  });
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    renderParts();
  });
});

document.querySelectorAll(".tool").forEach(tool => {
  tool.addEventListener("click", () => {
    document.querySelectorAll(".tool").forEach(item => item.classList.remove("active"));
    tool.classList.add("active");
    activeTool = tool.dataset.tool;
    simState.textContent = `${activeTool[0].toUpperCase()}${activeTool.slice(1)} tool`;
  });
});

document.querySelector("#runBtn").addEventListener("click", runSimulation);
document.querySelector("#runCodeBtn").addEventListener("click", runSimulation);
document.querySelector("#resetBtn").addEventListener("click", () => {
  clearWorkspace();
  seedReferenceCircuit();
});
document.querySelector("#demoBtn").addEventListener("click", () => {
  clearWorkspace();
  seedReferenceCircuit();
});
document.querySelector("#blankBtn").addEventListener("click", clearWorkspace);
document.querySelector("#duplicateBtn").addEventListener("click", () => {
  const item = placed.find(part => part.instanceId === selectedId);
  if (!item) return;
  const base = parts.find(part => part.id === item.id);
  addComponent(base, item.x + 28, item.y + 28);
});
document.querySelector("#deleteBtn").addEventListener("click", () => {
  if (!selectedId) return;
  placed = placed.filter(part => part.instanceId !== selectedId);
  manualWires = manualWires.filter(wire => wire.from.instanceId !== selectedId && wire.to.instanceId !== selectedId);
  const el = board.querySelector(`[data-instance-id="${selectedId}"]`);
  if (el) el.remove();
  selectedId = null;
  selectedPart.textContent = "No part selected";
  renderInspector(null);
  renderSignals();
  updateDesignCount();
  updateWireCount();
  drawReferenceWires();
});
document.querySelector("#clearWiresBtn").addEventListener("click", () => {
  manualWires = [];
  updateWireCount();
  drawReferenceWires();
  if (selectedId) renderInspector(placed.find(part => part.instanceId === selectedId));
  simState.textContent = "Wires cleared";
});
document.querySelector("#exportBtn").addEventListener("click", async () => {
  const design = JSON.stringify({ placed, wires: manualWires, code: codeEditor.value }, null, 2);
  try {
    await navigator.clipboard.writeText(design);
    simState.textContent = "Design copied";
  } catch {
    serialMonitor.textContent = design;
    simState.textContent = "Design in serial";
  }
});
document.querySelector("#formatBtn").addEventListener("click", () => {
  codeEditor.value = codeEditor.value.replace(/\t/g, "  ").replace(/\n{3,}/g, "\n\n").trim() + "\n";
});
codePreset.addEventListener("change", () => {
  codeEditor.value = presets[codePreset.value];
  renderCodeDiagnostics(analyzeCode(codeEditor.value));
});
codeEditor.addEventListener("input", () => {
  renderCodeDiagnostics(analyzeCode(codeEditor.value));
});
partSearch.addEventListener("input", renderParts);
board.addEventListener("click", () => selectComponent(null));

codeEditor.value = presets.esp32Health;
renderCodeDiagnostics(analyzeCode(codeEditor.value));
renderParts();
seedReferenceCircuit();
updateWireCount();
