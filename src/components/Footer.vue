<template>
  <div dark class="h-40 text-gray-400" style="background-color: #001123ad; backdrop-filter:blur(7px); -webkit-backdrop-filter: blur(7px);">
      <div class="container mx-auto flex flex-center fit ">
        <div class="text-center  space-y-3">
           <div> Copyright Morris English Academy &copy; {{new Date().getFullYear()}}. All Rights Reserved </div>
             {{$route.name}}
        </div>
             
      </div>
    </div>   
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>

</style>