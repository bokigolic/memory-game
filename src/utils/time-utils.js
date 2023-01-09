export const miliSecondsToLongTime = (ms) => {
  // converting miliseconds to HH.mm.ss.SSS format
  /*
  HH 
  mm
  ss
  SSS
  */

  const d = new Date(ms); // instance Date class


  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const _ms = d.getMilliseconds();





  let HH = '' + h;
  HH = '00' + h;
  HH = HH.slice(-2);


  let mm = "" + m;
  mm = '00' + mm;
  mm = mm.slice(0, 2);

  let ss = "" + m;
  ss = '00' + mm;
  ss = ss.slice(-2);

  let SSS = "" + _ms;
  SSS = '000' + _ms;
  SSS = SSS.slice(-3);





  const longTime = HH + '.' + mm + ':' + ss + '.' + SSS;
  return longTime




}

export const miliSecondsToLongTimeWithoutHours = (ms) => {
  // converting miliseconds to HH.mm.ss.SSS format
  /* 
  mm
  ss
  SSS
  */

  const d = new Date(ms); // instance Date class

  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const _ms = d.getMilliseconds();





  let mm = "" + m;
  mm = '00' + mm;
  mm = mm.slice(0, 2);

  let ss = "" + m;
  ss = '00' + mm;
  ss = ss.slice(-2);

  let SSS = "" + _ms;
  SSS = '000' + _ms;
  SSS = SSS.slice(-3);





  const longTime = mm + ':' + ss + '.' + SSS;
  return longTime




}