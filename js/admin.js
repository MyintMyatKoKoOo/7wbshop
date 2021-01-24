$(document).ready(function() {
    scrollchg();
    searchloader();
    search();
    chart();
    chart1();
    chart2();
    chart3();
    successview();
    sidemenu();
    todayalldatascount();
    getallcountwithdate();
});

function searchloader() {
    $("#searchform").submit(function() {
        $(".loaderwrap").fadeIn();
    });
    setTimeout(() => {
        $(".loaderwrap").fadeOut();
    }, 2000)

}

function previewimage() {
    if ($("#admincreate__productimg").length) {
        $("#admincreate__productimg").change(function() {
            const file = this.files[0];
            if (file) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", function() {
                    $("#createimgpreview").attr("src", this.result);
                });
            }
        })
    }
    if ($(".imgeditproduct").length) {
        $(".imgeditproduct").change(function() {
            const fileedit = this.files[0];
            if (fileedit) {
                let reader = new FileReader();
                reader.readAsDataURL(fileedit);
                reader.addEventListener("load", function() {
                    $("#createimgpreviewedit").attr("src", this.result);
                });
            }
        });
    }

}
previewimage();

function productRestore(tar, id) {
    Swal.fire({
        title: 'Are you sure want to restore',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "productRestore",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });
}

function userRestore(tar, id) {
    Swal.fire({
        title: 'Are you sure want to restore?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "userRestore",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });
}

function orderRestore(tar, id) {
    Swal.fire({
        title: 'Are you sure want to restore?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "orderRestore",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }

            });
        }
    });
}

function roleRestore(tar, id) {
    Swal.fire({
        title: 'Are you sure want to restore?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "roleRestore",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });
}

function categoryRestore(tar, id) {
    Swal.fire({
        title: 'Are you sure want to restore?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "categoryRestore",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });
}

function productDelete(tar, id) {
    Swal.fire({
        title: 'Are you sure want to delete?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "productDelete",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {

                }
            });
        }
    });
}

function userDelete(tar, id) {
    Swal.fire({
        title: 'Are you sure want to delete?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "userDelete",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {

                }
            });
        }
    });
}

function orderDelete(tar, id) {
    Swal.fire({
        title: 'Are you sure want to delete?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "orderDelete",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {

                }
            });
        }
    });
}

function roleDelete(tar, id) {
    Swal.fire({
        title: 'Are you sure want to delete?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "roleDelete",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {

                }
            });
        }
    });
}

function categoryDelete(tar, id) {
    Swal.fire({
        title: 'Are you sure want to delete?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "categoryDelete",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            $(tar).parent().parent().remove();
                        });
                    } else {
                        Swal.fire(resdata.message, "", "error")
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });
}

function paginationforproduct(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformforproduct",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firstp = "";
            let secoundp = "";
            datas.forEach((value) => {
                firstp += ` <tr>
                                <th scope="row" id="p${value.id}"><a style="color:#000" href="#pp${value.id}">${value.id}</a></th>
                                <td>${value.brand}</td>
                                <td>${value.about}</td>
                                <td>${value.category_id}</td>
                                <td>
                                    <img src="" alt="" width="70px" height="70px">
                                </td>
                                <td>${value.price}</td>
                            </tr>`;
                secoundp += `<tr>
                                <th scope="row" id="pp${value.id}">${value.id}</th>
                                <td>${value.color}</td>
                                <td>${value.size}</td>
                                <td>${value.state}</td>
                                <td>${value.created}</td>
                                <td>${value.modified_at}</td>
                                <td>
                                    <button class="btn-success mt-2" onclick="productEdit(${value.id})">Edit</button>
                                    <button class="btn-danger mt-2" onclick="productTrash(this,${value.id})">Delete</button>
                                </td>
                            </tr>`;
            });
            $("#secoundp").html(secoundp);
            $("#firstp").html(firstp);

            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.warn(res);
        }
    });

}

function paginationforuser(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "POST",
        data: {
            action: "getroles"
        },
        success: function(res) {
            userdatashow(tar, id, JSON.parse(res));
        },
        error: function(res) {
            console.log('errorrole')
        }
    });

}

