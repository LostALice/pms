<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body mh-100">
                <form>
                    <div class="row">
                        <div class="col">
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
                                <div class="col col-4">
                                    <p style="font-size: 24px;">提交審核要求時間</p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="date"></div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    <p style="font-size: 24px;">教授審核通過時間<br></p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="date"></div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button"><i class="fa fa-save"></i>&nbsp;Save</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>