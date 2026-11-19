// Saqer Budget – API for the phone app
// Add this as a NEW script file in Apps Script (+ → Script → name it "Api").
// It uses the functions already in Code.gs (getSummary, addExpense, undoLast, getPlan, savePlan).

// Your secret code. The phone app asks for it once.
const APP_KEY = 'sb-uViwPc3uO0aqimxF';

function doPost(e) {
  let req = {};
  try {
    req = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'Bad request' });
  }
  if (req.key !== APP_KEY) return json_({ ok: false, error: 'Wrong code' });

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    let data;
    switch (req.action) {
      case 'summary':  data = getSummary(); break;
      case 'add':      data = addExpense(req.category, req.amount, req.note); break;
      case 'undo':     data = undoLast(); break;
      case 'getPlan':  data = getPlan(); break;
      case 'savePlan': data = savePlan(req.amounts, req.available); break;
      default: throw new Error('Unknown action');
    }
    return json_({ ok: true, data: data });
  } catch (err) {
    return json_({ ok: false, error: err.message });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