function userdatashow(tar, id, roles) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformforuser",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firststr = "";
            datas.forEach((value) => {
                let option = "";
                roles.forEach((role) => {
                    if (role.id == value.role_id) {
                        option += `<option value="${role.id}" selected>${role.name}</option>`;
                    } else {
                        option += `<option value="${role.id}">${role.name}</option>`;
                    }
                });
                firststr += ` <tr>
                                <th scope="row">${value.id}</th>
                                <td>${value.name}</td>
                                <td>${value.email}</td>
                                <td>
                                <select name="" id="userroleupdate" onchange="userroleupdate(this,${value.id});">
                                   ${option}
                                </select>
                                </td>
                                <td>${value.created_at}</td>
                                <td>
                                    <button class="btn-danger mt-2" onclick="userban(this,${value.id});">Ban</button>
                                </td>
                            </tr>`;
            });
            $("#firstuser").html(firststr);
            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.log(res);
        }
    });

}

function paginationfororderitem(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "POST",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformfororderitem",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firststr = "";
            datas.forEach((value) => {
                firststr += `
                <tr>
                    <th scope="row">${value.id}</th>
                    <td><a style="color:#000" href="#p${value.product_id}">${value.product_id}</a></td>
                    <td><a style="color:#000" href="#o${value.order_id}">${value.order_id}</a></td>
                    <td>${value.quantity}</td>
                    <td>${value.created_at}</td>
                </tr>
                `
            });
            $("#firstorderitem").html(firststr);
            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.warn(res);
        }
    });
}

function paginationfororder(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "POST",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformfororder",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firststr = "";
            datas.forEach((value) => {
                firststr += `
                <tr>
                    <th scope="row" id="o${value.id}">${value.id}</th>
                    <td>${value.address}</td>
                    <td>${value.phone}</td>
                    <td>${value.total}</td>
                    <td>
                        <span id="successpay_view">
                        <img src="" alt="" width="70px" height="70px">
                        </span>
                    </td>
                    <td>
                    ${value.created_at}
                    </td>
                    <td>`;
                if (value.state == 1) {
                    firststr += `<button class="btn-warning text-white" onclick="orderstatechange(${value.id})">Cancle</button> </td>
                            </tr>`;
                } else {
                    firststr += `<button class="btn-success" onclick="orderstatechange(${value.id})">Confirm</button> </td>
                             </tr>`;
                };
            });
            $("#firstorder").html(firststr);
            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.warn(res);
        }
    });
}

function paginationforrole(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "POST",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformforrole",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firststr = "";
            datas.forEach((value) => {
                firststr += `
                <tr>
                    <th scope="row" >${value.id}</th>
                    <td id="rol${value.id}">${value.name}</td>
                    <td>${value.created_at}</td>
                    <td>
                        <button class="btn-success mt-2" onclick="roleEdit(${value.id})">Edit</button>
                        <button class="btn-danger mt-2" onclick="roleTrash(this,${value.id})">Delete</button>
                    </td>
                </tr>`;
            });
            $("#firstrole").html(firststr);
            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.warn(res);
        }
    });
}

function paginationforcategory(tar, id) {
    $.ajax({
        url: "/public/adminapi",
        type: "POST",
        beforeSend: function() {
            $(".loaderwrap").fadeIn();
        },
        data: {
            action: "paginationByformforcategory",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            let firststr = "";
            datas.forEach((value) => {
                firststr += `
                <tr>
                    <th scope="row" >${value.id}</th>
                    <td id="cat${value.id}">${value.name}</td>
                    <td>${value.created_at}</td>
                    <td>
                        <button class="btn-success mt-2" onclick="categoryEdit(${value.id})">Edit</button>
                        <button class="btn-danger mt-2" onclick="categoryTrash(this,${value.id})">Delete</button>
                    </td>
                </tr>`;
            });
            $("#firstcate").html(firststr);
            $(".loaderwrap").fadeOut();
        },
        error: function(res) {
            console.warn(res);
        }
    });
}

function orderstatechange(id) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        data: {
            action: "orderstatechange",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            if (datas.success) {
                // console.log($(tar).text());
                location.reload();
            } else {

            }
        },
        error: function(res) {
            console.log(res);
        }
    });
}

function callImageInput() {
    $("#admincreate__productimg").click();
}

function productUpdate(event) {
    event.preventDefault();
    $.ajax({
        url: "/public/admin/update/product",
        type: "post",
        contentType: false,
        processData: false,
        data: new FormData($("#myform").get(0)),
        success: function(res) {
            $("#productEditModal").modal("hide");
            location.reload();
        },
        error: function(res) {
            console.warn(res);
        }
    });
}

