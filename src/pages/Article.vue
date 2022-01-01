<template>
    <q-page dark class="container pb-10 pt-20">
        <!-- <div v-if="article.image" class="rounded-3xl overflow-hidden" style="max-height:500px;">
        <q-img :src="article.image" :ratio=4/3 class="object-cover" />
        </div> -->

        <div class="p-5 space-y-3">
           <div class="font-semibold text-3xl text-bigText">{{article.title}}</div>
           <div class="space-x-2 italic text-sectionSubTitle">
               <span>{{article.writtenBy}}</span>
               |
               <span class="font-thin">{{article.createdAt}}</span>
           </div>
           <div v-if="article.subtitle" class="font-semibold text-sectionTitle">{{article.subtitle}}</div>
           <div v-for="(section,i) in article.sections" :key="`section-${i}`" class="text-body">
               {{section}}
           </div>
        </div>

    </q-page>
</template>

<script>
export default {
    setup() {
        return {
            article:{
                id:"iuiuyknhshkdrew5e46e465",
                image:"https://placeimg.com/500/300/nature",
                title:"Rainforests threatened - Deforestation destroys nature",
                subtitle:"This is the subtitle for this article (optional)",
                createdAt:"23 july 2021",
                writtenBy:"John Doe",
                sections:[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium. Euismod nisi porta lorem mollis. Curabitur vitae nunc sed velit dignissim sodales. Iaculis eu non diam phasellus vestibulum lorem. Quam id leo in vitae. Turpis massa tincidunt dui ut. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Velit egestas dui id ornare arcu. Et pharetra pharetra massa massa ultricies. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Sed arcu non odio euismod. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Bibendum arcu vitae elementum curabitur vitae nunc. Ullamcorper sit amet risus nullam eget. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum integer enim neque volutpat.",
                    "Duis convallis convallis tellus id interdum velit laoreet. Integer feugiat scelerisque varius morbi. Et pharetra pharetra massa massa ultricies mi quis. Ultricies leo integer malesuada nunc vel. Sodales ut etiam sit amet nisl. Massa enim nec dui nunc mattis enim ut tellus. Risus nec feugiat in fermentum posuere. A diam sollicitudin tempor id eu nisl nunc mi. Neque ornare aenean euismod elementum nisi quis eleifend quam. Vel quam elementum pulvinar etiam non quam lacus. Fringilla ut morbi tincidunt augue interdum. Semper risus in hendrerit gravida rutrum. Ornare aenean euismod elementum nisi quis. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed.",
                    "Nunc faucibus a pellentesque sit amet porttitor eget. Egestas congue quisque egestas diam in. Nulla aliquet enim tortor at. Ultricies tristique nulla aliquet enim tortor. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Elementum nibh tellus molestie nunc non blandit. Aliquet nec ullamcorper sit amet risus nullam eget. Tellus in metus vulputate eu scelerisque felis. Dolor purus non enim praesent elementum facilisis leo. Gravida rutrum quisque non tellus orci ac auctor augue. Convallis tellus id interdum velit laoreet. Massa tincidunt nunc pulvinar sapien et ligula. Cras tincidunt lobortis feugiat vivamus. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Urna porttitor rhoncus dolor purus non enim. Augue interdum velit euismod in pellentesque. Eget felis eget nunc lobortis. Magnis dis parturient montes nascetur ridiculus mus. Leo in vitae turpis massa sed elementum tempus egestas sed.",
                    "Nibh venenatis cras sed felis eget velit aliquet sagittis id. Diam vulputate ut pharetra sit amet. Nascetur ridiculus mus mauris vitae ultricies. Hac habitasse platea dictumst quisque sagittis purus sit amet. Velit aliquet sagittis id consectetur purus ut faucibus. Amet consectetur adipiscing elit duis. Neque convallis a cras semper auctor neque vitae tempus. Condimentum vitae sapien pellentesque habitant morbi tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Morbi tempus iaculis urna id volutpat lacus laoreet. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Et tortor at risus viverra adipiscing. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Ultrices sagittis orci a scelerisque purus semper. Vehicula ipsum a arcu cursus vitae congue mauris. Vitae sapien pellentesque habitant morbi tristique senectus. Lectus sit amet est placerat in egestas. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.",
                    "Ullamcorper eget nulla facilisi etiam dignissim. Pellentesque habitant morbi tristique senectus et netus et. Tincidunt vitae semper quis lectus nulla. Nec ullamcorper sit amet risus nullam. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. At tellus at urna condimentum mattis pellentesque. Quis vel eros donec ac odio tempor orci dapibus. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id volutpat lacus laoreet non curabitur. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Cras pulvinar mattis nunc sed blandit. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet aliquam id diam maecenas. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Sed arcu non odio euismod lacinia. Id diam vel quam elementum pulvinar. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi."
                ]
            }
        }
    },
}
</script>