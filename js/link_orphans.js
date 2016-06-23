/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function () {
  jQuery("#edit-page-select").change(function(){
    var selectedValue = jQuery("#edit-page-select").find(":selected").val();
    jQuery("input#edit-page").val(selectedValue);
    return false;
  });
});
