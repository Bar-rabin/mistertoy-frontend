
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    getRandomToy
}


function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)

}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)

}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function getEmptyToy() {
    return {
        name: '',
        price: ''
    }
}

function getRandomToy() {
    return {
        name: 'Toy-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
        createdAt: Date.now(),
        inStock: true,
        labels: ['Doll', 'Battery Powered', 'Baby']
    }
}


function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}



