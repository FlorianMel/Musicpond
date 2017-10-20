function redimensionnement(){

    var $image = $('img.superbg');
    var image_width = $image.width();
    var image_height = $image.height();

    var over = image_width / image_height;
    var under = image_height / image_width;

    var body_width = $(window).width();
    var body_height = $(window).height();

    if (body_width / body_height >= over) {
      $image.css({
        'width': body_width + 'px',
        'height': Math.ceil(under * body_width) + 'px',
        'left': '0px',
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px'
      });
    }

    else {
      $image.css({
        'width': Math.ceil(over * body_height) + 'px',
        'height': body_height + 'px',
        'top': '0px',
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px'
      });
    }
}
$(document).ready(function(){

    // Au chargement initial
    redimensionnement();

    // En cas de redimensionnement de la fenêtre
    $(window).resize(function(){
        redimensionnement();
    });


/*    $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
    ;*/



    $.getJSON("https://api.airtable.com/v0/appF1X1dfHOpDSVv2/Musique?api_key=keyXnk3EBClHYcj9b",
     function(data) {
         $.each(data.records, function(key,val) {
             if(val.fields.ashtags == 'Rap') {
                $("#musiques_rap").append(val.fields.URL);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.ashtags == 'Rock') {
                $("#musiques_rock").append(val.fields.URL);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.ashtags == 'Pop') {
                $("#musiques_pop").append(val.fields.URL);
             }

         });

        //. TOP 1
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Another One Bites The Dust') {
                $("#another_one_bites_the_dust_url").append(val.fields.URL_2);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Another One Bites The Dust') {
                $("#another_one_bites_the_dust_titre").append(val.fields.Titre);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Another One Bites The Dust') {
                $("#another_one_bites_the_dust_auteur").append(val.fields.Auteur);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Another One Bites The Dust') {
                $("#another_one_bites_the_dust_pochette").append(val.fields.pochette);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Another One Bites The Dust') {
                $("#another_one_bites_the_dust_album").append(val.fields.album);
             }

         });

        //. TOP 2
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Aquatrip') {
                $("#aquatrip_url").append(val.fields.URL_2);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Aquatrip') {
                $("#aquatrip_titre").append(val.fields.Titre);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Aquatrip') {
                $("#aquatrip_auteur").append(val.fields.Auteur);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Aquatrip') {
                $("#aquatrip_pochette").append(val.fields.pochette);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Aquatrip') {
                $("#aquatrip_album").append(val.fields.album);
             }

         });

        //. TOP 3
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'The Trooper') {
                $("#the_trooper_url").append(val.fields.URL_2);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'The Trooper') {
                $("#the_trooper_titre").append(val.fields.Titre);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'The Trooper') {
                $("#the_trooper_auteur").append(val.fields.Auteur);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'The Trooper') {
                $("#the_trooper_pochette").append(val.fields.pochette);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'The Trooper') {
                $("#the_trooper_album").append(val.fields.album);
             }

         });

        //. TOP 4
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Thrift Shop') {
                $("#thrift_shop_url").append(val.fields.URL_2);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Thrift Shop') {
                $("#thrift_shop_titre").append(val.fields.Titre);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Thrift Shop') {
                $("#thrift_shop_auteur").append(val.fields.Auteur);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Thrift Shop') {
                $("#thrift_shop_pochette").append(val.fields.pochette);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'Thrift Shop') {
                $("#thrift_shop_album").append(val.fields.album);
             }

         });

        //. TOP 5
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'In Da Club (Int.l Version)') {
                $("#in_da_club_url").append(val.fields.URL_2);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'In Da Club (Int.l Version)') {
                $("#in_da_club_titre").append(val.fields.Titre);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'In Da Club (Int.l Version)') {
                $("#in_da_club_auteur").append(val.fields.Auteur);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'In Da Club (Int.l Version)') {
                $("#in_da_club_pochette").append(val.fields.pochette);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Titre == 'In Da Club (Int.l Version)') {
                $("#in_da_club_album").append(val.fields.album);
             }

         });
        $.each(data.records, function(key,val) {
             if(val.fields.Votes == '56') {
                $("#top_one").append(val.fields.URL);
             }
         });
        $.each(data.records, function(key,val) {
             if(val.fields.Votes == '41') {
                $("#top_two").append(val.fields.URL);
             }
         });
        $.each(data.records, function(key,val) {
             if(val.fields.Votes == '32') {
                $("#top_three").append(val.fields.URL);
             }
         });
       }
     );
});
