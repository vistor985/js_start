function calltest() {
  nam = 'orivan';
  console.log(nam, this);
}

calltest();

class callcls {
  constructor(name) {
    this.name = name;
    console.log('hello clalcls', this);
  }
}
new callcls('Tharos');
