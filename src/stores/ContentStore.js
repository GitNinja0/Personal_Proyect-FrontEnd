import { defineStore } from "pinia";
import axios from 'axios';

export const useContentSaleStore = defineStore('contentSale', {
     state: () => ({
       content: null,
       isLoading: false, 
     }),
     actions: {
       async fetchContentById(id) {
         this.isLoading = true; 
         const response = await axios.get(`http://localhost:8080/api/v1/sale/${id}`);
         this.content = response.data;
         this.isLoading = false; 
     },
   },
  
});