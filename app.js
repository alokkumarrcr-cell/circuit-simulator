// Embedded Circuit Studio - Core Engine
(function() {
  // --- COMPONENT CATALOG ---
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
      pins: ["3V3", "GND", "GPIO21", "GPIO22", "GPIO34", "GPIO35", "5V", "TX", "RX"],
      visualClass: "visual-board",
      defaultState: { wifi: "Connected", heap: 184320, tempC: 38.2 }
    },
    {
      id: "jetson-nano",
      name: "NVIDIA Jetson Nano",
      category: "boards",
      badge: "JETSON",
      color: "#76b900",
      kind: "board",
      desc: "128-core Maxwell GPU edge AI system for PyTorch, TensorRT, and video analytics.",
      pins: ["5V", "3V3", "GND", "GPIO12", "GPIO13", "TX", "RX", "SCL", "SDA", "CSI_CAM"],
      visualClass: "visual-jetson",
      defaultState: { gpuUtil: 64, aiFps: 29.2, ramMb: 1940 }
    },
    {
      id: "rdkx5",
      name: "D-Robotics RDK X5",
      category: "boards",
      badge: "RDK-X5",
      color: "#ff6a00",
      kind: "board",
      desc: "Sunrise 5 AI board with 10 TOPS BPU, 4-lane MIPI CSI, 40-pin header & CAN FD.",
      pins: ["5V", "3V3", "GND", "GPIO17", "GPIO27", "CAN_H", "CAN_L", "SCL", "SDA", "MIPI"],
      visualClass: "visual-rdkx5",
      defaultState: { bpuUtil: 74, nnModel: "YOLOv8s-BPU", latencyMs: 13.8 }
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
    
    // Sensors
    {
      id: "tds-sensor",
      name: "Analog TDS Sensor Module",
      category: "sensors",
      badge: "TDS",
      color: "#0284c7",
      kind: "sensor",
      desc: "Measures Total Dissolved Solids in water (0-1000 ppm). Outputs 0 - 2.3V analog signal.",
      pins: ["VCC", "GND", "AOUT"],
      visualClass: "visual-tds",
      defaultState: { tdsPpm: 238, voltage: 1.32, quality: "Good Drinking Water" }
    },
    {
      id: "yfs201",
      name: "YF-S201 Water Flow Sensor",
      category: "sensors",
      badge: "FLOW",
      color: "#0ea5e9",
      kind: "sensor",
      desc: "Hall effect water flow sensor (1-30 L/min). Produces 7.5 pulses/sec per L/min.",
      pins: ["VCC", "GND", "PULSE"],
      visualClass: "visual-flow",
      defaultState: { flowRate: 5.4, pulseHz: 40, totalLiters: 12.6 }
    },
    {
      id: "oak-d-lite",
      name: "Luxonis OAK-D Lite",
      category: "sensors",
      badge: "OAK-D",
      color: "#9333ea",
      kind: "sensor",
      desc: "Tri-camera 4K RGB + Stereo Depth with onboard 4 TOPS Intel Myriad X VPU.",
      pins: ["VBUS", "GND", "DEPTH_OUT", "RGB_OUT"],
      visualClass: "visual-oak-d",
      defaultState: { depthM: 1.38, target: "person 94%", fps: 30 }
    },
    {
      id: "raspberry-pi-cam",
      name: "Raspberry Pi Camera",
      category: "sensors",
      badge: "PI-CAM",
      color: "#e11d48",
      kind: "sensor",
      desc: "MIPI CSI-2 Camera Module with 1080p video, OpenCV & libcamera support.",
      pins: ["3V3", "GND", "SDA", "SCL", "CSI_CLK", "CSI_DAT"],
      visualClass: "visual-picam",
      defaultState: { res: "1920x1080", iso: 200, shutter: "1/60s" }
    },
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
      defaultState: { bpm: 72, spo2: 98.4 }
    },

    // Power
    {
      id: "tp4056",
      name: "TP4056 LiPo Charger",
      category: "power",
      badge: "BATT",
      color: "#2563eb",
      kind: "power",
      desc: "1A Constant-Current/Constant-Voltage Li-ion battery charger with protection.",
      pins: ["IN+", "IN-", "BAT+", "BAT-", "OUT+", "OUT-"],
      visualClass: "visual-power",
      defaultState: { vbat: 4.12, status: "Standby" }
    },

    // Basic
    {
      id: "led",
      name: "Indicator LED",
      category: "basic",
      badge: "LED",
      color: "#eab308",
      kind: "basic",
      desc: "5mm visible status LED with built-in current limiting.",
      pins: ["ANODE", "CATHODE"],
      visualClass: "visual-basic",
      defaultState: { state: "OFF", currentMa: 0 }
    },
    {
      id: "buzzer",
      name: "Active Buzzer",
      category: "basic",
      badge: "BUZZ",
      color: "#64748b",
      kind: "basic",
      desc: "5V active piezoelectric buzzer for audible alarms.",
      pins: ["VCC", "GND"],
      visualClass: "visual-basic",
      defaultState: { sound: "Silent" }
    }
  ];

  // --- PRESET CODES ---
  const PRESETS = {
    waterStation: `// Water Station: TDS Sensor + YF-S201 Flow Sensor
#define TDS_PIN A0
#define FLOW_PIN 2

volatile unsigned long pulseCount = 0;
float flowRateLMin = 0.0;
float totalVolumeL = 0.0;

void IRAM_ATTR onFlowPulse() {
  pulseCount++;
}

void setup() {
  Serial.begin(115200);
  pinMode(FLOW_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(FLOW_PIN), onFlowPulse, RISING);
  Serial.println("[SYSTEM] Water Monitoring Station Online");
}

void loop() {
  // Flow Rate calculation (7.5 pulses per L/min)
  flowRateLMin = pulseCount / 7.5;
  totalVolumeL += (flowRateLMin / 60.0);
  pulseCount = 0;

  // TDS Reading (0 - 2.3V)
  int rawAdc = analogRead(TDS_PIN);
  float voltage = rawAdc * (3.3 / 4095.0);
  float tdsPpm = (voltage / 2.3) * 1000.0;

  Serial.print("[TDS] Purity: "); Serial.print(tdsPpm, 0); Serial.print(" ppm | ");
  Serial.print("[FLOW] Rate: "); Serial.print(flowRateLMin, 1); Serial.print(" L/min | Total: ");
  Serial.print(totalVolumeL, 2); Serial.println(" L");
  delay(1000);
}`,

    edgeAi: `# Edge AI Vision: Jetson Nano / RDK X5 + OAK-D Lite
import depthai as dai
import numpy as np

print("[BOOT] Starting Edge AI Vision Pipeline...")
pipeline = dai.Pipeline()

# Setup OAK-D Lite Stereo Depth & Neural Network
stereo = pipeline.create(dai.node.StereoDepth)
yolo = pipeline.create(dai.node.YoloSpatialDetectionNetwork)
print("[DEVICE] Jetson Maxwell GPU & Horizon BPU Initialized")

frame_id = 0
while frame_id < 60:
    frame_id += 1
    depth = 1.35 + np.sin(frame_id / 6.0) * 0.15
    print(f"[OAK-D] Frame {frame_id:03d} | Object: person (94%) | Depth: {depth:.2f} m | Latency: 13.8 ms")
`,

    esp32Health: `// ESP32 Health GPS SOS
void setup() {
  Serial.begin(115200);
  Serial.println("[ESP32] Health Watchdog Active");
}
void loop() {
  Serial.println("[MAX30102] Heart Rate: 72 BPM | SpO2: 98%");
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
print("Raspberry Pi 4 Online")
while True:
    print("Reading GPIO signals...")
    time.sleep(1)
`,
    blank: ""
  };

  // --- APPLICATION STATE ---
  let placedComponents = [];
  let wires = [];
  let selectedCompId = null;
  let activeTool = "select";
  let isSimulating = false;
  let simInterval = null;
  let simTick = 0;
  let wireStartPin = null;

  // DOM Elements
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

  // --- RENDER PARTS CATALOG ---
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

  // --- ADD COMPONENT TO BOARD ---
  function addComponentToBoard(catalogId, x, y) {
    const proto = CATALOG.find(c => c.id === catalogId);
    if (!proto) return;

    const instanceId = `inst_${Date.now()}_${Math.floor(Math.random()*1000)}`;
    const posX = x !== undefined ? x : 40 + (placedComponents.length % 5) * 160;
    const posY = y !== undefined ? y : 40 + Math.floor(placedComponents.length / 5) * 130;

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
  }

  // --- RENDER BOARD ---
  function renderBoard() {
    circuitBoardEl.innerHTML = "";
    placedComponents.forEach(c => {
      const el = document.createElement("div");
      el.className = `component ${c.instanceId === selectedCompId ? "selected" : ""} ${isSimulating ? "running" : ""}`;
      el.style.left = `${c.x}px`;
      el.style.top = `${c.y}px`;
      el.dataset.id = c.instanceId;

      let visualHtml = "";
      if (c.visualClass === "visual-jetson") {
        visualHtml = `<div class="visual-jetson"></div>`;
      } else if (c.visualClass === "visual-rdkx5") {
        visualHtml = `<div class="visual-rdkx5"><div class="bpu-chip"><span>SUNRISE 5</span><small>10 TOPS</small></div></div>`;
      } else if (c.visualClass === "visual-oak-d") {
        visualHtml = `<div class="visual-oak-d"><div class="lens"></div><div class="lens rgb"></div><div class="lens"></div></div>`;
      } else if (c.visualClass === "visual-picam") {
        visualHtml = `<div class="visual-picam"><div class="sensor-box"><div class="sensor-lens"></div></div></div>`;
      } else if (c.visualClass === "visual-tds") {
        visualHtml = `<div class="visual-tds"><div class="probe-prongs"><span></span><span></span></div><div class="potentiometer"></div></div>`;
      } else if (c.visualClass === "visual-flow") {
        visualHtml = `<div class="visual-flow"><div class="turbine-wheel"></div></div>`;
      } else {
        visualHtml = `<div class="${c.visualClass}"></div>`;
      }

      const pinsHtml = c.pins.map(pin => `<div class="pin" data-inst="${c.instanceId}" data-pin="${pin}" title="${pin}"></div>`).join("");

      el.innerHTML = `
        <div class="component-head" style="background:${c.color}">${c.name}</div>
        <div class="component-body">
          ${visualHtml}
          <div class="pins">${pinsHtml}</div>
        </div>
      `;

      // Dragging logic
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

    // Pin click logic for wiring
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

  // --- RENDER WIRES ---
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

  // --- SELECTION & INSPECTOR ---
  function selectComponent(instId) {
    selectedCompId = instId;
    const comp = placedComponents.find(c => c.instanceId === instId);
    
    document.querySelectorAll(".component").forEach(el => {
      el.classList.toggle("selected", el.dataset.id === instId);
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
      <h4>Pins</h4>
      <div>${comp.pins.map(p => `<div class="pin-row"><span>${p}</span><b>Active</b></div>`).join("")}</div>
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

  // --- SIMULATION TICK ---
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
        // TDS Sensor
        if (c.catalogId === "tds-sensor") {
          const ppm = Math.round(235 + Math.sin(simTick / 4) * 12);
          c.state = {
            tdsPpm: `${ppm} ppm`,
            voltage: `${(ppm * 0.0023).toFixed(2)} V`,
            quality: ppm < 300 ? "Potable Drinking Water" : "High Mineral"
          };
        }
        // Flow Sensor
        if (c.catalogId === "yfs201") {
          const flow = +(5.0 + Math.sin(simTick / 3) * 1.5).toFixed(1);
          c.state = {
            flowRate: `${flow} L/min`,
            pulseHz: `${Math.round(flow * 7.5)} Hz`,
            totalVolume: `${(12.6 + simTick * 0.08).toFixed(2)} L`
          };
        }
        // Jetson Nano
        if (c.catalogId === "jetson-nano") {
          c.state = {
            gpuUtil: `${Math.round(62 + Math.sin(simTick / 3) * 15)} %`,
            aiFps: `${(28.5 + Math.cos(simTick / 4) * 1.5).toFixed(1)} fps`,
            ramMb: "1,940 MB"
          };
        }
        // RDK X5
        if (c.catalogId === "rdkx5") {
          c.state = {
            bpuUtil: `${Math.round(70 + Math.cos(simTick / 3) * 12)} %`,
            nnModel: "YOLOv8s-BPU",
            latencyMs: `${(13.2 + Math.sin(simTick / 2) * 1.2).toFixed(1)} ms`
          };
        }
        // OAK-D Lite
        if (c.catalogId === "oak-d-lite") {
          c.state = {
            depthM: `${(1.3 + Math.abs(Math.sin(simTick / 5) * 0.4)).toFixed(2)} m`,
            target: `person (${Math.round(90 + Math.sin(simTick)*6)}%)`,
            fps: "30 FPS"
          };
        }
        // Pi Camera
        if (c.catalogId === "raspberry-pi-cam") {
          c.state = { res: "1920x1080 @ 30fps", iso: simTick % 2 === 0 ? 200 : 400, shutter: "1/60s" };
        }
      });

      // Update Inspector if part is selected
      if (selectedCompId) {
        const cur = placedComponents.find(c => c.instanceId === selectedCompId);
        if (cur) renderSignals(cur);
      }

      // Log to Serial Monitor
      appendSerialLog();
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

  function appendSerialLog() {
    const timestamp = new Date().toLocaleTimeString();
    let msg = "";
    const hasTds = placedComponents.some(c => c.catalogId === "tds-sensor");
    const hasFlow = placedComponents.some(c => c.catalogId === "yfs201");
    const hasJetson = placedComponents.some(c => c.catalogId === "jetson-nano");
    const hasOak = placedComponents.some(c => c.catalogId === "oak-d-lite");

    if (hasTds && hasFlow) {
      msg = `[${timestamp}] [TDS] 242 ppm (1.35V) | [YF-S201] Flow: 5.2 L/min, 39 Hz`;
    } else if (hasJetson || hasOak) {
      msg = `[${timestamp}] [AI ENGINE] OAK-D Depth: 1.34m | Jetson GPU: 68% | Class: 'person' (94%)`;
    } else {
      msg = `[${timestamp}] Tick ${simTick} | Telemetry broadcast normal.`;
    }
    serialEl.textContent += msg + "\n";
    serialEl.scrollTop = serialEl.scrollHeight;
  }

  // --- CODE SIMULATOR SCANNER ---
  function analyzeCode(code) {
    const hooks = [];
    const pins = [];
    
    if (/tds|TDS|analogRead/i.test(code)) hooks.push("TDS Water Sensor");
    if (/flow|pulse|YFS201|yfs201/i.test(code)) hooks.push("YF-S201 Flow Sensor");
    if (/jetson|cuda|torch|tensorrt/i.test(code)) hooks.push("Jetson Maxwell GPU");
    if (/rdk|sunrise|bpu/i.test(code)) hooks.push("RDK X5 BPU Acceleration");
    if (/depthai|dai|oak/i.test(code)) hooks.push("OAK-D Spatial Depth");
    if (/picamera|libcamera|cv2/i.test(code)) hooks.push("Raspberry Pi CSI Cam");

    const pinMatches = code.match(/(?:pinMode|digitalWrite|analogRead|digitalRead)\s*\(\s*([A-Za-z0-9_]+)/g) || [];
    pinMatches.forEach(p => pins.push(p.replace(/.*[\(\s]/, "")));

    detectedHooksEl.textContent = `${hooks.length} hooks`;
    detectedPinsEl.textContent = `${pins.length} pins`;
    
    let board = "Generic MCU";
    if (/jetson/i.test(code)) board = "NVIDIA Jetson Nano";
    else if (/rdk|sunrise/i.test(code)) board = "D-Robotics RDK X5";
    else if (/esp32/i.test(code)) board = "ESP32-WROOM-32";
    else if (/arduino/i.test(code)) board = "Arduino Uno";
    detectedBoardEl.textContent = board;

    codeConsoleEl.textContent = `[ANALYZER] Found ${hooks.length} hardware hooks and ${pins.length} pin references.\nTarget Architecture: ${board}\nCompile State: OK`;
    compileStateEl.textContent = "Compiled";
  }

  // --- REFERENCE DEMO CIRCUIT ---
  function loadDemoCircuit() {
    placedComponents = [];
    wires = [];
    addComponentToBoard("jetson-nano", 40, 50);
    addComponentToBoard("rdkx5", 280, 50);
    addComponentToBoard("oak-d-lite", 520, 50);
    addComponentToBoard("raspberry-pi-cam", 720, 50);
    addComponentToBoard("tds-sensor", 80, 240);
    addComponentToBoard("yfs201", 340, 240);
    addComponentToBoard("tp4056", 580, 240);
    addComponentToBoard("buzzer", 780, 240);

    // Wire sample
    wires.push({ from: { inst: placedComponents[0].instanceId, pin: "5V" }, to: { inst: placedComponents[2].instanceId, pin: "VBUS" } });
    wires.push({ from: { inst: placedComponents[4].instanceId, pin: "AOUT" }, to: { inst: placedComponents[0].instanceId, pin: "GPIO12" } });
    renderBoard();
    updateStatus();
  }

  // --- EVENT LISTENERS ---
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
  document.getElementById("demoBtn").onclick = () => loadDemoCircuit();
  document.getElementById("resetBtn").onclick = () => { stopSimulation(); loadDemoCircuit(); };

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

  // --- INITIALIZATION ---
  renderCatalog("boards");
  codeEditorEl.value = PRESETS.waterStation;
  analyzeCode(codeEditorEl.value);
  loadDemoCircuit();
})();
