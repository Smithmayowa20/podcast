$(function() {

    $('head').append('<link rel="stylesheet" href="assets/css/colors/style-switcher.css" type="text/css" />');
    // $('head').append('<script type="text/javascript" src="assets/css/colors/jquery.cookie.min.js"></script>');

    //Style container
    var switcher = $(`<div class="switcher"><span class="switch"><i class="fas fa-cog fa-spin"></i></span><div><p>
														All podcast get their own page which is constantly updated with their recent episode 
														detail. 
													</p>
													<p>
														Also all users get to select the podcast that they constantly listen to, and 
														therefore after every podcast episode, users who have been identified as having a preferential
														for that podcast are notified to help select the name of the person that they think the recent 
														guest was from a list of all users and also to vote on already selected guest names in the guest name poll.
													</p>
													<p>
														And therfore the selected guest with the highest vote after a day or so is determined to 
														have been the guest on that episode. Of course the owner of the podcast gets to veto select the guest who attended his podcast.
													</p>
													<br><br>
													</div>
												</div>`);

    $('body').append(switcher);

    // Display after some time 
    $(".switcher .switch-h").delay("1500").fadeIn(3000);

    setTimeout(function() {
        $('.switcher .switch-h').fadeOut()
    }, 10000);

    $('.switch').click(function() {
        var $slidebox = $('.switcher');
        // var $s_hide=1;
        if ($slidebox.css('left') == "-251px") {
            $slidebox.animate({
                left: 0
            }, 300);
        } else {
            $slidebox.animate({
                left: -251
            }, 300);
            // $.cookie('switch', $s_hide);
        }
    });


    // box layout - start
    // ==================================================
    $("#box-layout").bind("click", function() {
        $("body").addClass('box-layout');
    });
    $("#full-width").bind("click", function() {
        $("body").removeClass('box-layout');
    });
    // box layout - end
    // ================================================== 


    // Color Changer
    // By Cookie
    /*if($.cookie('mikiColor')!=null){
    	var color_code = $.cookie('mikiColor');
    	$('link[id="color_theme"]').attr('href', 'assets/css/colors/'+color_code+'.css');
    }*/
    // By click
    $('.s-color a').click(function(e) {
        e.preventDefault();
        var color_code = $(this).attr('data-code');
        $('link[id="color_theme"]').attr('href', 'assets/css/colors/' + color_code + '.css');
        // $.cookie('mikiColor', color_code);
    });


});