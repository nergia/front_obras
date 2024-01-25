<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>
                <form >
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Name</label>
                            <input type="text" class="form-control" v-model="contact.name" placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" v-model="contact.email" placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Designation</label>
                            <input type="text" class="form-control" v-model="contact.designation"
                                placeholder="Enter Designation">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Contact Number</label>
                            <input type="text" class="form-control" v-model="contact.contact_no"
                                placeholder="Enter Contact Number">
                        </div>
                        <button class="btn btn-primary mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'EditContact',
        data() {
            return {
                contact: {},
                name: '',
                email: '',
                designation: '',
                contact_no: '',
                errors: []
            }
        },
        created(){
            this.getContactById();
        },
        methods: {

            async getContactById(){
                let url=`http://127.0.0.1:8000/api/get_contact/${this.$route.params.id}`;
                await axios.get(url).then(response=>{
                    console.log(response);
                    this.contact = response.data;
                })
            }
        },
        mounted: function(){
            console.log('Edit Component Form Component Loaded...');
        }
    }
</script>