function roleUpdate(event) {
    event.preventDefault();
    if ($("#editrolename").val().trim() === "") {
        alert("Role name required!");
    } else {
        let id = $("#editroleid").val();
        let name = $("#editrolename").val();
        $.ajax({
            url: "/public/adminapi",
            type: "post",
            data: {
                action: "updaterole",
                datas: id + "-" + name
            },
            success: function(res) {
                let datas = JSON.parse(res);
                if (datas.success) {
                    $("#emptyEditModal").modal("hide");
                    $("#rol" + id).text(name);
                    Swal.fire(
                        datas.message,
                        "",
                        'success'
                    ).then(() => {
                        location.reload();
                    });

                } else {
                    Swal.fire('Error', '', 'info')
                }
                // $("#productEditModal").modal("hide");
                // location.reload();
            },
            error: function(res) {
                console.warn(res);
            }
        });
    }

}

function categoryUpdate(event) {
    event.preventDefault();
    if ($("#editcategoryname").val().trim() === "") {
        alert("Category name required!");
    } else {
        let id = $("#editcategoryid").val();
        let name = $("#editcategoryname").val();
        $.ajax({
            url: "/public/adminapi",
            type: "post",
            data: {
                action: "updatecategory",
                datas: id + "-" + name
            },
            success: function(res) {
                let datas = JSON.parse(res);
                if (datas.success) {
                    $("#emptyEditModal").modal("hide");
                    $("#cat" + id).text(name);
                    Swal.fire(
                        datas.message,
                        "",
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire('Error', '', 'info')
                }
                // $("#productEditModal").modal("hide");
                // location.reload();
            },
            error: function(res) {
                console.warn(res);
            }
        });
    }

}

function productTrash(tar, id) {
    Swal.fire({
        title: 'Are you sure want to move this item to the Trash?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "productTrash",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        $(tar).parent().parent().remove();
                        $("#p" + id).parent().remove();
                        Swal.fire(
                                resdata.message,
                                "",
                                'success'
                            )
                            // alert(resdata.message);
                    } else {
                        Swal.fire(resdata.message)
                    }
                },
                error: function(res) {
                    Swal.fire('Error', '', 'info')
                }
            });
        }
    });
}

function orderTrash(id) {
    Swal.fire({
        title: 'Are you sure want to move this Order to the Trash?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "orderTrash",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    } else {
                        Swal.fire(resdata.message)
                    }
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }
    });

}

function roleTrash(tar, id) {
    Swal.fire({
        title: 'Are you sure want to move this role to the Trash?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "roleTrash",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        $(tar).parent().parent().remove();
                        $("#rol" + id).parent().remove();
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                        // alert(resdata.message);
                    } else {
                        Swal.fire(resdata.message)
                    }
                },
                error: function(res) {
                    Swal.fire('Error', '', 'info')
                }
            });
        }
    });
}

function categoryTrash(tar, id) {
    Swal.fire({
        title: 'Are you sure want to move this category to the Trash?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "categoryTrash",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        $(tar).parent().parent().remove();
                        $("#rol" + id).parent().remove();
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                        // alert(resdata.message);
                    } else {
                        Swal.fire(resdata.message)
                    }
                },
                error: function(res) {
                    Swal.fire('Error', '', 'info')
                }
            });
        }
    });
}

function userroleupdate(tar, id) {
    let role = $(tar).val();
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        data: {
            action: "userroleupdate",
            datas: id + "-" + role
        },
        success: function(res) {
            let resdata = JSON.parse(res);
            if (resdata.success) {
                Swal.fire(
                        resdata.message,
                        "",
                        'success'
                    )
                    // alert(resdata.message);
            } else {
                Swal.fire(resdata.message)
                    // alert(resdata.message);
            }
        },
        error: function(res) {
            Swal.fire(res)
        }
    });
}

function userban(tar, id) {
    Swal.fire({
        title: 'Are you sure you want to ban this user?',
        showDenyButton: true,
        icon: 'warning',
        confirmButtonText: `Yes`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                data: {
                    action: "userban",
                    datas: id
                },
                success: function(res) {
                    let resdata = JSON.parse(res);
                    if (resdata.success) {
                        $(tar).parent().parent().remove();
                        Swal.fire(
                            resdata.message,
                            "",
                            'success'
                        )
                    } else {
                        Swal.fire(resdata.message)
                    }
                },
                error: function(res) {
                    console.log(res);
                }
            });
        }
    });

}

function roleEdit(id) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        data: {
            action: "getEditRole",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            $("#emptyEditModal").modal("show");
            let input = `
            <form onsubmit="roleUpdate(event);" id="myform" enctype="multipart/form-data">
                <div class="form-group">
                    <input type="hidden" id="editroleid" value="${datas[0].id}" name="id">
                    <input type="text" autocomplete="off" value="${datas[0].name}" id="editrolename" class="font-body form-control rounded-0 my-3" name="name" placeholder="Role Name">
                    <input type="submit" class="btn btn-success rounded-0 float-right" value="Edit">
                </div>
            </form>        
            `;
            $("#editplace").html(input);

        },
        error: function(res) {

        }
    })
}

