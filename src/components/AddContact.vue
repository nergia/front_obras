<template>
   <div class="container">
    <div class="row">
        <div class="col-md-6">
            <form>
                <fieldset>
                    <div class="form-group">
                        <label class="form-label mt-4">Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-4">Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-4">Designation</label>
                        <input type="text" class="form-control" placeholder="Enter Designation">
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-4">Contact Number</label>
                        <input type="text" class="form-control" placeholder="Enter Designation">
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'AddContact'
}
</script>