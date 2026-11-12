// Embedded Circuit Studio - Original Simulation Engine
(function() {
  const CATALOG = [
    // Boards
    {
      id: "esp32-wroom",
      name: "ESP32-WROOM-32",
      category: "boards",
      badge: "ESP32",
      color: "#0b766e",
      kind: "board",
      desc: "Dual-core 240MHz Wi-Fi & BLE SoC with 30 GPIO pins, ADC, DAC, and I2C/SPI.",
      pins: ["3V3", "EN", "VP", "VN", "D34", "D35", "D32", "D33", "D25", "D26", "D27", "D14", "D12", "GND", "5V", "D23", "D22", "TX0", "RX0", "D21", "D19", "D18", "D5", "D17", "D16", "D4", "D0", "D2", "D15"],
      visualClass: "esp32-real",
      defaultState: { wifi: "Connected", heap: 184320, tempC: 38.2, status: "Normal" }
    },
    {
      id: "arduino-uno",
      name: "Arduino Uno R3",
      category: "boards",
      badge: "UNO",
      color: "#00878f",
      kind: "board",
      desc: "ATmega328P 8-bit microcontroller with 14 digital I/O pins and 6 analog inputs.",
      pins: ["5V", "3V3", "GND", "A0", "A1", "D2", "D3", "D13"],
      visualClass: "visual-board",
      defaultState: { clockHz: "16 MHz", vcc: 5.0 }
    },
    {
      id: "raspberry-pi",
      name: "Raspberry Pi 4",
      category: "boards",
      badge: "RPI4",
      color: "#c7053d",
      kind: "board",
      desc: "Broadcom BCM2711 quad-core Cortex-A72 SBC with 40-pin GPIO.",
      pins: ["5V", "3V3", "GND", "GPIO2", "GPIO3", "GPIO14", "GPIO15", "GPIO18"],
      visualClass: "visual-board",
      defaultState: { cpuTemp: "42.8 °C", os: "Linux ARM64" }
    },

    // Sensors
    {
      id: "max30102",
      name: "MAX30102 Pulse Oximeter",
      category: "sensors",
      badge: "PULSE",
      color: "#e11d48",
      kind: "sensor",
      desc: "Heart-rate and SpO2 blood-oxygen sensor with I2C interface.",
      pins: ["VIN", "GND", "SDA", "SCL", "INT"],
      visualClass: "visual-sensor",
      defaultState: { bpm: 74, spo2: 98.4, status: "Finger Detected" }
    },
    {
      id: "mpu6050",
      name: "MPU-6050 6-Axis IMU",
      category: "sensors",
      badge: "IMU",
      color: "#4f46e5",
      kind: "sensor",
      desc: "3-axis accelerometer and 3-axis gyroscope with MotionApps DMP.",
      pins: ["VCC", "GND", "SCL", "SDA", "INT"],
      visualClass: "visual-sensor",
      defaultState: { accelZ: 0.98, gyroZ: 0.02, fallDetected: "False" }
    },
    {
      id: "neo6m",
      name: "NEO-6M GPS Module",
      category: "sensors",
      badge: "GPS",
      color: "#0284c7",
      kind: "sensor",
      desc: "High-sensitivity satellite positioning receiver with ceramic antenna.",
      pins: ["VCC", "GND", "TX", "RX"],
      visualClass: "visual-sensor",
      defaultState: { lat: "12.9716 N", lon: "77.5946 E", sats: 9, fix: "3D Fix" }
    },
    {
      id: "dht22",
      name: "DHT22 / BME280 Sensor",
      category: "sensors",
      badge: "DHT",
      color: "#059669",
      kind: "sensor",
      desc: "Digital temperature, humidity, and barometric sensor.",
      pins: ["VCC", "GND", "DATA"],
      visualClass: "visual-sensor",
      defaultState: { temp: "26.4 °C", humidity: "58 %", pressure: "1013 hPa" }
    },
    {
      id: "hcsr04",
      name: "HC-SR04 Ultrasonic",
      category: "sensors",
      badge: "SONAR",
      color: "#0891b2",
      kind: "sensor",
      desc: "Ultrasonic rangefinder measuring 2cm to 400cm distance.",
      pins: ["VCC", "GND", "TRIG", "ECHO"],
      visualClass: "visual-sensor",
      defaultState: { distanceCm: 42 }
    },

    // Power
    {
      id: "tp4056",
      name: "TP4056 Li-Po Charger",
      category: "power",
      badge: "TP4056",
      color: "#2563eb",
      kind: "power",
      desc: "1A Constant-Current/Constant-Voltage Li-ion battery charger with protection.",
      pins: ["IN+", "IN-", "BAT+", "BAT-", "OUT+", "OUT-"],
      visualClass: "visual-power",
      defaultState: { vbat: "4.12 V", chgCurrent: "480 mA", status: "Charging" }
    },
    {
      id: "battery-lipo",
      name: "3.7V 1200mAh Li-Po",
      category: "power",
      badge: "BATT",
      color: "#1d4ed8",
      kind: "power",
      desc: "Rechargeable Lithium Polymer battery cell.",
      pins: ["+", "-"],
      visualClass: "visual-power",
      defaultState: { voltage: "3.92 V", capacity: "84 %" }
    },

    // Basic
    {
      id: "sos-button",
      name: "SOS Push Button",
      category: "basic",
      badge: "SOS",
      color: "#dc2626",
      kind: "basic",
      desc: "Tactile momentary push button for emergency trigger.",
      pins: ["PIN_A", "PIN_B"],
      visualClass: "visual-basic",
      defaultState: { pressed: "Released" }
    },
    {
      id: "buzzer",
      name: "Piezo Buzzer",
      category: "basic",
      badge: "BUZZ",
      color: "#64748b",
      kind: "basic",
      desc: "Active audible alert transducer.",
      pins: ["VCC", "GND"],
      visualClass: "visual-basic",
      defaultState: { state: "Silent" }
    },
    {
      id: "vibration",
      name: "Vibration Motor",
      category: "basic",
      badge: "VIB",
      color: "#d97706",
      kind: "basic",
      desc: "Transistor-driven vibration motor for haptic tactile feedback.",
      pins: ["BASE", "VCC", "GND"],
      visualClass: "visual-basic",
      defaultState: { status: "Idle" }
    },
    {
      id: "led",
      name: "Status LED",
      category: "basic",
      badge: "LED",
      color: "#16a34a",
      kind: "basic",
      desc: "5mm colored LED indicator.",
      pins: ["ANODE", "CATHODE"],
      visualClass: "visual-basic",
      defaultState: { state: "OFF" }
    }
  ];

  const PRESETS = {
    esp32Health: `// Reference Design: ESP32 Health GPS SOS
#include <Wire.h>
#define SOS_PIN 15
#define BUZZER_PIN 18
#define VIB_PIN 19

volatile bool emergencyAlert = false;

void IRAM_ATTR onSosPressed() {
  emergencyAlert = true;
}

void setup() {
  Serial.begin(115200);
  pinMode(SOS_PIN, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(VIB_PIN, OUTPUT);
  attachInterrupt(digitalPinToInterrupt(SOS_PIN), onSosPressed, FALLING);

  Serial.println("[SYSTEM] ESP32 Wearable Initialized");
  Serial.println("[SENSORS] MAX30102 Oximeter & MPU6050 IMU Online");
  Serial.println("[GPS] NEO-6M Locked: 9 Satellites Active");
}

void loop() {
  int bpm = 74;
  float spo2 = 98.4;
  float accelZ = 0.98;

  if (emergencyAlert || accelZ < 0.2) {
    digitalWrite(BUZZER_PIN, HIGH);
    digitalWrite(VIB_PIN, HIGH);
    Serial.println("[CRITICAL ALERT] SOS Triggered / Fall Detected!");
    Serial.println("[GPS DISPATCH] Coordinates: Lat 12.9716 N, Lon 77.5946 E");
    delay(500);
    digitalWrite(BUZZER_PIN, LOW);
    digitalWrite(VIB_PIN, LOW);
    emergencyAlert = false;
  } else {
    Serial.print("[VITALS] Heart Rate: "); Serial.print(bpm);
    Serial.print(" BPM | SpO2: "); Serial.print(spo2, 1);
    Serial.println("% | IMU Vector: Normal");
  }
  delay(1000);
}`,

    arduinoBlink: `void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}`,

    raspberryPython: `import time
print("Raspberry Pi 4 Linux Node Active")
while True:
    print("Reading GPIO signals...")
    time.sleep(1)
`,

    iotWeather: `// ESP32 IoT Weather Station
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  Serial.println("[WIFI] Connecting to Cloud Broker...");
  Serial.println("[WEATHER NODE] Initializing BME280 Environment Sensors");
}

void loop() {
  float temp = 26.4;
  float hum = 58.0;
  float pressure = 1013.2;

  Serial.print("[DATA] Temp: "); Serial.print(temp); Serial.print(" C | Humidity: ");
  Serial.print(hum); Serial.print(" % | Pressure: "); Serial.print(pressure); Serial.println(" hPa");
  Serial.println("[MQTT] Publishing payload to cloud...");
  delay(2000);
}`,

    robotDriver: `// Autonomous Robot Obstacle Avoidance
#define TRIG 5
#define ECHO 18

void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Serial.println("[ROBOT] Motor Controllers & Sonar Active");
}

void loop() {
  int distanceCm = 42;
  if (distanceCm < 20) {
    Serial.println("[OBSTACLE] Obstacle within 20cm! Reversing and Turning...");
  } else {
    Serial.println("[NAV] Path clear. Moving forward (Speed: 200 PWM)");
  }
  delay(1000);
}`,
    blank: ""
  };

  let placedComponents = [];
  let wires = [];
  let selectedCompId = null;
  let activeTool = "select";
  let isSimulating = false;
  let simInterval = null;
  let simTick = 0;
  let wireStartPin = null;

  const partsListEl = document.getElementById("partsList");
  const circuitBoardEl = document.getElementById("circuitBoard");
  const wireLayerEl = document.getElementById("wireLayer");
  const inspectorEl = document.getElementById("inspector");
  const signalsEl = document.getElementById("signals");
  const serialEl = document.getElementById("serialMonitor");
  const partSearchEl = document.getElementById("partSearch");
  const designCountEl = document.getElementById("designCount");
  const wireCountEl = document.getElementById("wireCount");
  const selectedPartEl = document.getElementById("selectedPart");
  const simStateEl = document.getElementById("simState");
  const runBtn = document.getElementById("runBtn");
  const codeEditorEl = document.getElementById("codeEditor");
  const codePresetEl = document.getElementById("codePreset");
  const runCodeBtn = document.getElementById("runCodeBtn");
  const codeConsoleEl = document.getElementById("codeConsole");
  const compileStateEl = document.getElementById("compileState");
  const detectedBoardEl = document.getElementById("detectedBoard");
  const detectedHooksEl = document.getElementById("detectedHooks");
  const detectedPinsEl = document.getElementById("detectedPins");

  function renderCatalog(filterCat = "boards", query = "") {
    partsListEl.innerHTML = "";
    const filtered = CATALOG.filter(p => {
      const matchCat = filterCat === "all" || p.category === filterCat;
      const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });

    filtered.forEach(p => {
      const item = document.createElement("button");
      item.className = "part";
      item.innerHTML = `
        <div class="part-icon" style="background:${p.color}">${p.badge}</div>
        <div>
          <span>${p.name}</span>
          <small>${p.desc.substring(0, 52)}...</small>
        </div>
      `;
      item.onclick = () => addComponentToBoard(p.id);
      partsListEl.appendChild(item);
    });
  }

  function addComponentToBoard(catalogId, x, y) {
    const proto = CATALOG.find(c => c.id === catalogId);
    if (!proto) return null;

    const instanceId = `inst_${Date.now()}_${Math.floor(Math.random()*1000)}`;
    const posX = x !== undefined ? x : 40 + (placedComponents.length % 5) * 160;
    const posY = y !== undefined ? y : 40 + Math.floor(placedComponents.length / 5) * 140;

    const comp = {
      instanceId,
      catalogId,
      name: proto.name,
      category: proto.category,
      color: proto.color,
      x: posX,
      y: posY,
      pins: [...proto.pins],
      state: { ...proto.defaultState },
      visualClass: proto.visualClass
    };

    placedComponents.push(comp);
    renderBoard();
    selectComponent(instanceId);
    updateStatus();
    return comp;
  }

  function renderBoard() {
    circuitBoardEl.innerHTML = "";
    placedComponents.forEach(c => {
      const el = document.createElement("div");
      el.className = `component ${c.instanceId === selectedCompId ? "selected" : ""} ${isSimulating ? "running" : ""}`;
      el.style.left = `${c.x}px`;
      el.style.top = `${c.y}px`;
      el.dataset.id = c.catalogId;
      el.dataset.inst = c.instanceId;

      let visualHtml = "";
      if (c.visualClass === "esp32-real") {
        const leftPins = ["3V3", "EN", "VP", "VN", "D34", "D35", "D32", "D33", "D25", "D26", "D27", "D14", "D12", "GND", "5V"];
        const rightPins = ["GND", "D23", "D22", "TX0", "RX0", "D21", "D19", "D18", "D5", "D17", "D16", "D4", "D0", "D2", "D15"];

        visualHtml = `
          <div class="esp32-real">
            <div class="esp32-antenna"></div>
            <div class="esp32-module">
              <strong>ESP32-WROOM-32</strong>
              <span>Wi-Fi + BLE</span>
              <small>FCC ID: 2AC7Z</small>
            </div>
            <div class="esp32-chip main"></div>
            <div class="esp32-led"></div>
            <div class="esp32-button boot"><span>BOOT</span></div>
            <div class="esp32-button reset"><span>EN</span></div>
            <div class="esp32-usb uart"><span>UART</span></div>
            <div class="esp32-usb usb"><span>USB</span></div>
            <div class="esp32-pins left">
              ${leftPins.map(p => `<label><div class="pin" data-inst="${c.instanceId}" data-pin="${p}"></div>${p}</label>`).join("")}
            </div>
            <div class="esp32-pins right">
              ${rightPins.map(p => `<label>${p}<div class="pin" data-inst="${c.instanceId}" data-pin="${p}"></div></label>`).join("")}
            </div>
          </div>
        `;
      } else {
        visualHtml = `<div class="${c.visualClass}"></div>`;
      }

      const defaultPinsHtml = c.visualClass === "esp32-real" ? "" : `
        <div class="pins">
          ${c.pins.map(pin => `<div class="pin" data-inst="${c.instanceId}" data-pin="${pin}" title="${pin}"></div>`).join("")}
        </div>
      `;

      el.innerHTML = `
        <div class="component-head" style="background:${c.color}">${c.name}</div>
        <div class="component-body">
          ${visualHtml}
          ${defaultPinsHtml}
        </div>
      `;

      el.onmousedown = (e) => {
        if (e.target.classList.contains("pin")) return;
        selectComponent(c.instanceId);
        if (activeTool !== "select") return;
        
        let startX = e.clientX;
        let startY = e.clientY;
        let origX = c.x;
        let origY = c.y;

        function onMouseMove(ev) {
          c.x = Math.max(0, origX + (ev.clientX - startX));
          c.y = Math.max(0, origY + (ev.clientY - startY));
          el.style.left = `${c.x}px`;
          el.style.top = `${c.y}px`;
          renderWires();
        }

        function onMouseUp() {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      };

      circuitBoardEl.appendChild(el);
    });

    circuitBoardEl.querySelectorAll(".pin").forEach(pinEl => {
      pinEl.onclick = (e) => {
        e.stopPropagation();
        const inst = pinEl.dataset.inst;
        const pin = pinEl.dataset.pin;
        if (!wireStartPin) {
          wireStartPin = { inst, pin };
          pinEl.style.outline = "3px solid #ff0055";
        } else {
          if (wireStartPin.inst !== inst) {
            wires.push({ from: wireStartPin, to: { inst, pin } });
            renderWires();
            updateStatus();
          }
          wireStartPin = null;
          renderBoard();
        }
      };
    });

    renderWires();
  }

  function renderWires() {
    wireLayerEl.innerHTML = "";
    wires.forEach(w => {
      const fromEl = circuitBoardEl.querySelector(`.pin[data-inst="${w.from.inst}"][data-pin="${w.from.pin}"]`);
      const toEl = circuitBoardEl.querySelector(`.pin[data-inst="${w.to.inst}"][data-pin="${w.to.pin}"]`);
      if (!fromEl || !toEl) return;

      const r1 = fromEl.getBoundingClientRect();
      const r2 = toEl.getBoundingClientRect();
      const bRect = circuitBoardEl.getBoundingClientRect();

      const x1 = r1.left - bRect.left + 6;
      const y1 = r1.top - bRect.top + 6;
      const x2 = r2.left - bRect.left + 6;
      const y2 = r2.top - bRect.top + 6;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const dx = Math.abs(x2 - x1) * 0.5;
      const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

      path.setAttribute("d", d);
      path.setAttribute("stroke", isSimulating ? "#2563eb" : "#475569");
      path.setAttribute("stroke-width", "3");
      path.setAttribute("fill", "none");
      if (isSimulating) path.classList.add("live-wire");

      wireLayerEl.appendChild(path);
    });
  }

  function selectComponent(instId) {
    selectedCompId = instId;
    const comp = placedComponents.find(c => c.instanceId === instId);
    
    document.querySelectorAll(".component").forEach(el => {
      el.classList.toggle("selected", el.dataset.inst === instId);
    });

    if (!comp) {
      selectedPartEl.textContent = "No part selected";
      inspectorEl.innerHTML = "<p>Select a component to view pins, supply notes, and live values.</p>";
      signalsEl.innerHTML = "";
      return;
    }

    selectedPartEl.textContent = comp.name;
    inspectorEl.innerHTML = `
      <strong>${comp.name}</strong>
      <p style="margin:4px 0 10px; font-size:0.8rem; color:#64748b;">${comp.category.toUpperCase()} | ID: ${comp.instanceId}</p>
      <h4>Pins (${comp.pins.length})</h4>
      <div style="max-height:120px; overflow:auto;">
        ${comp.pins.map(p => `<div class="pin-row"><span>${p}</span><b>Connected</b></div>`).join("")}
      </div>
    `;

    renderSignals(comp);
  }

  function renderSignals(comp) {
    signalsEl.innerHTML = "";
    Object.entries(comp.state).forEach(([k, v]) => {
      const row = document.createElement("div");
      row.className = "signal-row";
      row.innerHTML = `<span>${k}</span><b>${v}</b>`;
      signalsEl.appendChild(row);
    });
  }

  function updateStatus() {
    designCountEl.textContent = `${placedComponents.length} parts`;
    wireCountEl.textContent = `${wires.length} wires`;
  }

  function startSimulation() {
    isSimulating = true;
    simStateEl.textContent = "Running";
    simStateEl.style.color = "#16a34a";
    runBtn.textContent = "Stop Simulation";
    runBtn.style.background = "#c94338";
    renderBoard();

    simInterval = setInterval(() => {
      simTick++;
      placedComponents.forEach(c => {
        if (c.catalogId === "max30102") {
          c.state.bpm = 72 + Math.round(Math.sin(simTick / 3) * 4);
          c.state.spo2 = +(98.0 + Math.cos(simTick / 4) * 0.5).toFixed(1);
        }
        if (c.catalogId === "mpu6050") {
          c.state.accelZ = +(0.98 + Math.sin(simTick / 2) * 0.04).toFixed(2);
        }
        if (c.catalogId === "neo6m") {
          c.state.sats = 8 + (simTick % 4);
        }
        if (c.catalogId === "tp4056") {
          c.state.vbat = `${(4.12 - (simTick * 0.001)).toFixed(2)} V`;
        }
      });

      if (selectedCompId) {
        const cur = placedComponents.find(c => c.instanceId === selectedCompId);
        if (cur) renderSignals(cur);
      }

      const timestamp = new Date().toLocaleTimeString();
      const log = `[${timestamp}] [HEALTH] HR: 74 BPM | SpO2: 98.4% | GPS: 12.9716 N, 77.5946 E | Battery: 4.12V`;
      serialEl.textContent += log + "\n";
      serialEl.scrollTop = serialEl.scrollHeight;
    }, 1000);
  }

  function stopSimulation() {
    isSimulating = false;
    clearInterval(simInterval);
    simStateEl.textContent = "Idle";
    simStateEl.style.color = "";
    runBtn.textContent = "Run Simulation";
    runBtn.style.background = "";
    renderBoard();
  }

  function analyzeCode(code) {
    const hooks = [];
    const pins = [];
    
    if (/max30102|spo2|heartrate|bpm/i.test(code)) hooks.push("MAX30102");
    if (/mpu6050|accel|gyro/i.test(code)) hooks.push("MPU6050");
    if (/gps|neo-?6m/i.test(code)) hooks.push("NEO-6M GPS");
    if (/sos|alarm|buzzer/i.test(code)) hooks.push("SOS/Buzzer");

    const pinMatches = code.match(/(?:pinMode|digitalWrite|analogRead|digitalRead)\s*\(\s*([A-Za-z0-9_]+)/g) || [];
    pinMatches.forEach(p => pins.push(p.replace(/.*[\(\s]/, "")));

    detectedHooksEl.textContent = `${hooks.length} hooks`;
    detectedPinsEl.textContent = `${pins.length} pins`;
    
    let board = "Generic Board";
    if (/esp32/i.test(code)) board = "ESP32-WROOM-32";
    else if (/arduino/i.test(code)) board = "Arduino Uno";
    detectedBoardEl.textContent = board;

    codeConsoleEl.textContent = `[ANALYSIS] Scanned ${hooks.length} hooks, ${pins.length} pins.\nDetected Board: ${board}\nStatus: Ready.`;
    compileStateEl.textContent = "Compiled";
  }

  // Load Reference Design (ESP32-WROOM-32 + MAX30102 + MPU6050 + NEO-6M + SOS + Buzzer + Motor + TP4056)
  function loadReferenceDesign() {
    stopSimulation();
    placedComponents = [];
    wires = [];

    const esp = addComponentToBoard("esp32-wroom", 40, 40);
    const oximeter = addComponentToBoard("max30102", 330, 40);
    const imu = addComponentToBoard("mpu6050", 520, 40);
    const gps = addComponentToBoard("neo6m", 710, 40);
    const sos = addComponentToBoard("sos-button", 330, 240);
    const buzz = addComponentToBoard("buzzer", 520, 240);
    const vib = addComponentToBoard("vibration", 710, 240);
    const batt = addComponentToBoard("tp4056", 330, 440);

    // Pre-connected reference wires
    wires.push({ from: { inst: esp.instanceId, pin: "3V3" }, to: { inst: oximeter.instanceId, pin: "VIN" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D21" }, to: { inst: oximeter.instanceId, pin: "SDA" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D22" }, to: { inst: oximeter.instanceId, pin: "SCL" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D21" }, to: { inst: imu.instanceId, pin: "SDA" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D22" }, to: { inst: imu.instanceId, pin: "SCL" } });
    wires.push({ from: { inst: esp.instanceId, pin: "TX0" }, to: { inst: gps.instanceId, pin: "RX" } });
    wires.push({ from: { inst: esp.instanceId, pin: "RX0" }, to: { inst: gps.instanceId, pin: "TX" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D15" }, to: { inst: sos.instanceId, pin: "PIN_A" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D18" }, to: { inst: buzz.instanceId, pin: "VCC" } });
    wires.push({ from: { inst: esp.instanceId, pin: "D19" }, to: { inst: vib.instanceId, pin: "BASE" } });
    wires.push({ from: { inst: esp.instanceId, pin: "5V" }, to: { inst: batt.instanceId, pin: "OUT+" } });

    renderBoard();
    updateStatus();
    codePresetEl.value = "esp32Health";
    codeEditorEl.value = PRESETS.esp32Health;
    analyzeCode(codeEditorEl.value);
  }

  // Event Listeners
  document.querySelectorAll(".tab").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCatalog(tab.dataset.category, partSearchEl.value);
    };
  });

  partSearchEl.oninput = (e) => {
    const activeTab = document.querySelector(".tab.active")?.dataset.category || "boards";
    renderCatalog(activeTab, e.target.value);
  };

  document.querySelectorAll(".tool").forEach(tool => {
    tool.onclick = () => {
      document.querySelectorAll(".tool").forEach(t => t.classList.remove("active"));
      tool.classList.add("active");
      activeTool = tool.dataset.tool;
    };
  });

  runBtn.onclick = () => isSimulating ? stopSimulation() : startSimulation();
  
  document.getElementById("blankBtn").onclick = () => {
    stopSimulation();
    placedComponents = [];
    wires = [];
    selectedCompId = null;
    renderBoard();
    updateStatus();
    selectComponent(null);
  };

  document.getElementById("demoBtn").onclick = () => loadReferenceDesign();
  document.getElementById("resetBtn").onclick = () => loadReferenceDesign();

  document.getElementById("deleteBtn").onclick = () => {
    if (!selectedCompId) return;
    placedComponents = placedComponents.filter(c => c.instanceId !== selectedCompId);
    wires = wires.filter(w => w.from.inst !== selectedCompId && w.to.inst !== selectedCompId);
    selectedCompId = null;
    renderBoard();
    updateStatus();
    selectComponent(null);
  };

  document.getElementById("clearWiresBtn").onclick = () => {
    wires = [];
    renderWires();
    updateStatus();
  };

  document.getElementById("exportBtn").onclick = () => {
    const data = JSON.stringify({ components: placedComponents, wires }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "circuit-design.json";
    a.click();
  };

  codePresetEl.onchange = (e) => {
    codeEditorEl.value = PRESETS[e.target.value] || "";
    analyzeCode(codeEditorEl.value);
  };

  runCodeBtn.onclick = () => {
    analyzeCode(codeEditorEl.value);
    if (!isSimulating) startSimulation();
  };

  // Init
  renderCatalog("boards");
  loadReferenceDesign();
})();
