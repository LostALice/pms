<template>
    <div>
        <form>
            <div class="card shadow my-3">
                <div class="card-header pt-3">
                    <div class="row">
                        <div class="col col-sm-1">
                            <p class="text-primary col-1 w-100" style="font-size: 25px;"><strong style="font-size: 28px;">Title:</strong></p>
                        </div>
                        <div class="col"><input class="form-control w-100 shadow-none" type="text"></div>
                    </div>
                </div>
                <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="btn-group" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-bold"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-italic"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-strikethrough"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-underline"></i></button></div>
                                <div class="btn-group" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-image"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-link"></i></button><button class="btn btn-primary shadow-none" type="button"><i class="fa fa-upload"></i></button></div>
                            </div>
                            <div class="col" style="text-align: right;">
                                <div class="btn-group" role="group"><button class="btn btn-primary shadow-none" type="submit"><i class="fa fa-save"></i>&nbsp; Save</button></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <hr><textarea class="form-control shadow-none" rows="19"></textarea>
                            </div>
                        </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

</script>