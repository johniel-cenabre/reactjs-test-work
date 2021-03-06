const HOST = 'localhost'
const PORT = 8080
const PATH = '/api/shipments'
const URL = 'http://'+HOST+':'+PORT+PATH

function getShipments(callback) {
  fetch(URL)
    .then(res => res.json())
    .then(data => callback(data))
}

export default getShipments