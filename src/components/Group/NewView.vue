<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col-md-6 text-nowrap">
                        <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
                    </div>
                    <div class="col-md-6 text-md-end dataTables_filter mt-1">
                        <div class="btn-group" role="group">
                            <router-link :to="`${$route.path}/new`" class="btn btn-primary btn-sm d-none d-sm-inline-block shadow-none" role="button">
                                <i class="fas fa-plus-circle fa-sm text-white-50"></i>
                                新增
                            </router-link>
                            <button @click="exportPage" class="btn btn-primary btn-sm d-none d-sm-inline-block shadow-none" role="button">
                                <i class="fas fa-download fa-sm text-white-50"></i>
                                匯出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body mh-100">
                <form>
                    <div class="row">
                        <div class="col">
                            <div class="container mw-100 h-100">
                                <div class="row">
                                    <div class="col col-4">
                                        <p style="font-size: 24px;">小組名稱</p>
                                    </div>
                                    <div class="col"><input class="form-control w-100 shadow-none" type="text"></div>
                                </div>
                                <div class="row">
                                    <div class="col col-4">
                                        <p style="font-size: 24px;">教授</p>
                                    </div>
                                    <div class="col"><input class="form-control w-100 shadow-none" type="number"></div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></form>
                    <div class="row">
                        <div class="col-xxl-5 text-center align-middle">
                            <p class="lead" style="font-size: 24px;">Selectable student</p>
                        </div>
                        <div class="col-xxl-5 offset-xxl-2 text-center align-middle">
                            <p class="lead" style="font-size: 24px;">Selected student</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center align-middle"><input class="form-control form-control shadow-none" type="text"></div>
                        <div class="col-xxl-2 text-center pt-2">
                            <p class="lead" style="font-size: 18px;">Search</p>
                        </div>
                        <div class="col text-center align-middle"><input class="form-control form-control shadow-none" type="text"></div>
                    </div>
                    <div class="row">
                        <div class="col"><select class="form-select form-select-lg mx-0" size="20" multiple="" style="width: 100%;height: 100%;">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">This is item 1</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                            </select></div>
                        <div class="col-xxl-2 text-center border-start-warning">
                            <p class="lead mt-3" style="font-size: 18px;">Select all</p>
                            <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-double-left"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-double-right"></i></button></div>
                            <p class="lead mt-3" style="font-size: 18px;">Select selected</p>
                            <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-left"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-right"></i></button></div>
                            <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none my-3" type="button"><i class="fa fa-minus-square-o"></i>&nbsp;Clear</button><button class="btn btn-primary shadow-none my-3" type="button"><i class="fa fa-save"></i>&nbsp;Save</button></div>
                        </div>
                        <div class="col"><select class="form-select form-select-lg" size="20" multiple="" style="width: 100%;height: 100%;">
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

<script>

</script>