function categoryEdit(id) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        data: {
            action: "getEditCategory",
            datas: id
        },
        success: function(res) {
            let datas = JSON.parse(res);
            $("#emptyEditModal").modal("show");
            let input = `
            <form onsubmit="categoryUpdate(event);" id="myform" enctype="multipart/form-data">
                <div class="form-group">
                    <input type="hidden" id="editcategoryid" value="${datas[0].id}" name="id">
                    <input type="text" autocomplete="off" value="${datas[0].name}" id="editcategoryname" class="font-body form-control rounded-0 my-3" name="name" placeholder="Role Name">
                    <input type="submit" class="btn btn-success rounded-0 float-right" value="Edit">
                </div>
            </form>        
            `;
            $("#editplace").html(input);
        },
        error: function(res) {

        }
    })
}

function productEdit(id) {
    $.ajax({
        url: "/public/adminapi",
        type: "post",
        data: {
            action: "getEditProduct",
            datas: id
        },
        success: function(res) {
            $("#productEditModal").modal("show");
            let products = JSON.parse(res)[0];
            $("#editid").val(id);
            $("#editbrand").val(products.brand);
            $("#editabout").val(products.about);
            $("#editprice").val(products.price);
            $("#editimgold").val(products.image);
            $("#editcolor").val(products.color);
            $("#editsize").val(products.size);
            $("#editstate").val(products.state);
            $("#ControlSelect option[value=" + products.category_id + "]").attr('selected', 'selected');
        },
        error: function(res) {
            console.warn(res);
        }
    });
}
$('.datepicker').datepicker({ format: "yyyy-mm-dd", clear: "Clear", });

function getallcountwithdate() {
    $("carbox-picker>div>div").click(function() {
        $("carbox-picker>input").focus();
    });
    $("carbox-picker>input").keydown(function(e) {
        if (e.which == 13) {
            $("carbox-picker>div").fadeOut();
            $(this).blur();
            $("#todaytext").text("Show by : " + $(this).val());
            let date = $(this).val();
            $(this).val("");
            $.ajax({
                url: "/public/adminapi",
                type: "post",
                beforeSend: function() {
                    $(".loaderwrap").fadeIn();
                },
                data: {
                    action: "getallcountwithdate",
                    datas: date
                },
                success: function(res) {
                    let datas = JSON.parse(res);
                    $("#admin-viewers").text(JSON.parse(datas.viewers));
                    $("#admin-orders").text(JSON.parse(datas.orders));
                    $("#admin-products").text(JSON.parse(datas.products));
                    $("#admin-sales").text(JSON.parse(datas.sales));
                    $(".loaderwrap").fadeOut();
                },
                error: function(res) {
                    console.warn(res);
                }
            });
        }

    });
}

function sidemenu() {
    if ($("#adminside__btn").length) {
        $("#adminside__btn").click(function() {
            $("#adminside").toggleClass("show");
        });
    }
}

function successview() {
    if ($("#successpay_view").length) {
        $("#successpay_view").click(function() {
            $("#myModalpayView").modal("show");
        });
        $("#successpay_view1").click(function() {
            $("#myModalpayView").modal("show");
        });
    }
}

function chart() {
    if ($("#myChart").length) {
        let ctx = document.getElementById('myChart');
        $.ajax({
            url: "/public/adminapi",
            data: {
                action: "getchartbar"
            },
            beforeSend: function() {
                $(".loaderwrap").fadeIn();
            },
            type: "POST",
            success: function(res) {
                let datalist = JSON.parse(res);
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                        datasets: [{
                            label: 'Sales',
                            data: [datalist["2010"], datalist["2011"], datalist["2012"], datalist["2013"], datalist["2014"], datalist["2015"], datalist["2016"], datalist["2017"], datalist["2018"], datalist["2019"]],
                            backgroundColor: [
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec",
                                "#ecec"
                            ],
                            borderColor: [
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000",
                                "#000"
                            ],
                            borderWidth: 1
                        }]
                    }
                });
                $(".loaderwrap").fadeOut();
            },
            error: function(res) {
                console.warn(res);
            },
        });
    }
}

