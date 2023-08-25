<template>
    <div class="row mb-3">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" src="assets/img/dogs/image2.jpeg" width="160" height="160">
                    <div class="mb-3"><button class="btn btn-primary btn-sm shadow-none" type="button">Change Photo</button></div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col">
                    <div class="card shadow my-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold" style="font-size: 28px;">User Settings</p>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="username"><strong>Username</strong></label><input class="form-control shadow-none" type="text" id="username" placeholder="name" name="username"></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="email"><strong>Email Address</strong></label><input class="form-control shadow-none" type="email" id="email" placeholder="user@example.com" name="email"></div>
                                    </div>
                                </div>
                                <div class="text-end mb-3"><button class="btn btn-primary btn-sm" type="submit"><i class="fa fa-save"></i>&nbsp;Save</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="card shadow my-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold" style="font-size: 28px;">Change password</p>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3"><label class="form-label" for="address"><strong>Old password</strong></label><input class="form-control shadow-none" type="password" id="address" name="address" show="*" minlength="8" maxlength="50" required=""></div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="city"><strong>New password</strong></label><input class="form-control shadow-none" type="password" id="city" name="city" minlength="8" maxlength="50" required=""></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="country"><strong>Confirm</strong></label><input class="form-control shadow-none" type="password" id="country" name="country" minlength="8" maxlength="50" required=""></div>
                                    </div>
                                </div>
                                <div class="text-end mb-3"><button class="btn btn-primary btn-sm" type="submit"><i class="fa fa-save"></i>&nbsp;Save</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                nid: "",
                password: "",
            }
        },
        name: "ProfileView",
    }
</script>