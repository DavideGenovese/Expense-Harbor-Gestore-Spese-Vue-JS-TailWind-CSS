<script>
import CardAbout from "@/components/CardAbout.vue"
export default {  
  components:{CardAbout},
  data(){
    return {  
      users:[{  
        id:1,
        nominativo:"Davide Genovese", 
        github:"https://github.com/DavideGenovese",
        linkedin:"https://www.linkedin.com/in/davide-genovese-68b9201b8/",
        email:"mailto: davide.genovese1395@gmail.com"
      },
      {  
        id:2,
        nominativo:"Claudio Simone Marotta", 
        github:"https://github.com/claudiosm10",
        linkedin:"https://www.linkedin.com/in/claudio-marotta-1a652a1a1/",
        email:"mailto: claudiomarotta10@gmail.com"
      },
      {  
        id:3,
        nominativo:"Kadrije Kashari", 
        github:"https://github.com/Kadrije",
        linkedin:"https://www.linkedin.com/in/kadrije-kashari-6597641b1",
        email:"mailto: k.kashari1994@gmail.com"
      },
      {  
        id:4,
        nominativo:"Aurora Picano", 
        github:"https://github.com/AuroraPicano",
        linkedin:"https://www.linkedin.com/in/aurora-picano-b350b32b6/",
        email:"mailto: aurorapicano3@gmail.com"
      },
      {  
        id:5,
        nominativo:"Diana Pistillo", 
        github:"https://github.com/dp2ysv",
        linkedin:"www.linkedin.com/in/diana-pistillo-3aba5a262",
        email:"mailto: dianapistillo@gmail.com"
      }
    ]
    }
  }
}
</script>


<template>
  
  <div
    class="bg-[#111827] grid grid-cols-1 gap-4 max-w-[80%] mx-auto md:grid-cols-2 lg:grid-cols-3">
    <CardAbout :item="users[0]"/>
    <CardAbout :item="users[1]"/>
    <CardAbout :item="users[2]"/>
    <CardAbout :item="users[3]"/>
    <CardAbout :item="users[4]"/>

  </div>
</template>
