// ============================================================
// Retool Custom Component — Signature Pad
// Author: Taha Amin (@tahaamin)
// ============================================================
//
// Paste the HTML below into Retool's Custom Component HTML editor.
// The component outputs the signature as a base64 PNG via modelUpdate.
// ============================================================

/*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 12px;
    gap: 8px;
  }
  .toolbar {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .toolbar label { font-size: 12px; color: #555; font-weight: 500; }
  .canvas-wrap {
    position: relative;
    flex: 1;
    display: flex;
    min-height: 150px;
  }
  canvas {
    border: 2px dashed #ccc;
    border-radius: 8px;
    cursor: crosshair;
    width: 100%;
    height: 100%;
    touch-action: none;
    display: block;
  }
  .hint {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ccc;
    font-size: 14px;
    pointer-events: none;
    user-select: none;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  button {
    padding: 7px 18px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #f5f5f5;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: background 0.15s;
  }
  button:hover { background: #e0e0e0; }
  #saveBtn {
    background: #2563eb;
    color: #fff;
    border-color: #2563eb;
  }
  #saveBtn:hover { background: #1d4ed8; }
  input[type=range] { width: 80px; cursor: pointer; }
</style>
</head>
<body>

<div class="toolbar">
  <label>Pen Color</label>
  <input type="color" id="colorPicker" value="#000000">
  <label>Stroke</label>
  <input type="range" id="strokeSize" min="1" max="10" value="2">
</div>

<div class="canvas-wrap">
  <canvas id="sig-canvas"></canvas>
  <span class="hint" id="hint">✍ Sign here</span>
</div>

<div class="controls">
  <button id="clearBtn">🗑 Clear</button>
  <button id="saveBtn">💾 Save</button>
</div>

<script>
  const canvas = document.getElementById('sig-canvas');
  const ctx = canvas.getContext('2d');
  const hint = document.getElementById('hint');
  const colorPicker = document.getElementById('colorPicker');
  const strokeSize = document.getElementById('strokeSize');
  let isDrawing = false;
  let isEmpty = true;

  function resize() {
    const wrap = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  }

  function startDraw(e) {
    isDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.lineWidth = parseInt(strokeSize.value);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = colorPicker.value;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    if (isEmpty) {
      isEmpty = false;
      hint.style.display = 'none';
    }
  }

  function stopDraw() {
    if (!isDrawing) return;
    isDrawing = false;
    sendUpdate();
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);
  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw);

  document.getElementById('clearBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    isEmpty = true;
    hint.style.display = '';
    if (window.Retool) window.Retool.modelUpdate({ signature: '', isEmpty: true });
  });

  document.getElementById('saveBtn').addEventListener('click', sendUpdate);

  function sendUpdate() {
    if (window.Retool) {
      window.Retool.modelUpdate({
        signature: canvas.toDataURL('image/png'),
        isEmpty: isEmpty
      });
    }
  }

  if (window.Retool) {
    window.Retool.subscribe(function(model) {
      if (model.clearSignature) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isEmpty = true;
        hint.style.display = '';
      }
      if (model.penColor) colorPicker.value = model.penColor;
      if (model.strokeWidth) strokeSize.value = model.strokeWidth;
    });
  }
</script>
</body>
</html>
*/
