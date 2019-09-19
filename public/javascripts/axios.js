class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  createOne = eventData => {
    axios.post(`${this.BASE_URL}/create-event`, eventData)
    .then(console.log('yess event'))
    .catch(err => console.log(err));
  }

  createOneCake = cakeData => {
    axios.post(`${this.BASE_URL}/create-cake`, cakeData)
    .then(console.log('yess cake'))
    .catch(err => console.log(err));
  }

  createOneFurniture = furnitureData => {
    axios.post(`${this.BASE_URL}/create-furniture`, furnitureData)
    .then(console.log('this works furnitura'))
    .catch(err => console.log(err));
  }

  createOnePhoto = photoData => {
    axios.post(`${this.BASE_URL}/create-photo`, photoData)
    .then(console.log('this works photiño'))
    .catch(err => console.log(err));
  }
}