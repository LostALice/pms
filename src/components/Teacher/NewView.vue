<template>
    <div>
        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">Teacher list</p>
            </div>
            <div class="card-body mh-100">
                <div class="row">
                    <div class="col-xxl-5">
                        <p class="lead text-center" style="font-size: 25px;">Selectable teacher</p><input type="text" class="form-control mb-3"><select class="form-select-lg mx-0" size="20" multiple="" style="width: 100%">
                            <optgroup label="This is a group">
                                <option value="12" selected="">This is item 1</option>
                                <option value="13">This is item 2</option>
                                <option value="14">This is item 3</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col text-center border-start-warning">
                        <p class="lead mt-5">Move all</p>
                        <div class="btn-group w-100 my-3" role="group"><button class="btn btn-primary shadow-none mb-1" type="button"><i class="fa fa-angle-double-left"></i></button><button class="btn btn-primary shadow-none mb-1" type="button"><i class="fa fa-angle-double-right"></i></button></div>
                        <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none mb-1" type="button"><i class="fa fa-angle-left"></i></button><button class="btn btn-primary shadow-none mb-1" type="button"><i class="fa fa-angle-right"></i></button></div>
                        <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none my-3" type="button"><i class="fa fa-minus-square-o"></i>&nbsp;Clear</button><button class="btn btn-primary shadow-none my-3" type="button"><i class="fa fa-save"></i>&nbsp;Save</button></div><a class="btn btn-primary shadow-none w-100" role="button" href="../../teacher/import-teacher.html"><i class="fa fa-download"></i>&nbsp;Import from excel</a>
                    </div>
                    <div class="col-xxl-5">
                        <p class="lead text-center" style="font-size: 25px;">Selected teacher<br></p><input type="text" class="form-control mb-3"><select class="form-select-lg mx-0" size="20" multiple="" style="width: 100%">
                            <optgroup label="This is a group">
                                <option value="12" selected="">This is item 1</option>
                                <option value="13">This is item 2</option>
                                <option value="14">This is item 3</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>