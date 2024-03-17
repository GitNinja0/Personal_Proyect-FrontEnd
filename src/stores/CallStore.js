import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, reactive, computed } from 'vue'

export const useSaleStore = defineStore('sale', () => {

  const sales = reactive([])
  const isLoading = ref(false)

  const getSales = async () => {

    const uri = import.meta.env.VITE_API_ENDPOINT

    try {
      isLoading.value = true
      
      const options = {
        baseURL: uri
      }

      const response = await axios.get('/sale', options)
      const data = await response.data
      await Object.assign(sales, data)
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }
  }

  const deleteSale = async (id) => {
    const uri = import.meta.env.VITE_API_ENDPOINT
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    try {
      const response = await axios.delete(`/sale/${id}`, options)
      const status = response.status

      if (status == 202) {
        await getSales()
        return true
      }
    } catch (error) {
      console.error('Error Deleting Event:', error);
    }
  }

  return { sales, getSales, deleteSale }
})

export const useRentStore = defineStore('rent', () => {

  const rents = reactive([])
  const isLoading = ref(false)

  const getRents = async () => {

    const uri = import.meta.env.VITE_API_ENDPOINT

    try {
      isLoading.value = true
      
      const options = {
        baseURL: uri
      }

      const response = await axios.get('/rents', options)
      const data = await response.data
      await Object.assign(rents, data)
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }
  }

  const deleteRent = async (id) => {
    const uri = import.meta.env.VITE_API_ENDPOINT
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    try {
      const response = await axios.delete(`/rents/${id}`, options)
      const status = response.status

      if (status == 202) {
        await getRents()
        return true
      }
    } catch (error) {
      console.error('Error Deleting Event:', error);
    }
  }

  return { rents, getRents, deleteRent }
})
