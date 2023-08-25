<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body mh-100">
                <div class="row">
                    <div class="col-xxl-5 text-center align-middle">
                        <p class="lead" style="font-size: 24px;">可選擇學生</p>
                    </div>
                    <div class="col-xxl-5 offset-xxl-2 text-center align-middle">
                        <p class="lead" style="font-size: 24px;">已選學生</p>
                    </div>
                </div>
                <div class="row pb-2">
                    <div class="col text-center align-middle"><input type="text" class="form-control shadow-none"></div>
                    <div class="col-xxl-2 text-center pt-2">
                        <p class="lead" style="font-size: 18px;">搜尋</p>
                    </div>
                    <div class="col text-center align-middle"><input type="text" class="form-control shadow-none"></div>
                </div>
                <div class="row">
                    <div class="col"><select class="form-select-lg mx-0" size="20" multiple="" style="width: 100%;height: 100%;">
                            <optgroup>
                                <option value="1" selected="">D1234564 TyrantRey</option>
                                <option value="2" selected="">D1234565 Flandre</option>
                                <option value="3" selected="">D1234566 Elaina</option>
                            </optgroup>
                        </select></div>
                    <div class="col-xxl-2 text-center border-start-warning">
                        <p class="lead mt-3" style="font-size: 18px;">選擇全部</p>
                        <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-double-left"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-double-right"></i></button></div>
                        <p class="lead mt-3" style="font-size: 18px;">選擇已選</p>
                        <div class="btn-group w-100" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-left"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-angle-right"></i></button></div>
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-primary shadow-none my-3" type="button">
                                <i class="fa fa-minus-square-o"></i>
                                &nbsp;Clear
                            </button>
                            <button class="btn btn-primary shadow-none my-3" type="button">
                                <i class="fa fa-save"></i>
                                &nbsp;Save
                            </button>
                        </div>
                        <router-link class="btn btn-primary shadow-none w-100" role="button" to="import">
                            <i class="fa fa-download"></i>
                            &nbsp;Import from excel
                        </router-link>
                    </div>
                    <div class="col"><select class="form-select-lg" size="20" multiple="" style="width: 100%;height: 100%;">
                            <optgroup>
                                <option value="1" selected="">D1234567 Alice</option>
                                <option value="2" selected="">D1234568 Aki</option>
                                <option value="3" selected="">D1234569 Iris</option>
                            </optgroup>
                        </select></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>