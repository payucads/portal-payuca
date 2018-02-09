   // Toastr options
   toastr.options = {
   "closeButton": true,
   "debug": false,
   "newestOnTop": false,
   "progressBar": false,
   "positionClass": "toast-bottom-right",
   "preventDuplicates": true,
   "onclick": null,
   "showDuration": "300",
   "hideDuration": "1000",
   "timeOut": "0",
   "extendedTimeOut": "0",
   "showEasing": "swing",
   "hideEasing": "linear",
   "showMethod": "fadeIn",
   "hideMethod": "fadeOut"
   }

   $(document).ready(function () {
         toastr.warning('Wir benutzen Cookies um sicherzustellen, dass unsere Website richtig funktioniert. <br /> Durch die Nutzung dieser Website akzeptieren Sie den Einsatz unserer Cookies.', 'Cookie Hinweis');
   });
