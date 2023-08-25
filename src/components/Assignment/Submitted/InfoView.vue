<template>
    <div>
        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">Submitted&nbsp;Assignments Info</p>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 text-nowrap">
                        <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                    <option value="10" selected="">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>&nbsp;</label></div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"></label></div>
                    </div>
                </div>
                <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                    <table class="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th style="width: auto;background: #dcd9d9;" data-sortable="true"><strong>Submitted Assignment</strong></th>
                                <th style="width: auto;background: #dcd9d9;" data-sortable="true"><strong>Group</strong></th>
                                <th style="width: auto;background: #dcd9d9;" data-sortable="true"><strong>Uploader</strong></th>
                                <th style="width: auto;background: #dcd9d9;" data-sortable="true"><strong>Date<br></strong></th>
                                <th class="col-sm-1" style="width: auto;background: #dcd9d9;" data-sortable="true"><strong>Option<br></strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="../../assignment/submitted/submitted.html">May be this is a submitted assignment<br></a></td>
                                <td href="#">website</td>
                                <td>Aki<br></td>
                                <td>2012/03/29<br></td>
                                <td class="col-sm-1">
                                    <div class="btn-group" role="group"><button class="btn btn-primary shadow-none" type="button"><i class="la la-edit"></i></button><button class="btn btn-primary shadow-none" type="button" style="background: #e74a3b;width: 42px;"><i class="icon ion-android-delete" style="font-size: 17px;"></i></button></div><br>
                                </td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 100</p>
                    </div>
                    <div class="col-md-6">
                        <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul class="pagination">
                                <li class="page-item disabled shadow-none"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
                                <li class="page-item shadow-none"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>