<template>
  <div class="edit-record">
      <h3>Edit Farm Record</h3>
      <div class="row">
        <form @submit.prevent="updateRecord" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input disabled type="text" v-model="farmer_id" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input disabled type="text" v-model="phone" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input disabled type="text" v-model="name" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input disabled type="text" v-model="gender" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="type" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="location" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="state_lga" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="market" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="profit" >
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="tax" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="schemes" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="loan" required>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="loan_status" >
            </div>
          </div>
          <button type="submit" class="btn">Update</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
        </form>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-record',
  data (){
      return {
        farmer_id:null,
        phone:null,
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
        this.phone=phone.data().phone
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
  updateRecord(){
     db.collection('records').where('farmer_id','==',this.$route.params.farmer_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update({
        farmer_id:this.farmer_id,
        phone:this.phone,
        gender:this.gender,
        loan:this.loan,
        loan_status:this.loan_status,
        location:this.location,
        market:this.market,
        name:this.name,
        profit:this.profit,
        schemes:this.schemes,
        state_lga:this.state_lga,
        tax:this.tax,
        type:this.type
        })
        .then(() =>{
          this.$router.push({name: 'view-record',
          params: {farmer_id: this.farmer_id}})
        })
      })
    })
     
  }
}
}
</script>