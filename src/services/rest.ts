import axios from 'axios'

export const rest = axios.create({
  baseURL: 'http://localhost:8081/ahead',
  headers: { 'Content-Type': 'application/json' }
})