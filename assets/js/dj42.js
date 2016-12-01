$.getJSON( "./assets/data.json", function( data ) {

  var tracks = data.tracks;


  $('.coverflow li').each( function(key, val){
    $(this)
      .find('a')
      .html('<img src="./assets/images/'+tracks[key].filename+'.jpg">')
      .attr('id', 'track'+key)
  });

  $('.coverflow li a').click(function() {

    var id = $('.coverflow li a').index(this);
    var track = tracks[id];


    $('.player, #trackTitle, .credits').html('')
    $('#trackTitle').html('0'+(id+1)+'<br/>'+track.title)


    $.each(track.clips, function(key, clip){
      console.log(key, clip, $('#video'+key) );
      $('#video'+ key +' .player' ).html(embedCode(clip.videoId))
      $('#video'+ key +' .credits').html(clip.credits)
    })
  }).hover(function(){
    var id = $('.coverflow li a').index(this);
    var track = tracks[id];

    $('body').css("background-image", 'url(./assets/images/'+track.filename+'.jpg)');
  })

  function embedCode(vimeoId){
    return '<iframe src="https://player.vimeo.com/video/'+vimeoId+'?autoplay=0&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
  }

});


