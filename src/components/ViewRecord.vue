<template>
  <div class="view-record">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>{{name}}</h4>
        </li>
        <li class="collection-item">Farm ID#: {{farmer_id}}</li>
        <li class="collection-item">Phone Number: {{phone}}</li>
        <li class="collection-item">Farmer's Gender: {{gender}}</li>
        <li class="collection-item">Type of Agriculture Practised: {{type}}</li>
        <li class="collection-item">Location of Farmland: {{location}}</li>
        <li class="collection-item">State: {{state_lga}}</li>
        <li class="collection-item">Market Information: {{market}}</li>
        <li class="collection-item">Profit Information: {{profit}}</li>
        <li class="collection-item">IGR on Farm proceeds: {{tax}}</li>
        <li class="collection-item">Government Schemes: {{schemes}}</li>
        <li class="collection-item">Government Loans and statuses
          <br>{{loan}}: {{loan_status}}
        </li>
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button @click="deleteRecord" class="btn red">Delete</button>
      <div class="fixed-action-btn">
          <router-link v-bind:to="{name: 'edit-record',
          params:{farmer_id: farmer_id}}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
          </router-link>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-record',
  data (){
      return {
        farmer_id:null,
        phone: null,
        gender:null,
        loan:null,
        loan_status:null,
        location:null,
        market:null,
        name:null,
        profit:null,
        schemes:null,
        state_lga:null,
        tax:null,
        type:null


      }
  },
  beforeRouteEnter(to, from ,next){
    db.collection('records').where('farmer_id', '==', to.params.farmer_id)
.get().then(querySnapshot => {
  querySnapshot.forEach(doc =>{
    next(vm => {
      vm.farmer_id= doc.data().farmer_id,
      vm.phone=doc.data().phone,
      vm.gender=doc.data().gender,
      vm.loan=doc.data().loan,
      vm.loan_status=doc.data().loan_status,
      vm.location=doc.data().location,
      vm.market=doc.data().market,
      vm.name=doc.data().name,
      vm.profit=doc.data().profit,
      vm.schemes=doc.data().schemes,
      vm.state_lga=doc.data().state_lga,
      vm.tax=doc.data().tax,
      vm.type=doc.data().type

    })
  })
})  
},
watch: {
  '$route':'fetchData'
},
methods:{
  fetchData(){
    db.collection('records').where('farmer_id','==',this.$route.params.farmer_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.farmer_id=doc.data().farmer_id
        this.phone=doc.data().phone
        this.gender=doc.data().gender
        this.loan=doc.data().loan
        this.loan_status=doc.data().loan_status
        this.location=doc.data().location
        this.market=doc.data().market
        this.name=doc.data().name
        this.profit=doc.data().profit
        this.schemes=doc.data().schemes
        this.state_lga=doc.data().state_lga
        this.tax=doc.data().tax
        this.type=doc.data().type
      })
    })
  },
  deleteRecord(){
    if(confirm('Are you sure you want to delete this record?')){
      db.collection('records').where('farmer_id','==',this.$route.params.farmer_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete()
        this.$router.push('/')
      })
    })
  }
}
}
}
</script>