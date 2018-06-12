<template>
  <div class="new-record">
      <h3>New Farm Record</h3>
      <div class="row">
        <form @submit.prevent="saveRecord" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="farmer_id" required>
              <label>Farm ID#</label>
            </div>
             <div class="input-field col s12">
              <input type="text" v-model="phone" required>
              <label>Phone Number</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="name" required>
              <label>Name</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="gender" required>
              <label>Gender</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="type" required>
              <label>Type of Agriculture</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="location" required>
              <label>Location of Farm</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="state_lga" required>
              <label>State of Farmer</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="market" required>
              <label>Market Information</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="profit" >
              <label>Annual Profit Recorded</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="tax" required>
              <label>IGR on Farm Proceeds</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="schemes" required>
              <label>Government Schemes Information</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="loan" required>
              <label>Did the Farmer collect Agricultural Loan?</label>
            </div>
          </div>
           <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="loan_status" >
              <label>Government Loan Status</label>
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
        </form>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'new-record',
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
  methods: {
    saveRecord(){
      db.collection('records').add({
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
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(err))
    }
  }
}
</script>