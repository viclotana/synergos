<template>
  <div class="dashboard">
      <ul class="collection with-header">
          <li 
          class="collection-header"> <h4>Farmers Records</h4>
          <input type="text" v-model="search" placeholder="search states"/>
            </li>
            <li v-for="record in filteredRecords" 
            v-bind:key="record.id"
            class="collection-item ">
            <div class="chip">{{record.farmer_id}}</div>
            {{record.name}} from {{record.state_lga}}

            <router-link class="secondary-content"
            v-bind:to="{name: 'view-record', params:{farmer_id: record.farmer_id}}">
            <i class="fa fa-eye"></i>
            </router-link>
            </li>
      </ul>

      <div class="fixed-action-btn">
          <router-link to="/new" class="btn-floating btn-large red">
          <i class="fa fa-plus"></i>
          </router-link>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data (){
      return {
          records: [],
          search:""

      }
  },
  created(){
      db.collection('records').orderBy('farmer_id').get().then(querySnapshot =>{
          querySnapshot.forEach(doc =>{
              //console.log(doc.data())
              const data = {
                  'id':doc.id,
                  'farmer_id':doc.data().farmer_id,
                  'phone':doc.data().phone,
                  'gender':doc.data().gender,
                  'loan':doc.data().loan,
                  'loan_status':doc.data().loan_status,
                  'location':doc.data().location,
                  'market':doc.data().market,
                  'name':doc.data().name,
                  'profit':doc.data().profit,
                  'schemes':doc.data().schemes,
                  'state_lga':doc.data().state_lga,
                  'tax':doc.data().tax,
                  'type':doc.data().type

              }
              this.records.push(data)
          })
      })
  },
  computed:{
      filteredRecords: function(){
          return this.records.filter((record) =>{
              return record.state_lga.match(this.search)
          
      });
    }
  }
}
</script>

