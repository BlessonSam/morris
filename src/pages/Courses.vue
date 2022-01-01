<template>
    <q-page dark class="py-10">
       <div class="container text-center pb-10 pt-20 space-y-3">
           <div class="text-semibold text-4xl text-bigText">Our English Learning Products</div>
           <div class="text-xs text-sectionSubTitle">Our specialised programmes in ENGLISH </div>
       </div>
       <div class="container pt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4 gap-12">
            <div v-for="product in products" :key="product.title" dark class="m-3 md:m-5 lg:m-7 p-10 rounded-2xl flex content-between flex-wrap bg-dark  hover:shadow-2xl space-y-8 overflow-hidden" style="max-width:300px; min-width:200px; max-height:600px; min-height:300px;">
           <div class="space-y-3 w-full overflow-hidden text-ellipsis" style="max-height:200px;">
              <div class="text-2xl font-semibold cursor-pointer text-sectionTitle" @click="goToProduct(product.id)">{{product.title}}</div>
              <div class="text-sm text-sectionSubTitle text-ellipsis overflow-hidden">{{product.content}}</div>
           </div>
           
           <div class="flex justify-between w-full">
             <div @click="goToProduct(product.id)" class="font-bold cursor-pointer text-sectionTitle">Know More</div>
             <div @click="goToProduct(product.id)" class="text-brand cursor-pointer"><q-icon name="arrow_forward" size="sm" /></div>
           </div>
         </div>
       </div>

       


    </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {

    setup () {
  const $q = useQuasar()
  const data = ref(null)

  function loadData () {
      console.log("running loadData")
    api.get('/courses/')
      .then((response) => {
          console.log("success",response)
        data.value = response.data
      })
      .catch(() => {
          console.log('error')
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }

  console.log(data);

  return { data, loadData }
   },   
  data() {
      return {
           products: [
        {
          id:"dhgfgfd56456",
          title:"IELTS (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etsssssssssssss sssssssss ssssssssss ssssssssssssss sssssssssssss ssssssss sssssssssss sssssssss ssssss sssssssss ssss ssssss sssss ssss iam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        }, 
        {
          id:"dhgfgfd56456",
          title:"OET (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
         {
          id:"dhgfgfd56456",
          title:"COMMUNICATON SKILLS",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
        {
          id:"dhgfgfd56456",
          title:"IELTS (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. tra vel nibh sit amet, tincidunt posuere nulla."
        },
        {
          id:"dhgfgfd56456",
          title:"OET (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
         {
          id:"dhgfgfd56456",
          title:"COMMUNICATON SKILLS",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
        {
          id:"dhgfgfd56456",
          title:"IELTS (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
        {
          id:"dhgfgfd56456",
          title:"OET (ONLINE AND CLASSROOM)",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
         {
          id:"dhgfgfd56456",
          title:"COMMUNICATON SKILLS",
          content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."
        },
      ],
      }
  },
  methods:{
      goToProduct(productId){
      this.$router.push({
        path:`/courses/${productId}`
      })
    },
  },

  mounted(){
      this.loadData();
  }
}
</script>

<style>
.totoptransparent-bg {
  background-image: linear-gradient(to bottom, rgba(245, 245, 248, 0), #000c19);
}

</style>