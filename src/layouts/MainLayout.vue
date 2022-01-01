<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="$route.name!='home'"  class="h-24 py-5" style="background-color: #001123ad; backdrop-filter:blur(7px); -webkit-backdrop-filter: blur(7px);">
      <q-toolbar dark class=" container mx-auto flex items-end " >
        
     
        <q-toolbar-title class="my-font font-semibold text-4xl flex items-end text-white">
         <a href="/home#hero">MORRIS<span class="text-brand">.</span></a>
        </q-toolbar-title>
     
        <div v-if="$q.screen.gt.xs" class="space-x-5 flex items-start text-base font-semibold text-gray-600">
         
         <!-- <scrollactive>
           <a href="#home" class="router-link-active">Home</a>
            <a href="#about-us" class="router-link-active">About Us</a>
             <a href="#contact" class="router-link-active">Contact</a>
         </scrollactive> -->
          
          <router-link  v-for="link in links" :key="link.name"  :to="link.path" :class="{'active-link' : $route.path.includes(link.path)}">{{link.name}}</router-link>
         
        </div>


        <div v-else>
         
          <q-btn
                @click="rightDrawerOpen = !rightDrawerOpen"
                flat
                rounded
                icon="menu"
                dense
              >
                
              </q-btn>

              <!-- <q-slide-transition :duration="100">
                <div v-show="showMenu" class="bg-dark">
                     
                     <div
                  
                  class="bg-black h-screen bg-opacity-10 origin-top-right absolute right-0 p-5  rounded-md shadow-lg flex flex-center "
                  style="min-width:200px;"
                >

                <div class="space-y-5">
                    <div
                    v-for="link in links"
                    :key="link.name"
                    class="flex items-center justify-center"
                  >
                    <router-link :to="link.path">
                      <span>{{ link.name }}</span>
                    </router-link>
                  </div>
                </div>
               
                  
                 
                </div>

                </div>
                
              </q-slide-transition> -->

        </div>
      </q-toolbar>
    </q-header>

     <q-drawer dark  v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
     

      <div class="flex flex-center p-10">
         <q-icon name="close" size="sm" class="absolute-top-right m-5 cursor-pointer" @click="rightDrawerOpen=false"/>
         <div class="space-y-8 text-lg absolute-center">
                    <div
                    v-for="link in links"
                    :key="link.name"
                    class="flex items-center justify-center text-gray-400"
                  >
                    <router-link  :to="link.path" :class="{'active-link' : $route.path.includes(link.path)}">{{link.name}}</router-link>
                  </div>
                </div>
      </div>
       

    </q-drawer>

   

    <q-page-container class="bg-secondary">
      
            <router-view />
     
     <Footer />
     
    </q-page-container>

    


  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'

import Footer from '../components/Footer.vue'

// import VueScrollactive from 'vue-scrollactive';

// var Vue = require('vue')

// Vue.use(VueScrollactive);

export default defineComponent({
  name: 'MainLayout',

  components: {
    Footer
   // EssentialLink
  },

  methods:{
    
  },

  data(){
    return{
      showMenu:false,
      rightDrawerOpen: false,
     
    }
  },

  setup () {
    // const rightDrawerOpen = ref(false)

    return {
     
     links:[
       {
         name:"Home",
         path:"/home#hero"
       },
       {
         name:"Courses",
          path:"/courses"
       },
       
       {
         name:"Blog",
         path:"/blog"
       },
       {
         name:"Videos",
         path:"/videos"
       },
     ],
     
    }
  }
})
</script>


<style>
.active-link  {
  @apply border-b-2 border-brand text-gray-100 pb-1;
 
}
</style>