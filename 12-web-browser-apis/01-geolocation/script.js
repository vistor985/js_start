// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log('你当前的位置是：');
//   console.log(`纬度：${crd.latitude}`);
//   console.log(`经度：${crd.longitude}`);
//   console.log(`海拔约 ${crd.accuracy} 米。`);
// }

// function error(err) {
//   console.warn(`错误（${err.code}）：${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

function miki(dike) {
  const seel = {
    adc: 'feike',
  };
  dike(seel);
}

function dike(seel) {
  console.log(seel.adc);
}
miki(dike);
