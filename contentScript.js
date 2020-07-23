console.log("Hello there!")

function getArticle() {
  if (document.getElementsByClassName("uI_hDmU5GSiudtABRz_37")[0]) {
    article = document.getElementsByClassName("uI_hDmU5GSiudtABRz_37")[0].getElementsByClassName("_13svhQIUZqD9PVzFcLwOKT")[0]
    getRanked(article)
  } else {
    setTimeout(getArticle, 100)
  }
}

function getRanked(article){
  if (article) {
    encodedURI = encodeURIComponent(article.href)
    fetch(`http://127.0.0.1:5000/api/v1/rank?url=${encodedURI}`, {
      method: 'GET'
    })
      .then(response => {
        console.log("Response")
        return response.json()
      })
      .then(response => {
        var summaryContent = ''
        for (var i=0; i<response.length; i++) {
          console.log(response[i])
          summaryContent += '<p class="_1qeIAgB0cPwnLhDF9XSiJM">' + (i+1) + ". " + response[i] 
        }
        var newElement = document.createElement('div');
        newElement.classList.add("_1YCqQVO-9r-Up6QPB9H6_4")
        newElement.innerHTML = '<div><div><div id="t1_fyra2vi" style="padding-left:16px" tabindex="-1" class="_3sf33-9rVAO_v4y0pIW_CH _1XNv4WhzL_uEQ36cwbjMOe"><div class="_1DooEIX-1Nj5rweIc5cw_E"><div class="_3Wv3am0TXfTcugZJ6niui"><div class="_36AIN2ppxy_z-XSDxTvYj5 t1_fyra2vi _3cea2-bu-AjagXhuQfp9Zu"><i class="threadline"></i></div></div></div><div class="P8SGAKMtRxNwlmLz1zdJu Comment t1_fyra2vi P8SGAKMtRxNwlmLz1zdJu _1z5rdmX8TDr6mqwNv7A70U"><div class="_1E9mcoVn4MYnuBQSVDt1gC kB7GZ7EzNg1Msq-nEnY0z" id="vote-arrows-t1_fyra2vi"><button aria-label="upvote" aria-pressed="false" class="voteButton _2m5vzALl8kQdr9kwIFUo5t" data-click-id="upvote"><span class="_3wVayy5JvIMI67DheMYra2 _3SUsITjKNQ7Tp0Wi2jGxIM _22nWXKAY6OzAfK5GcUqWV2 qW0l8Af61EP35WIG6vnGk _3edNsMs0PNfyQYofMNVhsG"><i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA _39UOLMgvssWenwbRxz_iEn"></i></span></button><button aria-label="downvote" aria-pressed="false" class="voteButton _2m5vzALl8kQdr9kwIFUo5t" data-click-id="downvote"><span class="jR747Vd1NbfaLusf5bHre Q0BxYHtCOJ_rNSPJMU2Y7 _22nWXKAY6OzAfK5GcUqWV2 _2fe-KdD2OM0ciaiux-G1EL _3yQIOwaIuF6gn8db96Gu7y"><i class="icon icon-downvote ZyxIIl4FP5gHGrJDzNpUC _2GCoZTwJW7199HSwNZwlHk"></i></span></button></div><div class="_3tw__eCCe7j-epNCKGXUKk "><span class="_1RIl585IYPW6cmNXwgRz0J">level 1</span><div class="_1S45SPAIb30fsXtEcKPSdt  _3ezOJqKdLbgkHsXcfvS5SA "><div class="_2mHuuvyV9doV3zwbZPtIPG"><a class="f3THgbzMYccGW8vbqZBUH _23wugcdiaj44hdfugIAlnX ">Summary</a><div class="_16AAktgl_rVbXAeiWU9CQd" id="UserInfoTooltip--t1_fyra2vi"></div></div><a href="/r/worldnews/comments/hv5ch1/the_uk_government_actively_avoided_investigating/fyra2vi/" id="CommentTopMeta--Created--t1_fyra2vi" rel="nofollow" target="_blank" class="_1sA-1jNHouHDpgCp1fCQ_F"></a><div class="_3XoW0oYd5806XiOr24gGdb"></div></div><div data-test-id="comment" class="_3cjCphgls6DH-irkVaA0GM"><div theme="[object Object]" style="color:#D7DADC" class="_292iotee39Lmt0MkQZ2hPV RichTextJSON-root">\
        <p class="_1qeIAgB0cPwnLhDF9XSiJM">Summary: ' +
        summaryContent
        '</p></div></div><div class="_3KgrO85L1p9wQbgwG27q4y"><div class="XZK-LTFT5CgGo9MvPQQsy _1LXnp2ufrzN6ioaTLTjGQ1 _2t8wLytikHzPCUnvXdS_wu  _2_lhaFUJdP8q0o2L9MN2TN"><button class="_374Hkkigy4E4srsI2WktEd"><i class="icon icon-comment _3ch9jJ0painNf41PmU4F9i _1g4YvNNIFoV_5_EhsVfyRy"></i>Reply</button><button class="_374Hkkigy4E4srsI2WktEd _2hr3tRWszeMRQ0u_Whs7t8 _14hLFU5cIJCyxH9DSgsCov">Give Award</button><div id="t1_fyra2vi-comment-share-menu"><button class="_374Hkkigy4E4srsI2WktEd">share</button></div><button class="_374Hkkigy4E4srsI2WktEd _2hr3tRWszeMRQ0u_Whs7t8 _14hLFU5cIJCyxH9DSgsCov">Report</button><button class="_374Hkkigy4E4srsI2WktEd _2hr3tRWszeMRQ0u_Whs7t8 _14hLFU5cIJCyxH9DSgsCov">Save</button><div class="hrV8gUgmt0V7wM2wgZ81l _1YnPvd-E5MbmcM3PvRRcX _14hLFU5cIJCyxH9DSgsCov"><button aria-expanded="false" aria-haspopup="true" aria-label="more options" id="t1_fyra2vi-overflow-menu" class="_2pFdCpgBihIaYh9DSMWBIu _1VR6DV38j4rMT5OMeU4gJZ uMPgOFYlCc5uvpa2Lbteu"><i class="icon icon-menu _2L8b_l8zFzAkWuMyZJ1_vg _38GxRFSqSC-Z2VLi5Xzkjy"></i></button></div></div></div></div></div></div></div></div>'    
  
        getCommentSection(newElement)
        
      })
      
  } else {
    console.log("no link")
  }
}

function getCommentSection(newElement) {
  if (document.getElementsByClassName("_1ump7uMrSA43cqok14tPrG")[0]) {
    commentSection = document.getElementsByClassName("_1ump7uMrSA43cqok14tPrG")[0]
    commentSection.insertBefore(newElement, commentSection.children[0])

  } else {
    setTimeout(getCommentSection.bind(null, newElement), 100)
  }
}

getArticle()


