class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  createOne = eventData => {
    axios.post(`${this.BASE_URL}/create-event`, eventData)
    .then()
    .catch(err => console.log(err));
  }

  createOneCake = cakeData => {
    axios.post(`${this.BASE_URL}/create-cake`, cakeData)
    .then()
    .catch(err => console.log(err));
  }

  createOneFurniture = furnitureData => {
    axios.post(`${this.BASE_URL}/create-furniture`, furnitureData)
    .then()
    .catch(err => console.log(err));
  }

  createOnePhoto = photoData => {
    axios.post(`${this.BASE_URL}/create-photo`, photoData)
    .then()
    .catch(err => console.log(err));
  }
}