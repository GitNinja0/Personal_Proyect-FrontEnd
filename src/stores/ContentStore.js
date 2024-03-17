// import { defineStore } from "pinia";
// import { Axios } from "axios";

// export const useContentStore = defineStore('content', {
//     state: () => ({
//       content: null,
//       isLoading: false, 
//     }),
//     actions: {
//       async fetchContentById(id_sale) {
//         this.isLoading = true; 
//         const response = await axios.get(`http://localhost:8080/api/v1/allevents/${id_sale}`);
//         this.content = response.data;
//         this.isLoading = false; 
//     },
//   },
  
//   });