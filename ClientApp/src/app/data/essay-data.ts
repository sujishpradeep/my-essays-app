const para = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    numberInStock: 5,
    dailyRentalRate: 2.5
  }
];

export function getParas() {
  return para;
}

export function getPara(id) {
  return para.find(m => m._id === id);
}

export function savePara(para) {
  let paraInDb = para.find(m => m._id === para._id) || {};
  paraInDb.title = para.title;
  paraInDb.numberInStock = para.numberInStock;
  paraInDb.dailyRentalRate = para.dailyRentalRate;

  if (!paraInDb._id) {
    paraInDb._id = Date.now().toString();
    para.push(paraInDb);
  }

  return paraInDb;
}

export function deletePara(id) {
  let paraInDb = para.find(m => m._id === id);
  para.splice(para.indexOf(paraInDb), 1);
  return paraInDb;
}
