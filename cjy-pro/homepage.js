/**
 * Created by ran on 5/4/2015.
 */
$(document).ready(function(){
    $("section.learn_info").hide();
    $("#know_more").click(function(){
        $("section.learn_info").show();
    });
})