function chart1() {
    if ($("#myChart1").length) {
        let ctx = document.getElementById('myChart1');
        $.ajax({
            url: "/public/adminapi",
            type: "POST",
            data: {
                action: "getforpolar"
            },
            beforeSend: function() {
                $(".loaderwrap").fadeIn();
            },
            success: function(res) {
                let datas = JSON.parse(res);
                let myChart = new Chart(ctx, {
                    type: 'polarArea',
                    labels: "Sales",
                    data: {
                        datasets: [{
                            data: [datas["ordercount"], datas["productcount"]],
                            backgroundColor: [
                                "#000000",
                                "#ecec"
                            ]
                        }],
                        labels: [
                            'Order',
                            'Product'
                        ]

                    }
                });
                $(".loaderwrap").fadeOut();
            },
            error: function(res) {
                console.warn(res);
            }
        });

    }
}

function chart2() {
    if ($("#myChart2").length) {
        let ctx = document.getElementById("myChart2").getContext("2d");
        $.ajax({
            url: "/public/adminapi",
            type: "POST",
            beforeSend: function() {
                $(".loaderwrap").fadeIn();
            },
            data: {
                action: "getallcountlineviewer"
            },
            success: function(res) {
                let datas = JSON.parse(res);
                let chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                        datasets: [{
                            backgroundColor: "#ecec",
                            label: "Viewers",
                            data: [
                                datas["2010"], datas["2011"], datas["2012"], datas["2013"], datas["2014"], datas["2015"], datas["2016"], datas["2017"], datas["2018"], datas["2019"],
                            ],
                            pointBackgroundColor: "#000",
                            borderWidth: 1,
                            fill: true,
                            lineTension: 0.1,
                            borderCapStyle: "butt"
                        }]
                    }
                });
                $(".loaderwrap").fadeOut();
            },
            error: function(res) {
                console.log(res);
            }


        });

    }
}

function chart3() {
    if ($("#myChart3").length) {
        let ctx = document.getElementById("myChart3").getContext("2d");
        $.ajax({
            url: "/public/adminapi",
            type: "POST",
            data: {
                action: "getcountforproductline"
            },
            beforeSend: function() {
                $(".loaderwrap").fadeIn();
            },
            success: function(res) {
                let datas = JSON.parse(res);
                let chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                        datasets: [{
                            backgroundColor: "#000000",
                            label: "Products",
                            data: [
                                datas["2010"], datas["2011"], datas["2012"], datas["2013"], datas["2014"], datas["2015"], datas["2016"], datas["2017"], datas["2018"], datas["2019"]
                            ],
                            pointBackgroundColor: "#000000",
                            borderWidth: 1,
                            fill: false,
                            borderColor: "#000000",
                            lineTension: 0.1,
                            borderCapStyle: "butt"
                        }]
                    }
                });
                $(".loaderwrap").fadeOut();
            },
            error: function(res) {
                console.warn(res);
            }
        });

    }
}

function scrollchg() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#header").addClass("sticky");
            $("#header_list li a").addClass("text-dark");
            $("#header #logo_text").addClass("text-dark");
            $("#header i").addClass("text-dark");
        } else {
            $("#header").removeClass("sticky");
            $("#header_list li a").removeClass("text-dark");
            $("#header #logo_text").removeClass("text-dark");
            $("#header i").removeClass("text-dark");
        }
    });
}

function search() {
    $("#search").click(function() {

        if ($("#search_wraper").length) {
            $("#search_wraper").remove();
        } else {
            let div = $("<div>", {
                "id": "search_wraper"
            });

            let input = $("<input>", {
                "class": "form-control",
                "id": "search_input",
                "placeholder": "Search"
            }).keydown(function(e) {
                if (e.which == 13) $("#search_btn").click();
            });
            let searchbtn = $("<input>", {
                "type": "submit",
                "id": "search_btn"
            }).css({
                display: "none"
            }).click(function() {
                alert("Searching.....");
            });
            let close = $("<span>", {
                "id": "search_close"
            }).html("&times;").click(function() {
                $(this).parent().remove();
            });
            div.append(searchbtn);
            div.append(input);
            div.append(close);

            $(header).append(div);
        }

    });
}

function todayalldatascount() {
    if ($("#admin-viewers").length && $("#admin-orders").length && $("#admin-sales").length && $("#admin-products").length) {
        $.ajax({
            url: "/public/adminapi",
            type: "post",
            beforeSend: function() {
                $(".loaderwrap").fadeIn();
            },
            data: {
                action: "getallcountdatas"
            },
            success: function(res) {
                let datas = JSON.parse(res);
                $("#admin-viewers").text(JSON.parse(datas.viewers));
                $("#admin-orders").text(JSON.parse(datas.orders));
                $("#admin-products").text(JSON.parse(datas.products));

                $("#admin-sales").text(JSON.parse(datas.sales));
                $(".loaderwrap").fadeOut();
            },
            error: function(res) {
                console.warn(res);
            }
        });
    }
}
