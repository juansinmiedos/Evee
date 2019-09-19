class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  createOne = async (eventData) => {
    axios.post(`${this.BASE_URL}/create-event`, eventData)
    .then(console.log('this works')).catch((err) => {
      console.log(err)
    });
  }

  createOneCake = async (cakeData) => {
    axios.post(`${this.BASE_URL}/create-cake`, cakeData)
    .then(console.log('this works')).catch((err) => {
      console.log(err)
    });
  }

  createOneFurniture = async (furnitureData) => {
    axios.post(`${this.BASE_URL}/create-furniture`, furnitureData)
    .then(console.log('this works')).catch((err) => {
      console.log(err)
    });
  }

  createOnePhoto = async (photoData) => {
    axios.post(`${this.BASE_URL}/create-photo`, photoData)
    .then(console.log('this works')).catch((err) => {
      console.log(err)
    });
  }
}