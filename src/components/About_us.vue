<template>
  <div class="py-10 text-gray-900">



   <div class="pt-20 pb-10 space-y-10 text-center flex flex-col justify-center container">
       <div class="text-4xl text-brand">About Us</div>
       <div v-html="aboutUsContent"  class="text-sm text-body mx-auto" style="max-width:800px">
        
         
        
       </div>

   </div>
   
   <!-- <div class="py-10 container space-y-10">
      <div class="text-center space-y-3">
        <div class="text-2xl text-bigText">Our Team</div>
        <div class="text-sm text-sectionSubTitle">Meet our exceptionally talented and experienced team</div>
      </div>
      <div class="flex flex-wrap justify-center">
         <div v-for="(member,i) in members" :key="`member${i}`" class="mx-10 space-y-4 p-5 flex-col text-center flex justify-center" style="max-width:300px;">
             <img :src="member.pic" class="rounded-full overflow-hidden w-36 h-36 mx-auto" />
              <div class="text-sectionTitle text-lg font-semibold w-full">{{member.name}}</div>
              <div  class="font-bold text-sectionSubTitle">{{member.title}}</div>
              <div class="text-body">{{member.desc}}</div>
              <div class="flex justify-evenly w-full text-sectionSubTitle">
                <router-link v-for="link in member.links" :key="link.path"  :to="link.path">
                    <q-icon size="sm"  :name="link.icon" class="cursor-pointer text-body hover:text-sectionSubTitle" />
                   
                </router-link>
                
              </div>
         </div>
      </div>
   </div> -->
      
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About_Us',
  data(){
    return {

      aboutUsContent:"Morris Anglo-Indian English Academy will power you into that elite class of English speakers and practitioners by teaching you the English Language quickly, easily and effectively.<br><br>ARCANGELS Anglo–Indian Pre-School ,established some 15 years ago in the year 2004, by lady edu- entrepreneur Yasmin Ann Morris, pioneered the concept of providing Pre-schoolers and Kindergartners with high quality education and care ,all within the framework of English.<br><br>Morris Anglo-Indian English Academy will take you into the fascinating world of English by creating an environment that effortlessly internalise grammar,vocabulary,reading,writing and speaking skills, all with the objective of providing you with a well rounded knowledge of the English Language and readying you to face any situation where knowledge of the English Language is essential",
      members:[
        {
          pic:"https://cdn.quasar.dev/img/avatar1.jpg",
          name:"Jefrey Brown",
          title:"Founder",
          desc: "More than 15 years experience in teaching english",
         links: [
             {
              icon : "fab fa-facebook",
              path:"/facebook"
              },
              {
              icon : "fab fa-linkedin",
              path:"/linkedin"
              },
              {
              icon : "fab fa-twitter",
              path:"/twitter"
              },
              {
              icon : "fab fa-instagram",
              path:"/instagram"
              },

          ]

        },

        {
          pic:"https://cdn.quasar.dev/img/avatar2.jpg",
          name:"Jefrey Brown",
          title:"Founder",
          desc: "More than 15 years experience in teaching english",
          links: [
             {
              icon : "fab fa-facebook",
              path:"/facebook"
              },
              {
              icon : "fab fa-linkedin",
              path:"/linkedin"
              },
              {
              icon : "fab fa-twitter",
              path:"/twitter"
              },
              {
              icon : "fab fa-instagram",
              path:"/instagram"
              },

          ]

        },

        {
          pic:"https://cdn.quasar.dev/img/avatar3.jpg",
          name:"Jefrey Brown",
          title:"Founder",
          desc: "More than 15 years experience in teaching english",
          links: [
             {
              icon : "fab fa-facebook",
              path:"/facebook"
              },
              {
              icon : "fab fa-linkedin",
              path:"/linkedin"
              },
              {
              icon : "fab fa-twitter",
              path:"/twitter"
              },
              {
              icon : "fab fa-instagram",
              path:"/instagram"
              },

          ]

        }
      ]
    }
  }
})
</script>

<style>

</style>
