$(document).ready(function(){

    $("#sub_btn").on("click", function(){
        toastr.success('메일이 성공적으로 전송되었습니다.');
       setTimeout(emptyValue, 3000);
    });

    function emptyValue(){
        $(".form-control").val("");
    }

    jQuery( '#copy-url').click(
        function(e) {
            e.preventDefault();
            var urlbox = document.getElementById( 'textbox-url' );
            urlbox.select();
            document.execCommand( 'Copy' );
            toastr.info('메일이 복사되었습니다.');
        }
    );    

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "1500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
})